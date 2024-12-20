import { Badge } from '@/components/ui/badge'
import React from 'react'

const Skills = () => {

  const skills = [
      "React.js",
      "Redux",
      "TypeScript",
      "JavaScript",
      "TailwindCSS",
      "MongoDB",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Git/GitHub",
  ];

  return (
    <section className="mb-12">
      <h3 className="font-bold text-[1.35rem] text-[#f7f5f5] mb-2">Skills</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
         <Badge key={skill} variant="secondary" className='bg-[#27272A] hover:bg-[#27272A] text-white py-2 px-3'>{skill}</Badge>
        ))}
      </div>
    </section>
  )
}

export default Skills