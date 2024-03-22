import React from 'react'
import { LeftBar } from '../components/shared/LeftBar'
import { Outlet } from 'react-router-dom'
import { TopBar } from '../components/shared/TopBar'
import { BottomBar } from '../components/shared/BottomBar'

export default function RootLayout() {
  return (
    <div className="w-full bg-[#F9F9F9] h-full overflow-hidden">
      <TopBar />
      <div className="w-full flex gap-3 h-full ">
        <LeftBar />
        <section className="flex-1 overflow-y-scroll pb-8">
          <Outlet />
          <BottomBar imageUrl="https://images.unsplash.com/photo-1710779140606-3fefe7843ca7?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </section>
      </div>
    </div>
  )
}
