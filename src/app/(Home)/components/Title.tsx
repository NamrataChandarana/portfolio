import Link from 'next/link';
import React from 'react'

interface HeadingProps {
    title: string;
    icon?: React.ElementType; 
    link?: string;
  }

const Title: React.FC<HeadingProps> = ({title, icon: Icon, link} : HeadingProps) => {
  return (
    <h1 className="text-xl px-6 py-2 border-l-8 border-primary bg-gradient-to-r from-[#121214] dark:from-accent/40 flex items-center gap-2 font-semibold">
        {title}{" "}
        {link && Icon && (
              <Link href={link} target="_blank">
                  <Icon className="cursor-pointer" />
              </Link>
        )} 
    </h1>
  )
}

export default Title