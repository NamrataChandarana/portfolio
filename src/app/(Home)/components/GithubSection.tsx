"use client"

import React, { useState } from 'react'
import { GithubGraph } from './ui/GithubGraph'
import { GithubIcon } from 'lucide-react'
import Link from 'next/link'

const GithubSection = () => {
    const [theme, setTheme] = useState("dark");
  return (
    <section className="flex flex-col gap-8 my-8 justify-center mt-16">
        <h1 className="text-xl px-6 py-2 border-l-8 border-primary bg-gradient-to-r from-[#121214] dark:from-accent/40 flex items-center gap-2 font-semibold">
          Github Contributions{" "}
          <Link href={"https://github.com/NamrataChandarana"} target="_blank">
            <GithubIcon className="cursor-pointer" />
          </Link>
        </h1>
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