import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RootLayout from './_root/RootLayout'
import { Home } from './_root/pages'

function App () {
  return (
    <main className='flex h-screen scroll-smooth'>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />}></Route>
        </Route>

      </Routes>
    </main>
  )
}

export default App
