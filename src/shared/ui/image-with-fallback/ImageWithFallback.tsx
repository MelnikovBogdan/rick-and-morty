import CharacterPlaceholderImage from '@shared/assets/images/CharacterPlaceholder.jpg?url'
import { useEffect, useState } from 'react'

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string
}

export function ImageWithFallback({ alt = 'Image', src, ...args }: Props) {
  const [imgSrc, setImgSrc] = useState<string>()

  useEffect(() => {
    const controller = new AbortController()

    const checkImage = () => {
      if (!src) {
        setImgSrc(CharacterPlaceholderImage)
        return
      }

      fetch(src, {
        method: 'HEAD',
        signal: AbortSignal.timeout(1000),
      })
        .then((response) => {
          if (response.ok) {
            setImgSrc(src)
          } else {
            setImgSrc(CharacterPlaceholderImage)
          }
        })
        .catch((error) => {
          console.error(error)
          setImgSrc(CharacterPlaceholderImage)
        })
    }

    checkImage()

    return () => controller.abort()
  }, [src])

  if (!imgSrc) return <div>Loading...</div>

  return <img src={imgSrc} alt={alt} {...args} />
}
