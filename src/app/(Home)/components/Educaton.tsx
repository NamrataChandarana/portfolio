import { GraduationCap } from 'lucide-react'
import React from 'react'
import Title from './Title'

const Educaton = () => {
  return (
    <section className="flex flex-col gap-8 my-12">
    <Title title="Education"/>
    <article className="px-6">
      <div className="flex items-center w-full h-20 gap-5">
        <div className="border-2 border-none !w-20 h-full rounded-xl bg-[#121214] flex items-center justify-center">
            <GraduationCap />
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl font-bold text-[#f9f9f9ee]">Computer Engineering</h2>
          <p className="text-sm text-[#737375]/60 font-bold ">
            Marwadi University
          </p>
          <p className="text-sm text-[#737375]/60 font-bold">May 2021 - May 2024</p>
        </div>
      </div>
    </article>
    <article className="px-6">
      <div className="flex items-center w-full h-20 gap-5">
        <div className="border-2 border-none !w-20 h-full rounded-xl bg-[#121214] flex items-center justify-center">
            <GraduationCap />
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl font-bold text-[#f9f9f9ee] ">Diploma Computer Engineering</h2>
          <p className="text-sm text-[#737375]/60 font-bold">
            Marwadi University
          </p>
          <p className="text-sm text-[#737375]/60 font-bold">May 2018 - May 2021</p>
        </div>
      </div>
    </article>
  </section>
  )
}

export default Educaton