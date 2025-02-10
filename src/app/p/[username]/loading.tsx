import { Skeleton } from "@/components/ui/skeleton";

const DefaultTemplateSkeleton: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* About Section Skeleton */}
        <section id="about" className="mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent h-[1px] -top-4" />
          <div className="flex flex-col md:flex-row items-start gap-8 mb-8">
            <Skeleton className="w-32 h-32 rounded-2xl" />
            <div>
              <Skeleton className="h-8 w-48 mb-4" />
              <Skeleton className="h-6 w-full max-w-2xl mb-4" />
              <Skeleton className="h-6 w-full max-w-lg mb-4" />
              <div className="flex flex-col sm:flex-row gap-6 mb-8">
                <Skeleton className="h-6 w-40" />
                <Skeleton className="h-6 w-40" />
              </div>
              <div className="flex gap-4">
                <Skeleton className="h-10 w-10 rounded-lg" />
                <Skeleton className="h-10 w-10 rounded-lg" />
                <Skeleton className="h-10 w-10 rounded-lg" />
              </div>
            </div>
          </div>
          <div>
            <Skeleton className="h-6 w-32 mb-4" />
            <div className="flex flex-wrap gap-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton key={i} className="h-8 w-24 rounded-full" />
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section Skeleton */}
        <section id="projects" className="mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-transparent h-[1px] -top-4" />
          <Skeleton className="h-8 w-48 mb-4" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="bg-white p-4 rounded-xl border border-gray-100"
              >
                <Skeleton className="h-48 w-full rounded-md mb-4" />
                <Skeleton className="h-6 w-32 mb-2" />
                <Skeleton className="h-4 w-full max-w-sm mb-4" />
                <Skeleton className="h-4 w-20" />
              </div>
            ))}
          </div>
        </section>

        {/* Education Section Skeleton */}
        <section id="education" className="mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-transparent h-[1px] -top-4" />
          <Skeleton className="h-8 w-48 mb-4" />
          <div className="grid gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-xl border border-gray-100"
              >
                <Skeleton className="h-6 w-40 mb-2" />
                <Skeleton className="h-4 w-32 mb-2" />
                <Skeleton className="h-4 w-24" />
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section Skeleton */}
        <section id="experience" className="mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-transparent h-[1px] -top-4" />
          <Skeleton className="h-8 w-48 mb-4" />
          <div className="grid gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-xl border border-gray-100"
              >
                <Skeleton className="h-6 w-40 mb-2" />
                <Skeleton className="h-4 w-32 mb-2" />
                <Skeleton className="h-4 w-24" />
              </div>
            ))}
          </div>
        </section>
      </div>
      <footer className="bg-white border-t border-gray-100 py-8">
        <div className="max-w-4xl mx-auto px-4 flex flex-col items-center justify-center">
          <Skeleton className="h-4 w-64 mb-2" />
          <Skeleton className="h-4 w-40" />
        </div>
      </footer>
    </div>
  );
};

export default DefaultTemplateSkeleton;
