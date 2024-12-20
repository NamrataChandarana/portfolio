"use client"

import React, { useState } from 'react'
import { GithubGraph } from './ui/GithubGraph'
import { GithubIcon, Heading } from 'lucide-react'
import Link from 'next/link'
import Title from './Title'

const GithubSection = () => {
    const [theme, setTheme] = useState("dark");
  return (
    <section className="flex flex-col gap-8 justify-center my-16">
        <Title title="Github Contributions" icon={GithubIcon} link='https://github.com/NamrataChandarana' />
        <div className="flex items-center px-6 justify-center">
          <GithubGraph
            username="NamrataChandarana"
            blockMargin={3}
            colorPallete={[
              theme === "dark" ? "#202020" : "#f4f4f4",
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