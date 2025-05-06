import { getAllCategoriesServer, getPostsByCategoryServer } from '@/lib/blog-server';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// Mark this as a server component
export const dynamic = 'force-dynamic';

export async function generateStaticParams() {
  try {
    const categories = await getAllCategoriesServer();
    return categories.map((category: string) => ({
      category: category.toLowerCase().replace(/\s+/g, '-'),
    }));
  } catch (error) {
    console.error('Error generating static params for categories:', error);
    return [];
  }
}

export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  const categoryName = params.category.replace(/-/g, ' ');

  return {
    title: `${categoryName.charAt(0).toUpperCase() + categoryName.slice(1)} | Balpro Blog`,
    description: `Browse our collection of articles about ${categoryName}`,
  };
}

export default async function CategoryPage({ params }: { params: { category: string } }) {
  const categorySlug = params.category;
  const categoryName = categorySlug.replace(/-/g, ' ');

  // Get all categories to display in the sidebar
  const allCategories = await getAllCategoriesServer();

  // Get posts for this category
  const categoryPosts = await getPostsByCategoryServer(categoryName);

  return (
    <div className="flex min-h-screen flex-col bg-white pt-16">
      <main className="flex-1">
        {/* Category Header */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              {/* Back button with improved styling */}
              <div className="mb-6">
                <Link
                  href="/blog"
                  className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors px-3 py-1.5 rounded-full border border-primary/20 hover:border-primary/40"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to all posts
                </Link>
              </div>

              {/* Category label with refined styling */}
              <div className="inline-block mb-5">
                <span className="text-xs uppercase tracking-widest text-primary font-medium px-3 py-1 bg-primary/10 rounded-full">
                  Category
                </span>
                <div className="h-0.5 w-16 bg-primary/40 mt-3 mx-auto"></div>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold mb-6 capitalize">
                {categoryName}
              </h1>

              <p className="text-lg text-muted-foreground">
                Browse our collection of articles about {categoryName.toLowerCase()}
              </p>
            </div>
          </div>
        </section>

        {/* Category Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-4 gap-10">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <h3 className="text-lg font-bold mb-5 border-b pb-2">Categories</h3>
                  <ul className="space-y-3">
                    {allCategories.map((category) => {
                      const isActive = category.toLowerCase() === categoryName.toLowerCase();
                      return (
                        <li key={category}>
                          <Link
                            href={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                            className={`flex items-center text-sm transition-all px-3 py-2 rounded-lg ${
                              isActive
                                ? 'text-primary font-medium bg-primary/10 shadow-sm'
                                : 'text-muted-foreground hover:text-primary hover:bg-slate-50'
                            }`}
                          >
                            <span
                              className={`w-2 h-2 rounded-full mr-2.5 transition-all ${
                                isActive
                                  ? 'bg-primary scale-110'
                                  : 'bg-muted-foreground/40'
                              }`}
                            ></span>
                            {category}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              {/* Posts Grid */}
              <div className="lg:col-span-3">
                {categoryPosts.length > 0 ? (
                  <div className="grid md:grid-cols-2 gap-8">
                    {categoryPosts.map((post) => (
                      <div
                        key={post.slug}
                        className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                      >
                        <div className="relative h-48 md:h-60">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex items-center text-xs text-muted-foreground mb-2">
                            <span>{new Date(post.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}</span>
                            <span className="mx-2">•</span>
                            <span>{post.category}</span>
                          </div>
                          <h3 className="text-lg font-bold mb-2">{post.title}</h3>
                          <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                            {post.excerpt}
                          </p>
                          <Link
                            href={`/blog/${post.slug}`}
                            className="inline-flex items-center text-primary text-sm font-medium"
                          >
                            <span>Read More</span>
                            <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16 px-6 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400">
                        <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                        <line x1="12" y1="9" x2="12" y2="13"/>
                        <line x1="12" y1="17" x2="12.01" y2="17"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-medium mb-2">No posts found</h3>
                    <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                      There are currently no posts in the <span className="font-medium text-slate-700">{categoryName}</span> category.
                    </p>
                    <Link
                      href="/blog"
                      className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                        <path d="m9 18 6-6-6-6"/>
                      </svg>
                      Browse all posts
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
