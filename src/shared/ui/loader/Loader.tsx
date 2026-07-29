import PortalImage from '@shared/assets/images/PortalImage.png?url'
import classNames from 'classnames'
import './Loader.css'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'lg' | 'md'
  label?: string
}

export function Loader({ className, size = 'md', label, ...args }: Props) {
  return (
    <div className={classNames(className, 'loader')} {...args}>
      <img
        src={PortalImage}
        alt="Portal image"
        className={classNames('loader__image', {
          'loader__image_size-md': size === 'md',
          'loader__image_size-lg': size === 'lg',
        })}
      />
      <p className={'loader__label'}>{label}</p>
    </div>
  )
}
