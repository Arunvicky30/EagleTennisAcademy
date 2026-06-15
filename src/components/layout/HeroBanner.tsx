import { Link } from 'react-router-dom'

type HeroBannerProps = {
  title: string
  subtitle: string
  imageUrl: string
  ctaPrimary?: { label: string; to: string }
  ctaSecondary?: { label: string; to: string }
}

export function HeroBanner({
  title,
  subtitle,
  imageUrl,
  ctaPrimary,
  ctaSecondary,
}: HeroBannerProps) {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={imageUrl}
        alt="Table tennis training in progress"
        className="h-[75vh] min-h-[480px] w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/70 to-cyan-900/60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.25),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(251,146,60,0.2),transparent_40%)]" />

      <div className="absolute inset-0 mx-auto flex w-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-white">
          <p className="text-xs uppercase tracking-[0.4em] text-cyan-300">Eagle Tennis Academy</p>
          <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-base text-slate-200 sm:text-lg">{subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            {ctaPrimary ? (
              <Link
                to={ctaPrimary.to}
                className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                {ctaPrimary.label}
              </Link>
            ) : null}
            {ctaSecondary ? (
              <Link
                to={ctaSecondary.to}
                className="rounded-full border border-white/50 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-300"
              >
                {ctaSecondary.label}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
