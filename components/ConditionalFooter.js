'use client'

import { usePathname } from 'next/navigation'
import Footer from './Footer'

export default function ConditionalFooter() {
  const pathname = usePathname()
  
  // Don't show global footer on group landing page (root path)
<<<<<<< HEAD
  if (pathname === '/' || pathname === '/about' || pathname === '/sustainability' || pathname === '/contact' || pathname === '/news-reports' || pathname === '/updates') {
=======
  if (pathname === '/' || pathname === '/about') {
>>>>>>> 09f502f6831cafc0fec0c8166129968f60057ea0
    return null
  }
  
  return <Footer />
}

