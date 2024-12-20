import { GraduationCap } from 'lucide-react'
import React from 'react'
import Title from './Title'
import { education } from '@/app/data'
const Educaton = () => {

  return (
    <section className="flex flex-col gap-8 my-12">
    <Title title="Education"/>
    {education.map((item,index) => (
        <article className="px-6" key={index}>
          <div className="flex items-center w-full h-20 gap-5">
            <div className="border-2 border-none !w-20 h-full rounded-xl bg-[#121214] flex items-center justify-center">
                <GraduationCap />
            </div>
            <div className="flex flex-col">
              <h2 className="text-xl font-bold text-[#f9f9f9ee]">{item.dept}</h2>
              <p className="text-sm text-[#737375]/60 font-bold ">{item.college}</p>
              <p className="text-sm text-[#737375]/60 font-bold">{item.year}</p>
            </div>
          </div>
        </article>
      ))
    }
  </section>
  )
}

export default Educaton