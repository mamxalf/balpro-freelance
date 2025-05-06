import { BlogPost } from './blog-types';

// Empty fallback data for when API calls fail
const emptyPosts: BlogPost[] = [];
const emptyCategories: string[] = [];

// API fetch functions
export async function fetchPosts(): Promise<BlogPost[]> {
  try {
    const response = await fetch('/api/blog?type=all');
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching posts:', error);
    return emptyPosts;
  }
}

export async function fetchFeaturedPosts(): Promise<BlogPost[]> {
  try {
    const response = await fetch('/api/blog?type=featured');
    if (!response.ok) {
      throw new Error('Failed to fetch featured posts');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching featured posts:', error);
    return emptyPosts;
  }
}

export async function fetchRecentPosts(): Promise<BlogPost[]> {
  try {
    // Use type=all to get all posts instead of just recent ones with a limit
    const response = await fetch(`/api/blog?type=all`);
    if (!response.ok) {
      throw new Error('Failed to fetch all posts');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching all posts:', error);
    return emptyPosts;
  }
}

export async function fetchPostsByCategory(category: string): Promise<BlogPost[]> {
  try {
    const response = await fetch(`/api/blog?type=category&category=${encodeURIComponent(category)}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch posts for category: ${category}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching posts for category ${category}:`, error);
    return emptyPosts;
  }
}

export async function fetchAllCategories(): Promise<string[]> {
  try {
    const response = await fetch('/api/blog?type=categories');
    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching categories:', error);
    return emptyCategories;
  }
}

export async function fetchPostBySlug(slug: string): Promise<BlogPost> {
  try {
    const response = await fetch(`/api/blog/${slug}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch post: ${slug}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching post ${slug}:`, error);
    return {
      slug,
      title: 'Post Not Found',
      date: '',
      excerpt: '',
      content: '<p>This post could not be found.</p>',
      category: '',
      image: '/placeholder.svg',
      featured: false,
    };
  }
}
