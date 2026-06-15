import { createBrowserRouter } from 'react-router-dom'
import { AdminLayout } from './AdminLayout'
import { AppLayout } from './AppLayout'
import { AboutPage } from '../pages/AboutPage'
import { AnnouncementsPage } from '../pages/AnnouncementsPage'
import { ContactPage } from '../pages/ContactPage'
import { GalleryPage } from '../pages/GalleryPage'
import { HomePage } from '../pages/HomePage'
import { StudentsPage } from '../pages/StudentsPage'
import { TournamentsPage } from '../pages/TournamentsPage'
import { TrainingProgramsPage } from '../pages/TrainingProgramsPage'
import { AdminAnnouncementsPage } from '../pages/admin/AdminAnnouncementsPage'
import { AdminDashboardPage } from '../pages/admin/AdminDashboardPage'
import { AdminGalleryPage } from '../pages/admin/AdminGalleryPage'
import { AdminSettingsPage } from '../pages/admin/AdminSettingsPage'
import { AdminStudentsPage } from '../pages/admin/AdminStudentsPage'
import { AdminTournamentsPage } from '../pages/admin/AdminTournamentsPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'programs', element: <TrainingProgramsPage /> },
      { path: 'gallery', element: <GalleryPage /> },
      { path: 'students', element: <StudentsPage /> },
      { path: 'tournaments', element: <TournamentsPage /> },
      { path: 'announcements', element: <AnnouncementsPage /> },
      { path: 'contact', element: <ContactPage /> },
    ],
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      { index: true, element: <AdminDashboardPage /> },
      { path: 'settings', element: <AdminSettingsPage /> },
      { path: 'gallery', element: <AdminGalleryPage /> },
      { path: 'students', element: <AdminStudentsPage /> },
      { path: 'tournaments', element: <AdminTournamentsPage /> },
      { path: 'announcements', element: <AdminAnnouncementsPage /> },
    ],
  },
])
