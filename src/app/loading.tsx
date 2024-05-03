import { Skeleton } from "@/components/ui/skeleton";

function LoadingPage() {
  const array = new Array(6).fill(null);

  return (
    <main className="p-4 flex flex-col items-center w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 w-full max-w-7xl">
        {array.map((_, i) => (
          <Skeleton
            key={i}
            className="bg-zinc-700 rounded-lg p-4 h-72 relative"
          >
            <Skeleton className="mb-2 w-28 h-6" />

            <Skeleton className="h-5 mb-1 w-[97%]" />
            <Skeleton className="h-5 mb-1 w-[99%]" />
            <Skeleton className="h-5 mb-1 w-[95%]" />
            <Skeleton className="h-5 w-[92%]" />

            <Skeleton className="absolute right-4 h-4 w-28 bottom-4" />
          </Skeleton>
        ))}
      </div>
    </main>
  );
}

export default LoadingPage;
