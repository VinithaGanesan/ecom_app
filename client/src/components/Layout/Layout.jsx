import React, { Children } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { Toaster } from 'react-hot-toast'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Toaster />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}
