import { useNavigate } from 'react-router-dom'

import type { Character } from '@shared/types/character.ts'
import { ImageWithFallback } from '@shared/ui'

import './CharacterListCard.css'

interface Props {
  character: Character
}

export function CharacterListCard({ character }: Props) {
  const navigate = useNavigate()

  const handleCardClick = () => {
    navigate(`/characters/${character.id}`)
  }

  return (
    <section className="character-list-card" onMouseDown={handleCardClick}>
      <ImageWithFallback
        src={character.image}
        alt="Character image"
        className="character-list-card__image"
        ms={2000}
      />

      <div className="character-list-card__content">
        <h3 className="character-list-card__name">{character.name}</h3>

        <dl className="character-list-card__data">
          <dt>Gender</dt>
          <dd>{character.gender}</dd>

          <dt>Species</dt>
          <dd>{character.species}</dd>

          <dt>Location</dt>
          <dd>{character.location.name}</dd>

          <dt>Status</dt>
          <dd
            className={[
              'character-list-card__data-status',
              `character-list-card__data-status_${character.status.toLowerCase()}`,
            ].join(' ')}
          >
            {character.status}
          </dd>
        </dl>
      </div>
    </section>
  )
}
