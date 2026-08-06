import { useEffect, useEffectEvent } from 'react'

export function useClickOutside(
  target: React.RefObject<HTMLElement | null> | React.RefObject<HTMLElement | null>[],
  cb?: () => void,
) {
  const onClickOutside = useEffectEvent(() => cb?.())

  useEffect(() => {
    const targets = Array.isArray(target) ? target : [target]

    function handleClickOutside(event: MouseEvent) {
      const targetNode = event.target as Node

      const isClickInside = targets.some((ref) => ref.current?.contains(targetNode))

      if (!isClickInside) {
        onClickOutside()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [target])
}
