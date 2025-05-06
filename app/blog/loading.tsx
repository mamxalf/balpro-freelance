import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col bg-white pt-16">
      <main className="flex-1">
        {/* Blog Header Skeleton */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block mb-4">
                <Skeleton className="h-4 w-20 mx-auto" />
                <Skeleton className="h-1 w-20 mt-1 mx-auto" />
              </div>
              <Skeleton className="h-12 w-3/4 mx-auto mb-6" />
              <Skeleton className="h-6 w-full mx-auto mb-8" />

              <div className="relative max-w-md mx-auto">
                <Skeleton className="h-12 w-full rounded-full" />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts Skeleton */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-12">
              <Skeleton className="h-8 w-48 mb-2" />
              <Skeleton className="h-1 w-20" />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[1, 2].map((item) => (
                <div
                  key={item}
                  className="bg-white rounded-xl overflow-hidden shadow-sm"
                >
                  <Skeleton className="h-64 md:h-72 w-full" />
                  <div className="p-6 md:p-8">
                    <div className="flex items-center mb-3">
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-4 w-4 mx-2 rounded-full" />
                      <Skeleton className="h-4 w-24" />
                    </div>
                    <Skeleton className="h-8 w-full mb-3" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-3/4 mb-6" />
                    <Skeleton className="h-5 w-32" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Skeleton */}
        <section className="py-12 md:py-16 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-8">
              <Skeleton className="h-8 w-36 mb-2" />
              <Skeleton className="h-1 w-20" />
            </div>

            <div className="flex flex-wrap gap-3">
              {Array(7)
                .fill(null)
                .map((_, index) => (
                  <Skeleton
                    key={index}
                    className="h-10 w-32 rounded-full"
                  />
                ))}
            </div>
          </div>
        </section>

        {/* Recent Posts Skeleton */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-12">
              <Skeleton className="h-8 w-48 mb-2" />
              <Skeleton className="h-1 w-20" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array(6)
                .fill(null)
                .map((_, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl overflow-hidden shadow-sm"
                  >
                    <Skeleton className="h-48 w-full" />
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
        </section>
      </main>
    </div>
  );
}
