"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BlogPost } from "@/lib/blog-types";
import { fetchRecentPosts } from "@/lib/blog-client";

export default function HomeBlogPosts({ onPostsLoaded }: { onPostsLoaded?: (hasPosts: boolean) => void } = {}) {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const allPosts = await fetchRecentPosts();
        // Get the 3 most recent posts
        const recentPosts = allPosts.slice(0, 3);
        setPosts(recentPosts);
        
        // Notify parent component if there are posts
        if (onPostsLoaded) {
          onPostsLoaded(recentPosts.length > 0);
        }
      } catch (error) {
        console.error("Error fetching blog posts for homepage:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (isLoading) {
    return (
      <div className="grid md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm animate-pulse">
            <div className="h-60 bg-slate-200"></div>
            <div className="p-6">
              <div className="h-4 bg-slate-200 rounded w-2/3 mb-4"></div>
              <div className="h-6 bg-slate-200 rounded w-full mb-3"></div>
              <div className="h-6 bg-slate-200 rounded w-5/6 mb-3"></div>
              <div className="h-4 bg-slate-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-slate-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-slate-200 rounded w-2/3 mb-4"></div>
              <div className="h-4 bg-slate-200 rounded w-1/4"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Format date to be more readable
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {posts.map((post, index) => (
        <motion.div
          key={post.slug}
          className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <div className="relative h-60">
            <Image
              src={post.image || `/placeholder.svg?height=400&width=600&text=Blog+${index + 1}`}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center text-xs text-muted-foreground mb-2">
              <span>{formatDate(post.date)}</span>
              <span className="mx-2">•</span>
              <span>{post.category}</span>
            </div>
            <h3 className="text-xl font-medium mb-2 line-clamp-2">
              {post.title}
            </h3>
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
        </motion.div>
      ))}
    </div>
  );
}
