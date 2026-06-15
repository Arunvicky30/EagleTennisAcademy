import { Link } from 'react-router-dom'
import { SectionHeader } from '../components/common/SectionHeader'
import { programs } from '../data/mockData'

export function TrainingProgramsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Programs"
        title="Training Programs"
        subtitle="Choose a pathway that matches your age, skill level, and competitive goals."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {programs.map((program) => (
          <article key={program.id} className="rounded-2xl border border-slate-700 bg-slate-900 p-6">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">{program.level}</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">{program.duration}</h3>
            <p className="mt-2 text-slate-300">{program.description}</p>
            <div className="mt-5 space-y-2 text-sm text-slate-300">
              <p>Training Days: {program.trainingDays}</p>
              <p>Age Group: {program.ageGroup}</p>
              <p className="font-semibold text-cyan-300">Pricing: {program.price}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 rounded-2xl bg-[linear-gradient(145deg,#155e75,#0f172a)] p-8 text-center">
        <h3 className="text-2xl font-semibold text-white">Ready to Register?</h3>
        <p className="mt-3 text-slate-200">Talk to our admissions team and schedule a trial session.</p>
        <Link
          to="/contact"
          className="mt-6 inline-flex rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-cyan-300"
        >
          Registration CTA
        </Link>
      </div>
    </div>
  )
}
