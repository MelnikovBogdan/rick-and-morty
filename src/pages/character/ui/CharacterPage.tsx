import './CharacterPage.css'
import { mockCharacters } from '@features/character'
import { useNavigate, useParams } from 'react-router-dom'
import { ImageWithFallback } from '@shared/ui'
import ArrowBackIcon from '@shared/assets/icons/ArrowBackIcon.svg'
import { useEffect, useState } from 'react'
import type { Character } from '@shared/types/character.ts'

export function CharacterPage() {
  const navigate = useNavigate()

  const { characterId } = useParams()
  const [character, setCharacter] = useState<Character | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchCharacter = async () => {
      setIsLoading(true)

      try {
        const response = new Promise<Character>((resolve, reject) => {
          setTimeout(() => {
            const character = mockCharacters.find((c) => c.id === Number(characterId))

            if (character) {
              resolve(character)
            }

            reject(new Error('No character'))
          }, 1000)
        })

        const result = await response

        setCharacter(result)
      } catch (error) {
        console.error(error)

        navigate('/not-found')
      } finally {
        setIsLoading(false)
      }
    }

    fetchCharacter()
  }, [characterId, navigate])

  function handleBackClick() {
    navigate(`/`)
  }

  if (isLoading) {
    return <>loading</>
  }

  if (!character) {
    return
  }

  return (
    <div className="character-page">
      <ImageWithFallback
        className="character-page__image"
        src={character.image}
        alt="Character info"
        ms={1000}
      />

      <h1 className="character-page__name">{character.name}</h1>

      <h3 className="character-page__sub-title">Information</h3>

      <dl className="character-page__data">
        <dt>Gender</dt>
        <dd>{character.gender}</dd>

        <dt>Status</dt>
        <dd className="character-page__data-status">{character.status}</dd>

        <dt>Species</dt>
        <dd>{character.species}</dd>

        <dt>Origin</dt>
        <dd>{character.origin.name}</dd>

        <dt>Type</dt>
        <dd>{character.type}</dd>

        <dt>Location</dt>
        <dd>{character.location.name}</dd>
      </dl>

      <button type="button" className="character-page__back-button" onClick={handleBackClick}>
        <img src={ArrowBackIcon} alt="Back icon" />
        <span>GO BACK</span>
      </button>
    </div>
  )
}
