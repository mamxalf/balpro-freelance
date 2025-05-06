import { getPostData } from '@/lib/blog-server';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;

  try {
    const post = await getPostData(slug);
    return NextResponse.json(post);
  } catch (error) {
    console.error(`Error fetching blog post ${slug}:`, error);
    return NextResponse.json({ error: 'Failed to fetch blog post' }, { status: 500 });
  }
}
