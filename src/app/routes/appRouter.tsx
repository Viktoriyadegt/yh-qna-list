import { createBrowserRouter, Navigate } from 'react-router-dom'
import { Layout } from '../layout/Layout.tsx'
import { Questions } from '@/pages/Questions'
import { Page404 } from '@/shared/components'
import Question from '@/pages/Question/ui/Question.tsx'

export const rootRouter = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to={'/question'} replace />,
  },
  {
    path: '/question',
    element: <Layout />,
    children: [
      { index: true, element: <Questions /> },
      { path: ':questionId', element: <Question /> },
      { path: '*', element: <Page404 /> },
    ],
  },
  {
    path: '*',
    element: <Page404 />,
  },
])
