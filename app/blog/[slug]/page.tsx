import { getPostData, getAllPostSlugs } from '@/lib/blog-server';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag, Clock, RefreshCw } from 'lucide-react';
import '@/app/blog/blog.css';
import TableOfContents from '@/components/blog/table-of-contents';
import BackToTop from '@/components/blog/back-to-top';
import { calculateReadingTime, formatReadingTime } from '@/lib/reading-time';

// Mark this as a server component
export const dynamic = 'force-dynamic';

export async function generateStaticParams() {
  try {
    const posts = await getAllPostSlugs();
    return posts;
  } catch (error) {
    console.error('Error generating static params for posts:', error);
    return [];
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  try {
    const post = await getPostData(params.slug);

    return {
      title: `${post.title} | Balpro Blog`,
      description: post.excerpt,
    };
  } catch (error) {
    console.error(`Error generating metadata for post ${params.slug}:`, error);
    return {
      title: 'Blog Post | Balpro Blog',
      description: 'Read our latest blog post',
    };
  }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPostData(params.slug);

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Format last updated date if available
  const formattedLastUpdated = post.lastUpdated
    ? new Date(post.lastUpdated).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null;

  // Calculate reading time
  const readingTime = calculateReadingTime(post.content);
  const readingTimeText = formatReadingTime(readingTime);

  return (
    <div className="flex min-h-screen flex-col bg-white pt-16">
      <BackToTop />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="relative h-[40vh] md:h-[60vh] w-full">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-10 -mt-24">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 max-w-4xl mx-auto">
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

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>{formattedDate}</span>
                </div>

                <div className="flex items-center">
                  <Tag className="mr-2 h-4 w-4" />
                  <Link
                    href={`/blog/category/${post.category.toLowerCase().replace(/\s+/g, '-')}`}
                    className="hover:text-primary transition-colors"
                  >
                    {post.category}
                  </Link>
                </div>

                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4" />
                  <span>{readingTimeText}</span>
                </div>

                {formattedLastUpdated && (
                  <div className="flex items-center">
                    <RefreshCw className="mr-2 h-4 w-4" />
                    <span>Updated: {formattedLastUpdated}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="lg:grid lg:grid-cols-4 lg:gap-8">
              {/* Table of Contents - Only visible on large screens */}
              <div className="hidden lg:block lg:col-span-1">
                <TableOfContents />
              </div>

              {/* Main Content */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
                  <article className="prose prose-lg max-w-none
                    prose-headings:text-slate-800 prose-headings:font-bold prose-headings:mb-4 prose-headings:mt-8
                    prose-h1:text-3xl prose-h1:mt-10 prose-h1:mb-6
                    prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
                    prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
                    prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-6
                    prose-a:text-primary prose-a:font-medium prose-a:no-underline hover:prose-a:text-primary/80 hover:prose-a:underline
                    prose-blockquote:border-l-4 prose-blockquote:border-primary/50 prose-blockquote:bg-slate-50 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-md prose-blockquote:italic prose-blockquote:my-6
                    prose-ul:list-disc prose-ul:pl-6 prose-ul:my-6
                    prose-ol:list-decimal prose-ol:pl-6 prose-ol:my-6
                    prose-li:mb-2 prose-li:text-slate-600
                    prose-img:rounded-lg prose-img:shadow-md prose-img:my-8
                    prose-hr:my-10 prose-hr:border-slate-200
                    prose-code:bg-slate-100 prose-code:text-slate-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
                    prose-pre:bg-slate-800 prose-pre:text-slate-100 prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto prose-pre:my-6
                    prose-table:border-collapse prose-table:w-full prose-table:my-8
                    prose-th:border prose-th:border-slate-300 prose-th:bg-slate-100 prose-th:p-2 prose-th:text-left
                    prose-td:border prose-td:border-slate-300 prose-td:p-2
                    ">
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Share Section */}
        <section className="py-10 border-t border-gray-100 bg-slate-50/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <h3 className="text-lg font-medium mb-3 text-slate-700">Share this article</h3>
                <div className="flex gap-3">
                  <button className="p-2.5 bg-white rounded-full hover:bg-blue-50 text-blue-600 transition-all duration-300 border border-slate-200 hover:border-blue-200 shadow-sm hover:shadow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </button>
                  <button className="p-2.5 bg-white rounded-full hover:bg-blue-50 text-sky-500 transition-all duration-300 border border-slate-200 hover:border-sky-200 shadow-sm hover:shadow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </button>
                  <button className="p-2.5 bg-white rounded-full hover:bg-blue-50 text-blue-700 transition-all duration-300 border border-slate-200 hover:border-blue-200 shadow-sm hover:shadow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </button>
                </div>
              </div>

              <Link
                href="/blog"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-white shadow-md hover:shadow-lg transition-all duration-300 hover:bg-primary/90 hover:-translate-y-0.5"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
                Back to all articles
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
