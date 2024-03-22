import { Play } from '../icons/icons'

export function CardArtist() {
  return (
    <div className="flex flex-col gap-3">
      <div className="w-full overflow-hidden h-[200px] rounded-md relative">
        <img
          src="https://images.unsplash.com/photo-1560800452-f2d475982b96?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFydGlzdHxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
          className="object-cover w-full h-full"
        />
        <button className="absolute z-50 bottom-2 left-2 text-white">
          <Play />
        </button>
      </div>
      <div>
        <h4 className="text-lg font-semibold"> Dally Podcast</h4>
        <p className="text-sm opacity-60">Derlene Robertson</p>
      </div>
    </div>
  )
}
