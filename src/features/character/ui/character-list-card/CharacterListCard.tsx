import type { Character } from '@shared/types/character.ts'

interface Props {
  character: Character
}

export function CharacterListCard({ character }: Props) {
  return (
    <section>
      <img src="" alt="" />

      <div className="">
        <h3>{character.name}</h3>
        <dl>
          <dt>Букля</dt>
          <dd>Полярная сова Гарри Поттера</dd>
          <dt>Живоглот</dt>
          <dd>Полукот Гермионы Грейнджер</dd>
          <dt>Пушистик</dt>
          <dd>Кролик Лаванды Браун</dd>
          <dt>Нагайна</dt>
          <dd>Змея Волан-де-Морта</dd>
        </dl>
      </div>
    </section>
  )
}
