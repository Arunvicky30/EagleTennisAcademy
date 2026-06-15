import { useEffect, useMemo, useState } from 'react'
import { StudentCard } from '../components/cards/StudentCard'
import { SectionHeader } from '../components/common/SectionHeader'
import type { Student } from '../data/mockData'
import { getStudents } from '../api/studentApi'

const categories = ['All', 'Junior', 'Senior', 'Elite'] as const

export function StudentsPage() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<(typeof categories)[number]>('All')
  const [studentsList, setStudentsList] = useState<Student[]>([])

  useEffect(() => {
    const loadStudents = async () => {
      try {
        const data = await getStudents()

        type ApiStudent = {
          id: number
          name: string
          achievements?: string
          age?: number
          photo_url?: string
        }

        const mappedStudents: Student[] = (Array.isArray(data) ? data : []).map(
          (student: ApiStudent) => {
            const categoryFromAge: Student['category'] =
              (student.age ?? 0) < 15 ? 'Junior' : (student.age ?? 0) < 19 ? 'Senior' : 'Elite'

            const thumbnailUrl = `https://api.dicebear.com/9.x/adventurer/svg?seed=${encodeURIComponent(
              student.name || 'Student',
            )}`

            return {
              id: String(student.id),
              name: student.name,
              photo: student.photo_url || thumbnailUrl,
              achievements: student.achievements || 'Academy Player',
              ranking: student.age ? `Age ${student.age}` : 'Ranking Pending',
              category: categoryFromAge,
            }
          },
        )

        setStudentsList(mappedStudents)
      } catch (error) {
        console.error('Failed to load students:', error)
        setStudentsList([])
      }
    }

    void loadStudents()
  }, [])

  const filteredStudents = useMemo(() => {
    return studentsList.filter((student) => {
      const matchesCategory = category === 'All' || student.category === category
      const matchesQuery =
        student.name.toLowerCase().includes(query.toLowerCase()) ||
        student.achievements.toLowerCase().includes(query.toLowerCase())

      return matchesCategory && matchesQuery
    })
  }, [studentsList, query, category])

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Athletes"
        title="Students"
        subtitle="Search and filter player profiles by level and performance highlights."
      />

      <div className="mt-8 grid gap-4 rounded-2xl border border-slate-700 bg-slate-900 p-4 md:grid-cols-[1fr_auto] md:items-center">
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by name or achievement"
          className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none ring-cyan-300 focus:ring"
        />
        <div className="flex flex-wrap gap-2">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={`rounded-full px-4 py-2 text-sm ${
                category === item
                  ? 'bg-cyan-400 text-slate-950'
                  : 'border border-slate-700 text-slate-300 hover:border-cyan-300'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredStudents.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>
    </div>
  )
}


