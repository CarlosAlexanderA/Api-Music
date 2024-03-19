import React from 'react'
import { LeftBar } from '../components/shared/LeftBar'
import { Outlet } from 'react-router-dom'
import { TopBar } from '../components/shared/TopBar'
import { BottomBar } from '../components/shared/BottomBar'

export default function RootLayout () {
  return (
    <div className='w-full bg-[#F9F9F9]' >
      <TopBar />
      <LeftBar />
      <section>
        <Outlet />
      </section>
      <BottomBar />
    </div>
  )
}
