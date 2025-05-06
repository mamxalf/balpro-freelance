/**
 * Calculate the estimated reading time for a given text
 * @param text The text content to calculate reading time for
 * @param wordsPerMinute The average reading speed in words per minute (default: 200)
 * @returns The estimated reading time in minutes
 */
export function calculateReadingTime(text: string, wordsPerMinute: number = 200): number {
  // Remove HTML tags
  const plainText = text.replace(/<[^>]*>/g, '');
  
  // Count words (split by spaces and filter out empty strings)
  const words = plainText.split(/\s+/).filter(Boolean);
  const wordCount = words.length;
  
  // Calculate reading time in minutes
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  
  // Return at least 1 minute
  return Math.max(1, readingTime);
}

/**
 * Format the reading time with appropriate unit
 * @param minutes The reading time in minutes
 * @returns Formatted reading time string (e.g., "5 min read")
 */
export function formatReadingTime(minutes: number): string {
  return `${minutes} min read`;
}
