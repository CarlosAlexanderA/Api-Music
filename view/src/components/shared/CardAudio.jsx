import {
  ArrowPath,
  ArrowsLeftRight,
  ChevronLeft,
  ChevronRight,
  EllipsisHorzintalCircle,
  Play
} from '../icons/icons'

export function CardAudio() {
  return (
    <div className="bg-black rounded-lg text-white">
      <div className="p-4 flex justify-between ">
        <h4 className="font-semibold">Player</h4>
        <button>
          <EllipsisHorzintalCircle />
        </button>
      </div>
      <div className="flex items-center flex-col gap-4 py-4">
        <div className="w-32 h-32 rounded-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1618641986557-1ecd230959aa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="object-contain w-full"
          />
        </div>
        <div className="flex flex-col gap-1 items-center">
          <h3 className="text-2xl font-semibold">Strange Friends</h3>
          <p className="opacity-70 ">Theresa Webb</p>
        </div>
      </div>
      <div>
        <div className="block">
          {/* <audio controls src="" className="w-full"></audio> */}
          <input type="radio" name="" id="" className="w-full bg-blue-700" />
        </div>
        <div className="flex items-center w-full justify-center gap-6 py-5">
          <button>
            <ArrowPath size={20} />
          </button>
          <button>
            <ChevronLeft size={20} />
          </button>
          <button className="">
            <Play size={28} />
          </button>
          <button>
            <ChevronRight size={20} />
          </button>
          <button>
            <ArrowsLeftRight size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}
