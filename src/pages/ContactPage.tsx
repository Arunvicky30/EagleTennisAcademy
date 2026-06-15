import { SectionHeader } from '../components/common/SectionHeader'

export function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Get In Touch"
        title="Contact Us"
        subtitle="Connect with our team for admissions, trial sessions, and tournament enquiries."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div className="space-y-6 rounded-2xl border border-slate-700 bg-slate-900 p-6">
          <div>
            <h3 className="text-lg font-semibold text-white">Contact Information</h3>
            <p className="mt-2 text-sm text-slate-300">+91 98765 43210</p>
            <p className="text-sm text-slate-300">hello@eagletennisacademy.com</p>
            <p className="text-sm text-slate-300">#42, Arena Road, Chennai, India</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Academy Timings</h3>
            <p className="mt-2 text-sm text-slate-300">Mon-Sat: 6:00 AM - 9:00 PM</p>
            <p className="text-sm text-slate-300">Sunday: 7:00 AM - 1:00 PM</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Social Media</h3>
            <p className="mt-2 text-sm text-slate-300">Instagram | YouTube | Facebook | LinkedIn</p>
          </div>
        </div>

        <form className="rounded-2xl border border-slate-700 bg-slate-900 p-6">
          <h3 className="text-lg font-semibold text-white">Contact Form</h3>
          <div className="mt-5 grid gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none ring-cyan-300 focus:ring"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none ring-cyan-300 focus:ring"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none ring-cyan-300 focus:ring"
            />
            <textarea
              placeholder="Your message"
              rows={4}
              className="rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none ring-cyan-300 focus:ring"
            />
            <button
              type="submit"
              className="rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-cyan-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      <section className="mt-10 rounded-2xl border border-slate-700 bg-slate-900 p-6">
        <h3 className="text-lg font-semibold text-white">Google Maps Placeholder</h3>
        <div className="mt-4 grid h-72 place-items-center rounded-xl border border-dashed border-slate-600 bg-slate-950 text-sm text-slate-400">
          Embedded map will be added here.
        </div>
      </section>
    </div>
  )
}
