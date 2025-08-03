// app/components/SkeletonCard.tsx
export default function SkeletonCard() {
    return (
      <div className="border border-gray-200 shadow rounded-md p-4 w-full mx-auto">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-slate-200 h-16 w-16"></div>
          <div className="flex-1 space-y-4 py-1">
            <div className="h-4 bg-slate-200 rounded w-3/4"></div>
            <div className="h-3 bg-slate-200 rounded w-1/2"></div>
          </div>
        </div>
        <div className="animate-pulse mt-6 space-y-3">
             <div className="h-8 bg-slate-200 rounded"></div>
             <div className="h-3 bg-slate-200 rounded w-5/6"></div>
        </div>
      </div>
    );
  }