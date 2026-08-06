import { useState } from 'react'

import { CharacterListCard, mockCharacters } from '@features/character'
import RickAndMortyWelcome from '@shared/assets/images/RickAndMortyWelcome.png'
import { Select } from '@shared/ui/select'

import './CharactersPage.css'

export function CharactersPage() {
  const [value, setValue] = useState<string>()
  const options = ['Option 1', 'Option 2', 'Option 3']

  return (
    <div className="characters-page">
      <Select value={value} onValueChange={(v) => setValue(v)} options={options} />

      <Select value={value} onValueChange={(v) => setValue(v)} options={options} size="sm" />

      <img
        src={RickAndMortyWelcome}
        alt="Rick and Morty welcome image"
        className="characters-page__welcome-image"
      />

      <div className="characters-page__list">
        {mockCharacters.map((character) => (
          <CharacterListCard character={character} key={character.id} />
        ))}
      </div>
    </div>
  )
}
