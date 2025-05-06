import { getSortedPostsData, getPostsByCategoryServer, getFeaturedPostsServer, getRecentPostsServer, getAllCategoriesServer } from '@/lib/blog-server';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const type = searchParams.get('type');
  const category = searchParams.get('category');
  const count = searchParams.get('count');

  try {
    let data;

    switch (type) {
      case 'all':
        data = await getSortedPostsData();
        break;
      case 'featured':
        data = await getFeaturedPostsServer();
        break;
      case 'recent':
        if (count) {
          data = await getRecentPostsServer(parseInt(count));
        } else {
          data = await getRecentPostsServer();
        }
        break;
      case 'category':
        if (category) {
          data = await getPostsByCategoryServer(category);
        } else {
          return NextResponse.json({ error: 'Category parameter is required' }, { status: 400 });
        }
        break;
      case 'categories':
        data = await getAllCategoriesServer();
        break;
      default:
        return NextResponse.json({ error: 'Invalid type parameter' }, { status: 400 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching blog data:', error);
    return NextResponse.json({ error: 'Failed to fetch blog data' }, { status: 500 });
  }
}
