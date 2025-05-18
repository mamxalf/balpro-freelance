import { PortfolioItem } from "./types";

/**
 * Generates portfolio items from gallery image filenames
 * Parses filenames in the format "Name1 & Name2.jpg/webp" to create title and description
 */
export function generatePortfolioItems(imageFiles: string[]): PortfolioItem[] {
  return imageFiles.map((filename) => {
    // Remove file extension
    const nameWithoutExt = filename.replace(/\.(jpg|webp)$/, "");
    
    // Split the names
    const names = nameWithoutExt.split(" & ");
    
    // Create title and description
    const title = nameWithoutExt;
    const description = names.length === 2 
      ? `${names[0]} and ${names[1]}'s wedding celebration`
      : "A beautiful wedding celebration";
    
    return {
      src: `/gallery/${filename}`,
      title,
      description
    };
  });
}

/**
 * Selects featured items for the homepage gallery
 * Returns 4 items with specific ones highlighted as featured (larger display)
 */
export function selectFeaturedItems(items: PortfolioItem[]): PortfolioItem[] {
  // If we have fewer than 4 items, return all of them
  if (items.length <= 4) return items;
  
  // Otherwise, select 4 items - you can customize this selection logic
  // For now, we'll just take the first 4
  return items.slice(0, 4);
}
