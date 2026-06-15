type LoadingSkeletonProps = {
  className?: string
}

export function LoadingSkeleton({ className = '' }: LoadingSkeletonProps) {
  return (
    <div
      className={`animate-pulse rounded-xl bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 ${className}`}
    />
  )
}
