export interface CharacterLocation {
  name: string
  url: string
}

export type CharacterStatus = 'Alive' | 'Dead' | 'unknown'

export type CharacterSpecies =
  | 'Human'
  | 'Alien'
  | 'Humanoid'
  | 'Animal'
  | 'Robot'
  | 'Cronenberg'
  | 'Disease'
  | 'Unknown'

export type CharacterGender = 'Female' | 'Male' | 'Genderless' | 'unknown'

export interface Character {
  id: number
  name: string
  gender: CharacterGender
  species: CharacterSpecies
  origin: CharacterLocation
  location: CharacterLocation
  status: CharacterStatus
  type: string
  image: string
  episode: string[]
  url: string
  created: string
}
