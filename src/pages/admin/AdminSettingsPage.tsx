export function AdminSettingsPage() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold text-white">Academy Settings</h2>
      <div className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-900 p-6 md:grid-cols-2">
        <label className="grid gap-2 text-sm text-slate-300">
          Academy Name
          <input
            defaultValue="Eagle Tennis Academy"
            className="rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none ring-cyan-300 focus:ring"
          />
        </label>
        <label className="grid gap-2 text-sm text-slate-300">
          Contact Email
          <input
            defaultValue="hello@eagletennisacademy.com"
            className="rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none ring-cyan-300 focus:ring"
          />
        </label>
        <label className="grid gap-2 text-sm text-slate-300">
          Academy Status
          <select className="rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white">
            <option>Open</option>
            <option>Closed</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm text-slate-300">
          Hero Slogan
          <input
            defaultValue="Train Like a Champion"
            className="rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none ring-cyan-300 focus:ring"
          />
        </label>
      </div>
    </section>
  )
}
