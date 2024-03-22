import React from 'react'
import Button from '../../components/ui/Button'
import { Play, Radio } from '../../components/icons/icons'
import { CardAudio } from '../../components/shared/CardAudio'

export default function Home() {
  return (
    <div className="w-full rounded-2xl bg-white p-8">
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
      <section className="grid  grid-cols-1 lg:grid-cols-new2 gap-4">
        <div className="bg-black  relative p-10 rounded-lg overflow-hidden text-white flex flex-col gap-20 ">
          <div className="flex flex-col gap-2 relative z-50">
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
          <div>
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
    </div>
  )
}
