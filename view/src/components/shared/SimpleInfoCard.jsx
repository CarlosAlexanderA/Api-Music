import { DefaultUser } from '../icons/icons'

export function SimpleInfoCard ({ img, title, info }) {
  return (
    <div className='w-full flex gap-2 items-center justify-center'>
      <div className='w-8 h-8 flex items-center justify-center'>
        {
          img
            ? <img src={img} alt={title} className='w-full object-cover' />
            : <DefaultUser size={100} />
        }
      </div>
      <div className='flex-1 flexflex-col'>
        <h3 className='font-semibold text-base capitalize'>{title || 'Title for card'}</h3>
        <p className='text-sm opacity-80'>{info || 'simple letters'}</p>
      </div>
    </div>
  )
}
