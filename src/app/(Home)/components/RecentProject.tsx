import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Github, LinkIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Title from './Title'

export default function RecentProject() {

    const projects = [
        {
          title: "Chronomint",
          description: "A tool for wrapping NFTs into tokens like USDC, USDT, or DAI. Worked on Frontend Only",
          tags: ["Next.js", "TypeScript", "TailwindCSS", "Frontend"],
          img:"/wcz.png"
        },
        {
          title: "Invoice generator",
          description: "A invoice generator tool used for making invoices and let user download them easily",
          tags: ["React.js", "TailwindCSS"],
          img:"/foodplaza.png"
        },
    ]
      
  return (
    <section className="mb-16 mt-10">
    <Title title="Recent Projects"/>
    <div className="grid md:grid-cols-2 gap-4 mt-8 ">
      {projects.map((project) => (
        <Card key={project.title} className="bg-[#09090B] border-2 border-[#27272A] p-4 ">
          <div className="">
            <h3 className="font-bold text-[1.35rem] text-[#f7f5f5] mb-2">{project.title}</h3>
            <div className="flex gap-2 mb-3">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className='bg-[#27272A] hover:bg-[#27272A] text-white'>
                  {tag}
                </Badge>
              ))}
            </div>
            <p className="text-zinc-400 text-sm mb-4">{project.description}</p>
            <div className="flex gap-2 mb-8 ">
              <Button size="sm" variant="secondary" asChild>
                <Link href="#" className="flex items-center gap-1">
                  <LinkIcon className="w-4 h-4" />
                  Live
                </Link>
              </Button>
              <Button size="sm" variant="secondary" asChild>
                <Link href="#" className="flex items-center gap-1">
                  <Github className="w-4 h-4" />
                  Github
                </Link>
              </Button>
            </div>
            <div className='pt-5'>
                <Image src={project.img} alt="project" width="400" height={100} className='rounded-lg' />
            </div>
          </div>
        </Card>
      ))}
    </div>
  </section>
  )
}
