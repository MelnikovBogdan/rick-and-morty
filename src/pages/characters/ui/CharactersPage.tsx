import './CharactersPage.css'
import RickAndMortyWelcome from '@shared/assets/images/RickAndMortyWelcome.png'
import { mockCharacters, CharacterListCard } from '@features/character'

export function CharactersPage() {
  return (
    <div className="characters-page">
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
