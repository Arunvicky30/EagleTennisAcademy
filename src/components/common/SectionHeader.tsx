type SectionHeaderProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'left',
}: SectionHeaderProps) {
  return (
    <header className={align === 'center' ? 'text-center' : 'text-left'}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-3xl font-bold text-slate-100 md:text-4xl">{title}</h2>
      {subtitle ? (
        <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">{subtitle}</p>
      ) : null}
    </header>
  )
}
