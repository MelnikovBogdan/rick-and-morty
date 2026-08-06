import { createBrowserRouter } from 'react-router-dom'

import ErrorPage from '@pages/error'
import NotFoundPage from '@pages/not-found'
import { Layout } from '@widgets/layout'

export const router = createBrowserRouter(
  [
    {
      path: '/',
      Component: Layout,
      ErrorBoundary: ErrorPage,
      children: [
        {
          index: true,
          lazy: () => import('@pages/characters').then((m) => ({ Component: m.default })),
        },
        {
          path: 'characters/:characterId',
          lazy: () => import('@pages/character').then((m) => ({ Component: m.default })),
        },
        {
          path: '*',
          Component: NotFoundPage,
        },
      ],
    },
  ],
  {
    basename: '/rick-and-morty',
  },
)
