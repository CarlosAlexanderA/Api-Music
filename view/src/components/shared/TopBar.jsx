import { Link } from 'react-router-dom'
import { Bars3, Bell, DefaultUser, MusicalNote } from '../icons/icons'
import { SearchBar } from './SearchBar'

export function TopBar() {
  return (
    <header className="topbar flex py-4 px-8 items-center justify-center gap-6 ">
      <div className="flex gap-4">
        <button className="bg-white p-1 rounded-full">
          <Bars3 />
        </button>
        <Link className="text-xl flex gap-2 items-center font-semibold">
          <span>
            <MusicalNote />
          </span>
          <h1> Api - Music</h1>
        </Link>
      </div>
      <div className="flex-1">
        <SearchBar />
      </div>
      <div>
        <button>
          <Bell />
        </button>
        <button>
          <DefaultUser />
        </button>
      </div>
    </header>
  )
}
