import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col bg-white pt-16">
      <main className="flex-1">
        {/* Hero Section Skeleton */}
        <section className="relative">
          <Skeleton className="h-[40vh] md:h-[60vh] w-full" />
          
          <div className="container mx-auto px-4 md:px-6 relative z-10 -mt-24">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 max-w-4xl mx-auto">
              <Skeleton className="h-5 w-32 mb-4" />
              
              <Skeleton className="h-10 w-full mb-2" />
              <Skeleton className="h-10 w-3/4 mb-4" />
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
                <div className="flex items-center">
                  <Skeleton className="h-4 w-4 mr-2" />
                  <Skeleton className="h-4 w-24" />
                </div>
                
                <div className="flex items-center">
                  <Skeleton className="h-4 w-4 mr-2" />
                  <Skeleton className="h-4 w-24" />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Content Section Skeleton */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <article className="prose prose-lg max-w-none">
                <Skeleton className="h-6 w-full mb-4" />
                <Skeleton className="h-6 w-5/6 mb-4" />
                <Skeleton className="h-6 w-4/5 mb-8" />
                
                <Skeleton className="h-8 w-2/3 mb-4" />
                <Skeleton className="h-6 w-full mb-2" />
                <Skeleton className="h-6 w-full mb-2" />
                <Skeleton className="h-6 w-4/5 mb-2" />
                <Skeleton className="h-6 w-5/6 mb-8" />
                
                <Skeleton className="h-8 w-2/3 mb-4" />
                <Skeleton className="h-6 w-full mb-2" />
                <Skeleton className="h-6 w-full mb-2" />
                <Skeleton className="h-6 w-3/4 mb-8" />
                
                <Skeleton className="h-8 w-2/3 mb-4" />
                <Skeleton className="h-6 w-full mb-2" />
                <Skeleton className="h-6 w-full mb-2" />
                <Skeleton className="h-6 w-5/6 mb-2" />
                <Skeleton className="h-6 w-4/5 mb-8" />
              </article>
            </div>
          </div>
        </section>
        
        {/* Share Section Skeleton */}
        <section className="py-8 border-t border-gray-100">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                <Skeleton className="h-6 w-40 mb-2" />
                <div className="flex gap-2">
                  <Skeleton className="h-10 w-10 rounded-full" />
                  <Skeleton className="h-10 w-10 rounded-full" />
                  <Skeleton className="h-10 w-10 rounded-full" />
                </div>
              </div>
              
              <Skeleton className="h-10 w-40 rounded-full" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
