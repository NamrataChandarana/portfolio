"use client"
import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Github, LinkIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { projects } from '@/app/data'

const ProductsCarousel = () => {

  return (
    <>  
         <Carousel className="w-full " id="projects">
            <CarouselContent>
                {projects.map((project, index) => (
                <CarouselItem key={index} className="md:basis-1/2">
                    <div className="p-1">
                        <Card key={project.title} className="bg-[#09090B] border-2 border-[#27272A] p-4 ">
                            <CardContent className="flex aspect-square items-center justify-center p-3">
                                <div className="">
                                  <h3 className="font-bold text-[1.35rem] text-[#f7f5f5] mb-2">{project.title}</h3>
                                  <div className="flex gap-2 mb-3 flex-wrap">
                                    {project.tags.map((tag) => (
                                      <Badge key={tag} variant="secondary" className='bg-[#27272A] hover:bg-[#27272A] text-white'>
                                        {tag}
                                      </Badge>
                                    ))}
                                  </div>
                                  <p className="text-zinc-400 text-sm mb-4">{project.description}</p>
                                  <div className="flex gap-2 mb-8 ">
                                    <Button size="sm" variant="secondary" asChild>
                                      <Link href={project.live} className="flex items-center gap-1">
                                        <LinkIcon className="w-4 h-4" />
                                        Live
                                      </Link>
                                    </Button>
                                    <Button size="sm" variant="secondary" asChild>
                                      <Link href={project.github} className="flex items-center gap-1">
                                        <Github className="w-4 h-4" />
                                        Github
                                      </Link>
                                    </Button>
                                  </div>
                                  <div className='pt-5'>
                                  <Image src={project.img} alt="project" width="400" height={100} className='rounded-lg' />
                                  </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </CarouselItem>
                ))}
            </CarouselContent>
            <div className="absolute right-12 mt-8 ">
              <CarouselPrevious className='bg-black rounded-sm px-5 py-4' />
              <CarouselNext className='bg-black rounded-sm px-5 py-4' />
            </div>
        </Carousel>
    </>
  )
}

export default ProductsCarousel