import type { Testimonial } from '../../data/mockData'

type TestimonialCardProps = {
  testimonial: Testimonial
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="rounded-2xl border border-slate-700 bg-slate-900 p-6">
      <p className="text-sm leading-7 text-slate-300">“{testimonial.quote}”</p>
      <h3 className="mt-5 text-base font-semibold text-white">{testimonial.name}</h3>
      <p className="text-sm text-cyan-300">{testimonial.role}</p>
    </article>
  )
}
