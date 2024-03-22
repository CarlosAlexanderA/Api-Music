import { useState } from 'react'
import { Search, XMark } from '../icons/icons'
import { SimpleInfoCard } from './SimpleInfoCard'

export function SearchBar() {
  const [focus, setFocus] = useState(false)

  return (
    <div className="bg-white max-w-sm flex p-3 border-2 rounded-xl gap-2 relative ">
      <div className="flex-1 flex items-center">
        <div className="flex-1 flex items-center gap-2">
          <button>
            <Search width={18} height={18} />
          </button>
          <input
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none"
          />
        </div>
        {focus && (
          <button className="justify-self-end hover:text-blue-400">
            <XMark />
          </button>
        )}
      </div>
      {focus && (
        <div className="absolute bg-white w-full h-[250px] top-full left-0 mt-1 py-6 px-4 border-2 rounded-xl flex flex-col gap-3 z-50">
          <h4>Result Search</h4>
          <div className="w-full h-full overflow-y-scroll scroll-m-0 flex flex-col gap-2">
            {/* compoenete */}
            <SimpleInfoCard />
            <SimpleInfoCard />
            <SimpleInfoCard />
            <SimpleInfoCard />
            <SimpleInfoCard />
          </div>
        </div>
      )}
    </div>
  )
}
