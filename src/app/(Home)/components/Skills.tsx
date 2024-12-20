import { Badge } from '@/components/ui/badge'
import React from 'react'
import Title from './Title';
import { skills } from '@/app/data';

const Skills = () => {
  
  return (
    <section className="mb-12">
      <Title title='Skills'/>
      <div className="flex flex-wrap gap-2 mt-8">
        {skills.map((skill) => (
         <Badge key={skill} variant="secondary" className='bg-[#27272A] hover:bg-[#27272A] text-white py-2 px-3'>{skill}</Badge>
        ))}
      </div>
    </section>
  )
}

export default Skills