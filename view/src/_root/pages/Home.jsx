import React from 'react'
import Button from '../../components/ui/Button'
import { Calendar, Play, Radio } from '../../components/icons/icons'
import { CardAudio } from '../../components/shared/CardAudio'
import { CardArtist } from '../../components/shared/CardArtist'
import { topMusicCards } from '../../constants'

export default function Home() {
  return (
    <div className="w-full rounded-2xl bg-white p-8 flex flex-col gap-6">
      <section className="flex justify-between">
        <div>
          <h2 className="font-semibold text-lg">Podcast Dashboard</h2>
          <p className="text-sm opacity-70">Home - Dashboards</p>
        </div>
        <div>
          <Button transparent className="mx-2">
            Add Member
          </Button>
          <Button className="mx-2">New Camapning</Button>
        </div>
      </section>
      <section className="grid-sections-cards-2">
        <div className="bg-black  relative p-10 rounded-lg overflow-hidden text-white flex flex-col gap-20 ">
          <div className="flex flex-col gap-2 relative z-10">
            <h1 className="text-5xl font-semibold">Utah Case</h1>
            <p className="font-medium">with Kristin Watson</p>
            <p className="font-light text-sm flex gap-4">
              <span className="flex gap-2 items-center">
                <span className="text-blue-500">
                  <Play size={15} />
                </span>
                70,000+ plays
              </span>
              <span className="flex gap-2 items-center">
                <span className="text-blue-500">
                  <Radio size={15} />
                </span>
                372 listen now
              </span>
            </p>
          </div>
          <div className="flex gap-4 relative z-10">
            <Button>Listen Now</Button>
            <Button transparent className="border-white/60">
              Listen Now
            </Button>
          </div>
          <div className="absolute top-0 right-0 h-full flex justify-end ">
            <img
              src="https://images.unsplash.com/photo-1504238624541-bca0f332da07?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGZvbmRvJTIwbmVncm98ZW58MHx8MHx8fDI%3D"
              alt="album profile"
              className="object-contain h-full"
            />
          </div>
        </div>
        <CardAudio />
      </section>
      <section className="grid-sections-cards-2">
        <div className="flex flex-col gap-4 border border-gray-200 rounded-xl p-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">Recently Played</h3>
              <p className="text-sm opacity-60">Uplated 37 minutes ago</p>
            </div>
            <div>
              <Button transparent className="border-none bg-gray-100">
                History
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-cardsFit grid-rows-2 gap-6 ">
            <CardArtist />
            <CardArtist />
            <CardArtist />
            <CardArtist />
            <CardArtist />
            <CardArtist />
            <CardArtist />
            <CardArtist />
          </div>
        </div>
        <div className="flex flex-col gap-4 border border-gray-200 rounded-xl p-6 ">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">Top music</h3>
              <p className="text-sm opacity-60">8k social visitors</p>
            </div>
            <div>
              <Button transparent className="border-none bg-gray-100">
                View All
              </Button>
            </div>
          </div>
          <div className="flex flex-col divide-y flex-1">
            {topMusicCards.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-full flex gap-4 flex-1 items-center">
                  <div className="w-16 h-16 overflow-hidden rounded-full">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-1 flex justify-between items-center ">
                    <div>
                      <h4 className="text-lg font-semibold">{item.name}</h4>
                      <p className="text-[0.9rem] opacity-60">
                        {item.category}y
                      </p>
                    </div>
                    <div>
                      {item.isFollow ? (
                        <Button>Following</Button>
                      ) : (
                        <Button className="offButton ">Follow</Button>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      {/* generos de todo */}
      <section className="grid-sections-cards-2">
        <div className="flex flex-col gap-4 border border-gray-200 rounded-xl p-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">Most Popular Genres</h3>
              <p className="text-sm opacity-60">
                Total Genres : <strong>54</strong>
              </p>
            </div>
            <div>
              <Button transparent className="border-none bg-gray-100 flex">
                22 feb. 2024 - 22 mar. 2024 <Calendar size={18} />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-cardsGenre grid-rows-2 gap-6 ">
            <div className="flex flex-col gap-3">
              <div className="w-full overflow-hidden h-[220px] rounded-md relative">
                <img
                  src="https://images.unsplash.com/photo-1477927849362-0fb1e7d59ee6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9jayUyMGFuZCUyMHJvbGx8ZW58MHx8MHx8fDA%3D"
                  alt=""
                  className="object-cover w-full h-full"
                />
                <button className="absolute z-50 bottom-2 left-2 text-white">
                  <Play />
                </button>
              </div>
              <div>
                <h4 className="text-lg font-semibold"> Rock</h4>
                <p className="text-sm opacity-60">550 canciones</p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="w-full overflow-hidden h-[220px] rounded-md relative">
                <img
                  src="https://images.unsplash.com/photo-1477927849362-0fb1e7d59ee6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9jayUyMGFuZCUyMHJvbGx8ZW58MHx8MHx8fDA%3D"
                  alt=""
                  className="object-cover w-full h-full"
                />
                <button className="absolute z-50 bottom-2 left-2 text-white">
                  <Play />
                </button>
              </div>
              <div>
                <h4 className="text-lg font-semibold"> Rock</h4>
                <p className="text-sm opacity-60">550 canciones</p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="w-full overflow-hidden h-[220px] rounded-md relative">
                <img
                  src="https://images.unsplash.com/photo-1477927849362-0fb1e7d59ee6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9jayUyMGFuZCUyMHJvbGx8ZW58MHx8MHx8fDA%3D"
                  alt=""
                  className="object-cover w-full h-full"
                />
                <button className="absolute z-50 bottom-2 left-2 text-white">
                  <Play />
                </button>
              </div>
              <div>
                <h4 className="text-lg font-semibold"> Rock</h4>
                <p className="text-sm opacity-60">550 canciones</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 border border-gray-200 rounded-xl p-6 ">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">Top music</h3>
              <p className="text-sm opacity-60">8k social visitors</p>
            </div>
            <div>
              <Button transparent className="border-none bg-gray-100">
                View All
              </Button>
            </div>
          </div>
          <div className="flex flex-col divide-y flex-1">
            {topMusicCards.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-full flex gap-4 flex-1 items-center">
                  <div className="w-16 h-16 overflow-hidden rounded-full">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-1 flex justify-between items-center ">
                    <div>
                      <h4 className="text-lg font-semibold">{item.name}</h4>
                      <p className="text-[0.9rem] opacity-60">
                        {item.category}y
                      </p>
                    </div>
                    <div>
                      {item.isFollow ? (
                        <Button>Following</Button>
                      ) : (
                        <Button className="offButton ">Follow</Button>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
