import type { Student } from '../../data/mockData'

type StudentCardProps = {
  student: Student
}

export function StudentCard({ student }: StudentCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-700 bg-slate-900/80 transition hover:-translate-y-1 hover:border-cyan-500/60">
      <img src={student.photo} alt={student.name} className="h-56 w-full object-cover" />
      <div className="p-5">
        <h3 className="text-xl font-semibold text-white">{student.name}</h3>
        <p className="mt-2 text-sm text-slate-300">{student.achievements}</p>
        <p className="mt-3 text-sm font-medium text-cyan-300">{student.ranking}</p>
      </div>
    </article>
  )
}
