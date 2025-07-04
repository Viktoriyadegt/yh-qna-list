import { createRoot } from 'react-dom/client'
import '@/shared/styles/index.css'
import './global.css'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { rootRouter } from './routes/appRouter.tsx'
import { store } from '@/shared/api/config/store.ts'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={rootRouter} />
  </Provider>,
)
