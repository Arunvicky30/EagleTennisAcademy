import { useEffect, useMemo, useState } from 'react'
import {
  createStudent,
  deleteStudent,
  getStudents,
  type CreateStudentPayload,
  type StudentApiRecord,
  updateStudent,
} from '../../api/studentApi'

type FormState = {
  name: string
  achievements: string
  age: string
  photo_url: string
  joined_date: string
  photo_file: File | null
}

const initialForm: FormState = {
  name: '',
  achievements: '',
  age: '',
  photo_url: '',
  joined_date: '',
  photo_file: null,
}

export function AdminStudentsPage() {
  const [students, setStudents] = useState<StudentApiRecord[]>([])
  const [form, setForm] = useState<FormState>(initialForm)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [statusMessage, setStatusMessage] = useState('')

  const actionLabel = editingId ? 'Update Student' : 'Add Student'

  const sortedStudents = useMemo(
    () => [...students].sort((a, b) => (b.id ?? 0) - (a.id ?? 0)),
    [students],
  )

  const loadStudents = async () => {
    try {
      const data = await getStudents()
      setStudents(Array.isArray(data) ? data : [])
    } catch (error) {
      console.error('Failed to fetch students:', error)
      setStatusMessage('Unable to load students. Please check backend API.')
    }
  }

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      void loadStudents()
    })

    return () => window.cancelAnimationFrame(frame)
  }, [])

  const onChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const onEdit = (student: StudentApiRecord) => {
    setEditingId(student.id)
    setForm({
      name: student.name || '',
      achievements: student.achievements || '',
      age: student.age ? String(student.age) : '',
      photo_url: student.photo_url || '',
      joined_date: student.joined_date ? student.joined_date.slice(0, 10) : '',
      photo_file: null,
    })
    setStatusMessage(`Editing ${student.name}`)
  }

  const onCancelEdit = () => {
    setEditingId(null)
    setForm(initialForm)
    setStatusMessage('')
  }

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setStatusMessage('')

    try {
      const wantsToRemovePhoto = editingId !== null && !form.photo_file && form.photo_url.trim() === ''

      const payload: CreateStudentPayload = {
        name: form.name.trim(),
        achievements: form.achievements.trim() || undefined,
        age: form.age ? Number(form.age) : undefined,
        photo_url: form.photo_url.trim() || undefined,
        joined_date: form.joined_date || undefined,
        photo_file: form.photo_file,
        remove_photo: wantsToRemovePhoto,
      }

      if (!payload.name) {
        setStatusMessage('Name is required.')
        return
      }

      if (editingId) {
        await updateStudent(editingId, payload)
        setStatusMessage('Student updated successfully.')
      } else {
        await createStudent(payload)
        setStatusMessage('Student added successfully.')
      }

      setForm(initialForm)
      setEditingId(null)
      await loadStudents()
    } catch (error) {
      console.error('Failed to save student:', error)
      setStatusMessage('Failed to save student. Please verify backend endpoint.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const onDelete = async (student: StudentApiRecord) => {
    const isConfirmed = window.confirm(`Delete ${student.name}?`)
    if (!isConfirmed) {
      return
    }

    try {
      await deleteStudent(student.id)
      if (editingId === student.id) {
        onCancelEdit()
      }
      setStatusMessage('Student deleted successfully.')
      await loadStudents()
    } catch (error) {
      console.error('Failed to delete student:', error)
      setStatusMessage('Failed to delete student. Please verify backend endpoint.')
    }
  }

  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold text-white">Student Management</h2>
      <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">
        <form onSubmit={onSubmit} className="grid gap-4 rounded-xl border border-slate-700 bg-slate-950/60 p-4 md:grid-cols-2">
          <label className="grid gap-2 text-sm text-slate-300">
            Name
            <input
              value={form.name}
              onChange={(event) => onChange('name', event.target.value)}
              className="rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none ring-cyan-300 focus:ring"
              placeholder="Rahul"
              required
            />
          </label>
          <label className="grid gap-2 text-sm text-slate-300">
            Age
            <input
              type="number"
              min={5}
              max={70}
              value={form.age}
              onChange={(event) => onChange('age', event.target.value)}
              className="rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none ring-cyan-300 focus:ring"
              placeholder="14"
            />
          </label>
          <label className="grid gap-2 text-sm text-slate-300 md:col-span-2">
            Achievements
            <input
              value={form.achievements}
              onChange={(event) => onChange('achievements', event.target.value)}
              className="rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none ring-cyan-300 focus:ring"
              placeholder="State Runner Up"
            />
          </label>
          <label className="grid gap-2 text-sm text-slate-300">
            Photo URL
            <input
              type="url"
              value={form.photo_url}
              onChange={(event) => onChange('photo_url', event.target.value)}
              className="rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none ring-cyan-300 focus:ring"
              placeholder="https://picsum.photos/300"
            />
            <p className="text-xs text-slate-400">
              Leave empty while editing to remove current profile image.
            </p>
          </label>
          <label className="grid gap-2 text-sm text-slate-300">
            Upload Profile Image
            <input
              type="file"
              accept="image/*"
              onChange={(event) => {
                const file = event.target.files?.[0] ?? null
                setForm((prev) => ({ ...prev, photo_file: file }))
              }}
              className="rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none ring-cyan-300 focus:ring"
            />
            {form.photo_file ? (
              <p className="text-xs text-cyan-300">Selected: {form.photo_file.name}</p>
            ) : null}
          </label>
          <label className="grid gap-2 text-sm text-slate-300">
            Joined Date
            <input
              type="date"
              value={form.joined_date}
              onChange={(event) => onChange('joined_date', event.target.value)}
              className="rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none ring-cyan-300 focus:ring"
            />
          </label>
          <div className="flex flex-wrap items-center gap-3 md:col-span-2">
            <button
              type="submit"
              className="rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-950 disabled:cursor-not-allowed disabled:opacity-60"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Saving...' : actionLabel}
            </button>
            {editingId ? (
              <button
                type="button"
                onClick={onCancelEdit}
                className="rounded-full border border-slate-600 px-5 py-2 text-sm font-semibold text-slate-200 hover:border-cyan-300"
              >
                Cancel Edit
              </button>
            ) : null}
            {statusMessage ? <p className="text-xs text-cyan-300">{statusMessage}</p> : null}
          </div>
        </form>

        <div className="mt-5 grid gap-3">
          {sortedStudents.map((student) => (
            <article key={student.id} className="rounded-lg bg-slate-800 p-4">
              <p className="font-medium text-white">{student.name}</p>
              <p className="mt-1 text-sm text-slate-300">{student.achievements || 'Academy Player'}</p>
              <p className="mt-1 text-xs text-cyan-300">
                {student.age ? `Age ${student.age}` : 'Age not set'}
              </p>
              <div className="mt-3 flex gap-2">
                <button
                  type="button"
                  onClick={() => onEdit(student)}
                  className="rounded bg-slate-700 px-2 py-1 text-xs text-slate-200 hover:bg-slate-600"
                >
                  Edit
                </button>
                <button
                  type="button"
                  onClick={() => void onDelete(student)}
                  className="rounded bg-rose-700/70 px-2 py-1 text-xs text-rose-100 hover:bg-rose-700"
                >
                  Delete
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
