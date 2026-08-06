import { useEffect, useState } from 'react'

import classNames from 'classnames'

import CharacterPlaceholderImage from '@shared/assets/images/CharacterPlaceholder.jpg?url'

import './ImageWithFallback.css'

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  ms?: number
  className?: string
}

export function ImageWithFallback({ alt = 'Image', ms = 1000, src, className, ...args }: Props) {
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
        signal: AbortSignal.timeout(ms),
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
  }, [src, ms])

  if (!imgSrc)
    return (
      <div className={classNames(className, 'image-with-fallback__placeholder')} {...args}></div>
    )

  return <img src={imgSrc} alt={alt} className={className} {...args} />
}
