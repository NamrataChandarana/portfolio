"use client"

import React from 'react'
import { GithubGraph } from './ui/GithubGraph'
import { GithubIcon } from 'lucide-react'
import Title from './Title'
import { GitHub } from '@/app/constant'

const GithubSection = () => {
  return (
    <section className="flex flex-col gap-8 justify-center my-16">
        <Title title="Github Contributions" icon={GithubIcon} link={GitHub} />
        <div className="flex items-center px-6 justify-center">
          <GithubGraph
            username="NamrataChandarana"
            blockMargin={3}
            colorPallete={[
              "#202020",
              "#216E39",
              "#40c463",
              "#30a14e",
              "#216e39",
            ]}
          />
        </div>
    </section>
  )
}

export default GithubSection