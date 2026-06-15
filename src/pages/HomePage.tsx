import { Link } from 'react-router-dom'
import { GalleryCard } from '../components/cards/GalleryCard'
import { StudentCard } from '../components/cards/StudentCard'
import { TestimonialCard } from '../components/cards/TestimonialCard'
import { TournamentCard } from '../components/cards/TournamentCard'
import { SectionHeader } from '../components/common/SectionHeader'
import { HeroBanner } from '../components/layout/HeroBanner'
import {
  academyStats,
  galleryItems,
  students,
  testimonials,
  tournaments,
} from '../data/mockData'

export function HomePage() {
  return (
    <>
      <HeroBanner
        title="Train Like a Champion"
        subtitle="Precision coaching, elite facilities, and a performance culture built for table tennis excellence."
        imageUrl="https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=2000&q=80"
        ctaPrimary={{ label: 'Join Now', to: '/contact' }}
        ctaSecondary={{ label: 'View Training Programs', to: '/programs' }}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-3">
          {academyStats.map((stat) => (
            <article
              key={stat.label}
              className="rounded-2xl border border-slate-700 bg-slate-900/70 p-6 transition hover:border-cyan-500/70"
            >
              <p className="text-3xl font-bold text-white">{stat.value}</p>
              <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-900/70 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Next Up"
            title="Upcoming Tournament"
            subtitle="Register your slot for high-stakes match play and ranking points."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <TournamentCard tournament={tournaments[0]} />
            <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">
              <h3 className="text-2xl font-semibold text-white">Tournament Countdown</h3>
              <p className="mt-4 text-sm text-slate-300">
                Tactical match preparation, seeded draw reveal, and athlete briefing starts 3 days before opening.
              </p>
              <Link
                to="/tournaments"
                className="mt-6 inline-flex rounded-full border border-cyan-300/60 px-5 py-2 text-sm font-semibold text-cyan-200 hover:bg-cyan-300/10"
              >
                Explore Tournament Details
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Talent Pipeline"
          title="Featured Students"
          subtitle="Meet athletes driving the next wave of competitive excellence."
        />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {students.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      </section>

      <section className="bg-slate-900/70 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Highlights"
            title="Recent Gallery"
            subtitle="Training intensity, tournament moments, and academy milestones."
          />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.slice(0, 3).map((item) => (
              <GalleryCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Voices"
          title="Testimonials"
          subtitle="Trusted by athletes and parents for high-performance coaching."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </section>

      <section className="bg-[linear-gradient(135deg,#082f49,#0f172a_40%,#451a03)] py-16">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white md:text-4xl">Ready to Begin Your Championship Journey?</h2>
          <p className="mt-4 text-slate-200">
            Book an assessment session and get a personalized training roadmap.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-cyan-300"
            >
              Join Now
            </Link>
            <Link
              to="/programs"
              className="rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white hover:border-cyan-300 hover:text-cyan-300"
            >
              View Training Programs
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
