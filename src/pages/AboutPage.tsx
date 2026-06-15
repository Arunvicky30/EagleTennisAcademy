import { SectionHeader } from '../components/common/SectionHeader'

const timeline = [
  { year: '2008', text: 'Academy founded with 20 students and 2 competition tables.' },
  { year: '2014', text: 'Won first state-level academy championship title.' },
  { year: '2020', text: 'Expanded to high-performance wing with video analytics.' },
  { year: '2025', text: 'Produced 6 national-ranked juniors in one season.' },
]

export function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-16 px-4 py-16 sm:px-6 lg:px-8">
      <section className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeader
            eyebrow="About Us"
            title="Built for Competitive Table Tennis"
            subtitle="Eagle Tennis Academy blends technical precision, physical conditioning, and tactical intelligence to develop champions."
          />
          <p className="mt-6 text-slate-300">
            From first-time paddles to elite tournament prep, our coaching framework supports every athlete stage with measurable progression and performance feedback.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1400&q=80"
          alt="Table tennis practice hall"
          className="h-80 w-full rounded-2xl object-cover"
        />
      </section>

      <section className="grid gap-8 rounded-2xl border border-slate-700 bg-slate-900 p-6 md:grid-cols-[1.1fr_1fr]">
        <div>
          <h3 className="text-2xl font-semibold text-white">Head Coach Profile</h3>
          <p className="mt-4 text-slate-300">
            Coach Daniel Arjun, ITTF Level 3 certified, has mentored 40+ district medalists and 12 national finalists.
          </p>
          <p className="mt-3 text-sm text-cyan-300">Specialization: Serve variation, pressure-point strategy, and match psychology.</p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=crop&w=900&q=80"
          alt="Coach portrait"
          className="h-72 w-full rounded-xl object-cover"
        />
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-slate-700 bg-slate-900 p-6">
          <h3 className="text-2xl font-semibold text-white">Vision</h3>
          <p className="mt-3 text-slate-300">
            Build a high-performance table tennis ecosystem where disciplined athletes become confident leaders in sport.
          </p>
        </article>
        <article className="rounded-2xl border border-slate-700 bg-slate-900 p-6">
          <h3 className="text-2xl font-semibold text-white">Mission</h3>
          <p className="mt-3 text-slate-300">
            Deliver world-class coaching with inclusive pathways, innovation-led training, and tournament-driven growth.
          </p>
        </article>
      </section>

      <section>
        <SectionHeader
          eyebrow="Milestones"
          title="Academy Achievements Timeline"
          subtitle="A continuous journey of growth, medals, and mentorship."
        />
        <div className="mt-8 space-y-4 border-l border-cyan-600/40 pl-6">
          {timeline.map((item) => (
            <article key={item.year} className="relative rounded-xl border border-slate-700 bg-slate-900 p-5">
              <span className="absolute -left-[37px] top-5 h-3 w-3 rounded-full bg-cyan-400" />
              <p className="text-sm font-semibold text-cyan-300">{item.year}</p>
              <p className="mt-2 text-slate-300">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-slate-700 bg-slate-900 p-6">
        <h3 className="text-2xl font-semibold text-white">Why Choose Us</h3>
        <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            'Certified elite coaching team',
            'Data-backed player development',
            'Tournament readiness pathway',
            'Premium training infrastructure',
          ].map((point) => (
            <p key={point} className="rounded-lg bg-slate-800 p-4 text-sm text-slate-300">
              {point}
            </p>
          ))}
        </div>
      </section>
    </div>
  )
}
