"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import React from 'react'

const HeroSection = () => {
  return (
    <section className="mb-12">
      <div className="text-zinc-400 mb-2">Hi there! This is</div>
      <div className="flex items-center gap-2 mb-3">
        <h1 className="text-3xl font-bold">Namrata Chandarana</h1>
      </div>
      <div className="text-zinc-400 mb-6 leading-relaxed">
        A Full stack developer who enjoys building website frontends and is also a full-stack developer. Passionate about creating various tech projects and learning along the way.
      </div>
      <div className='flex flex-wrap gap-4'>
        <div className="flex flex-wrap gap-1 space-x-3 mb-6 bg-[#0D2D1B] px-3 py-2 rounded-md">
            <span className="mr-1 mt-1 h-3 w-3 rounded-full bg-green-500"></span>
            Open to freelancing
          </div>
          <div className="flex flex-wrap gap-1 space-x-3 mb-6 bg-[#233266d8]  px-3 py-2 rounded-md">
            <span className="mr-1 mt-1 h-3 w-3 rounded-full bg-blue-500"></span>
            Learning new stuff regularly
        </div>
      </div>
      <div className="flex gap-3">
      <Button asChild>
        <Link href="#project">Project</Link>
      </Button>
      <Button asChild>
        <Link href="#contact">Contact</Link>
      </Button>
      </div>
    </section>
  )
}

export default HeroSection