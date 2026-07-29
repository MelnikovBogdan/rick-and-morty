import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '@widgets/layout'
import NotFoundPage from '@pages/not-found'

export const router = createBrowserRouter(
  [
    {
      path: '/',
      Component: Layout,
      children: [
        {
          index: true,
          lazy: () => import('@pages/characters').then((m) => ({ Component: m.default })),
        },
        {
          path: 'characters/:characterId',
          lazy: () => import('@pages/character').then((m) => ({ Component: m.default })),
        },
      ],
    },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ],
  {
    basename: '/rick-and-morty',
  },
)
