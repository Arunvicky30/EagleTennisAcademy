export type Stat = {
  label: string
  value: string
}

export type Program = {
  id: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  duration: string
  trainingDays: string
  ageGroup: string
  price: string
  description: string
}

export type Student = {
  id: string
  name: string
  photo: string
  achievements: string
  ranking: string
  category: 'Junior' | 'Senior' | 'Elite'
}

export type Tournament = {
  id: string
  title: string
  status: 'Upcoming' | 'Ongoing' | 'Past'
  date: string
  venue: string
  description: string
  poster: string
}

export type GalleryItem = {
  id: string
  title: string
  type: 'Photo' | 'Video'
  category: 'Training' | 'Tournament' | 'Achievement'
  mediaUrl: string
  thumbnail: string
}

export type Testimonial = {
  id: string
  name: string
  role: string
  quote: string
}

export type Announcement = {
  id: string
  title: string
  date: string
  tag: 'Notice' | 'News' | 'Update'
  summary: string
}

export const academyStats: Stat[] = [
  { label: 'Students Trained', value: '1,800+' },
  { label: 'Championships Won', value: '126' },
  { label: 'Years of Experience', value: '18' },
]

export const programs: Program[] = [
  {
    id: 'p1',
    level: 'Beginner',
    duration: '12 Weeks',
    trainingDays: 'Mon, Wed, Fri',
    ageGroup: '8-14 Years',
    price: 'INR 6,500 / month',
    description: 'Strong fundamentals, movement basics, and match confidence.',
  },
  {
    id: 'p2',
    level: 'Intermediate',
    duration: '16 Weeks',
    trainingDays: 'Tue, Thu, Sat',
    ageGroup: '12-18 Years',
    price: 'INR 8,900 / month',
    description: 'Spin control, tactical drills, and competitive game plans.',
  },
  {
    id: 'p3',
    level: 'Advanced',
    duration: '24 Weeks',
    trainingDays: 'Mon-Sat',
    ageGroup: '16+ Years',
    price: 'INR 12,500 / month',
    description: 'Elite coaching, tournament strategy, and performance analytics.',
  },
]

export const students: Student[] = [
  {
    id: 's1',
    name: 'Aarav Menon',
    photo:
      'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=800&q=80',
    achievements: 'National Sub-Junior Semi-Finalist',
    ranking: '#9 India U15',
    category: 'Junior',
  },
  {
    id: 's2',
    name: 'Nisha Kapoor',
    photo:
      'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=800&q=80',
    achievements: 'State Champion 2025',
    ranking: '#2 State Senior',
    category: 'Senior',
  },
  {
    id: 's3',
    name: 'Rohan Iyer',
    photo:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=80',
    achievements: 'Inter-Academy Gold Medalist',
    ranking: '#14 National U19',
    category: 'Elite',
  },
  {
    id: 's4',
    name: 'Mira Dsouza',
    photo:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
    achievements: 'Regional League MVP',
    ranking: '#7 State U17',
    category: 'Junior',
  },
]

export const tournaments: Tournament[] = [
  {
    id: 't1',
    title: 'Eagle Summer Smash Open',
    status: 'Upcoming',
    date: '12 Jul 2026',
    venue: 'Eagle Arena, Chennai',
    description: 'Open category event with seeded knockout rounds.',
    poster:
      'https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 't2',
    title: 'South Zone Ranking Championship',
    status: 'Ongoing',
    date: '18-22 Jun 2026',
    venue: 'Indoor Sports Complex, Coimbatore',
    description: 'Ranking points event featuring top district players.',
    poster:
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 't3',
    title: 'Eagle Invitational 2025',
    status: 'Past',
    date: '20 Dec 2025',
    venue: 'Eagle Arena, Chennai',
    description: 'High intensity invitational with mixed team format.',
    poster:
      'https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=900&q=80',
  },
]

export const galleryItems: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Topspin Mechanics Session',
    type: 'Photo',
    category: 'Training',
    mediaUrl:
      'https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=1200&q=80',
    thumbnail:
      'https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'g2',
    title: 'League Finals Highlights',
    type: 'Video',
    category: 'Tournament',
    mediaUrl: 'https://www.youtube.com/embed/8dWL3wF_OMw',
    thumbnail:
      'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'g3',
    title: 'Podium Celebration',
    type: 'Photo',
    category: 'Achievement',
    mediaUrl:
      'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1200&q=80',
    thumbnail:
      'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'g4',
    title: 'Multiball Intensity Drill',
    type: 'Photo',
    category: 'Training',
    mediaUrl:
      'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80',
    thumbnail:
      'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'g5',
    title: 'Academy Open Teaser',
    type: 'Video',
    category: 'Tournament',
    mediaUrl: 'https://www.youtube.com/embed/J---aiyznGQ',
    thumbnail:
      'https://images.unsplash.com/photo-1486286701208-1d58e9338013?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'g6',
    title: 'Junior Team Victory',
    type: 'Photo',
    category: 'Achievement',
    mediaUrl:
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80',
    thumbnail:
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=700&q=80',
  },
]

export const testimonials: Testimonial[] = [
  {
    id: 'tm1',
    name: 'Priya Raman',
    role: 'Parent of Junior Player',
    quote:
      'The discipline and structure at Eagle transformed my son into a confident competitor.',
  },
  {
    id: 'tm2',
    name: 'Karthik S',
    role: 'State Medalist',
    quote:
      'Every session is data-driven and match-focused. The coaching quality feels international.',
  },
  {
    id: 'tm3',
    name: 'Anita George',
    role: 'Corporate Member',
    quote:
      'World-class tables, recovery support, and excellent mentors. Truly a premium academy.',
  },
]

export const announcements: Announcement[] = [
  {
    id: 'a1',
    title: 'Monsoon Batch Registrations Open',
    date: '10 Jun 2026',
    tag: 'Update',
    summary: 'New beginner and intermediate batches begin from 1st July.',
  },
  {
    id: 'a2',
    title: 'Academy Closed on 17 June',
    date: '13 Jun 2026',
    tag: 'Notice',
    summary: 'Maintenance scheduled for flooring and lighting upgrades.',
  },
  {
    id: 'a3',
    title: 'Eagle Players Win 3 Medals',
    date: '04 Jun 2026',
    tag: 'News',
    summary: 'Our athletes secured 1 gold and 2 bronze medals at district finals.',
  },
]

export const adminOverview = {
  totalStudents: 412,
  totalPhotos: 920,
  totalVideos: 134,
  upcomingTournaments: 4,
  academyStatus: 'Open',
}
