import { Link } from 'react-router-dom'
import { ChevronRight } from '../icons/icons'
import { leftBarLinks } from '../../constants'

export function LeftBar() {
  return (
    <section className="h-full bg-blue-300 p-8 w-[240px]">
      <nav className="w-full">
        <ul className="flex flex-col gap-6">
          {leftBarLinks.map((item, index) => (
            <li key={index}>
              <Link className="flex items-center text-lg font-bold gap-2 hover:text-blue-500 transition-colors duration-100 ">
                <span>{item.iconUrl} </span>
                <span className="flex-1 flex items-center justify-between">
                  {item.label} <ChevronRight size={18} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  )
}
