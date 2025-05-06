import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col bg-white pt-16">
      <main className="flex-1">
        {/* Category Header Skeleton */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <Skeleton className="h-5 w-32 mx-auto mb-4" />
              
              <div className="inline-block mb-4">
                <Skeleton className="h-4 w-20 mx-auto" />
                <Skeleton className="h-1 w-20 mt-1 mx-auto" />
              </div>
              
              <Skeleton className="h-12 w-3/4 mx-auto mb-6" />
              
              <Skeleton className="h-6 w-full mx-auto" />
            </div>
          </div>
        </section>
        
        {/* Category Content Skeleton */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-4 gap-10">
              {/* Sidebar Skeleton */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <Skeleton className="h-7 w-32 mb-4" />
                  <ul className="space-y-2">
                    {Array(7)
                      .fill(null)
                      .map((_, index) => (
                        <li key={index}>
                          <div className="flex items-center">
                            <Skeleton className="h-2 w-2 rounded-full mr-2" />
                            <Skeleton className="h-5 w-32" />
                          </div>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
              
              {/* Posts Grid Skeleton */}
              <div className="lg:col-span-3">
                <div className="grid md:grid-cols-2 gap-8">
                  {Array(4)
                    .fill(null)
                    .map((_, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-xl overflow-hidden shadow-sm"
                      >
                        <Skeleton className="h-48 md:h-60 w-full" />
                        <div className="p-6">
                          <div className="flex items-center mb-2">
                            <Skeleton className="h-3 w-20" />
                            <Skeleton className="h-3 w-3 mx-2 rounded-full" />
                            <Skeleton className="h-3 w-20" />
                          </div>
                          <Skeleton className="h-6 w-full mb-2" />
                          <Skeleton className="h-4 w-full mb-1" />
                          <Skeleton className="h-4 w-full mb-1" />
                          <Skeleton className="h-4 w-2/3 mb-4" />
                          <Skeleton className="h-4 w-24" />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
