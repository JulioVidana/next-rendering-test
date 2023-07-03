import React, { ReactNode } from 'react'
import Header from '@/components/header'
import Head from 'next/head'


type Props = {
  children: React.ReactNode
}

export default function MainLayout({ children }: Props) {
  return (
    <div className='min-h-full'>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          {children}
        </div>
      </main>

    </div>
  )
}

