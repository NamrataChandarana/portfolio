import { GitHub, LINKEDIN, TWITTER, MAIL } from '@/app/constant'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t border-zinc-800 pt-8 mt-16" id="contact">
        <div className="flex justify-center gap-4">
          <Link href={GitHub} className="text-zinc-400 hover:text-white">
            <Github className="w-5 h-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href={LINKEDIN} className="text-zinc-400 hover:text-white">
            <Linkedin className="w-5 h-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href={TWITTER} className="text-zinc-400 hover:text-white">
            <Twitter className="w-5 h-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href={MAIL} className="text-zinc-400 hover:text-white">
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