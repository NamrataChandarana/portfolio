import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t border-zinc-800 pt-8 mt-16">
        <div className="flex justify-center gap-4">
          <Link href="https://github.com/NamrataChandarana" className="text-zinc-400 hover:text-white">
            <Github className="w-5 h-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://www.linkedin.com/in/namratachandarana/" className="text-zinc-400 hover:text-white">
            <Linkedin className="w-5 h-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="https://x.com/Namrata20_" className="text-zinc-400 hover:text-white">
            <Twitter className="w-5 h-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="mailto:namratachandarana20@gmail.com" className="text-zinc-400 hover:text-white">
            <Mail className="w-5 h-5" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
        <div className="text-center text-zinc-500 text-sm mt-4">
            Developed by Namrata Chandarana
        </div>
    </footer>
  )
}

export default Footer