import { Outlet } from 'react-router-dom'

import type { PropsWithChildren } from 'react'

import RickAndMortyIcon from '@shared/assets/icons/RickAndMorty.svg'

import './Layout.css'

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className="layout">
      <header className="layout__header">
        <div className="layout__header-container">
          <img src={RickAndMortyIcon} alt="Rick and Morty Logo" className="layout__header-logo" />
        </div>
      </header>

      <main className="layout__content">{children ?? <Outlet />}</main>

      <footer className="layout__footer">
        <span className="layout__footer-text">Made with love by frontovichok_MelnikovBogdan</span>
      </footer>
    </div>
  )
}
