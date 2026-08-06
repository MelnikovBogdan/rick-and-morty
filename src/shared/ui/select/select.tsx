import { type ReactElement, useId, useRef, useState } from 'react'

import { createPortal } from 'react-dom'

import classNames from 'classnames'

import ChecvroneDownImage from '@shared/assets/images/ChevroneDown.svg?url'
import { useClickOutside } from '@shared/utils/useClickOutside'

import './select.css'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'lg'
  placeholder?: string
  value?: string
  options?: string[]
  onValueChange?: (value: string) => void
  optionSlot?: (option: string) => ReactElement
}

export function Select({
  className,
  options = [],
  value,
  placeholder = 'Select an option',
  onValueChange,
  size = 'lg',
  optionSlot,
  ...args
}: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const componentId = useId()

  const targetRef = useRef<HTMLButtonElement>(null)
  const popupRef = useRef<HTMLUListElement>(null)

  const anchorName = `--anchor-select-${componentId}`
  const positionAnchor = `--anchor-select-${componentId}`

  useClickOutside([targetRef, popupRef], () => {
    setIsOpen(false)
  })

  function selectOption(option: string): void {
    onValueChange?.(option)
    setIsOpen(false)
  }

  return (
    <div className={classNames('select', className)} {...args}>
      <button
        ref={targetRef}
        className={classNames('select__target', `select__target_${size}`)}
        style={{ anchorName }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>
          <span>{value || placeholder}</span>
          {value && optionSlot?.(value)}
        </span>

        <img
          src={ChecvroneDownImage}
          alt="Dropdown icon"
          className={classNames(
            'select__target-icon',
            `select__target-icon_${size}`,
            isOpen ? 'select__target-icon_expanded' : 'select__target-icon_collapsed',
          )}
        />
      </button>

      {isOpen &&
        createPortal(
          <ul
            ref={popupRef}
            className={classNames('select__popup', `select__popup_${size}`)}
            style={{ positionAnchor }}
          >
            {options?.map((option) => (
              <li key={option} className="select__option" onClick={() => selectOption(option)}>
                <span className="select__option-text">{option}</span>
                {optionSlot?.(option)}
              </li>
            ))}
          </ul>,
          document.body,
        )}
    </div>
  )
}
