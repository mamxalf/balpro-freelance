import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { BlogPost } from './blog-types';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export async function getSortedPostsData(): Promise<BlogPost[]> {
  try {
    // Get file names under /content/blog
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
      // Remove ".md" from file name to get slug
      const slug = fileName.replace(/\.md$/, '');

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Combine the data with the slug
      return {
        slug,
        title: matterResult.data.title || '',
        date: matterResult.data.date || '',
        excerpt: matterResult.data.excerpt || '',
        content: matterResult.content,
        category: matterResult.data.category || '',
        image: matterResult.data.image || '/placeholder.svg',
        featured: matterResult.data.featured || false,
      };
    });

    // Sort posts by date
    return allPostsData.sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

export async function getAllPostSlugs() {
  try {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map((fileName) => {
      return {
        params: {
          slug: fileName.replace(/\.md$/, ''),
        },
      };
    });
  } catch (error) {
    console.error('Error getting post slugs:', error);
    return [];
  }
}

export async function getPostData(slug: string): Promise<BlogPost> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Combine the data with the slug and contentHtml
    return {
      slug,
      title: matterResult.data.title || '',
      date: matterResult.data.date || '',
      excerpt: matterResult.data.excerpt || '',
      content: contentHtml,
      category: matterResult.data.category || '',
      image: matterResult.data.image || '/placeholder.svg',
      featured: matterResult.data.featured || false,
    };
  } catch (error) {
    console.error(`Error getting post data for ${slug}:`, error);
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

export async function getFeaturedPostsServer(): Promise<BlogPost[]> {
  const allPosts = await getSortedPostsData();
  return allPosts.filter(post => post.featured);
}

export async function getRecentPostsServer(count: number = 6): Promise<BlogPost[]> {
  const allPosts = await getSortedPostsData();
  return allPosts.slice(0, count);
}

export async function getPostsByCategoryServer(category: string): Promise<BlogPost[]> {
  const allPosts = await getSortedPostsData();
  return allPosts.filter(post => post.category.toLowerCase() === category.toLowerCase());
}

export async function getAllCategoriesServer(): Promise<string[]> {
  const allPosts = await getSortedPostsData();
  const categories = new Set<string>();
  
  allPosts.forEach(post => {
    if (post.category) {
      categories.add(post.category);
    }
  });
  
  return Array.from(categories);
}
