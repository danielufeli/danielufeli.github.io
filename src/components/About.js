import React from 'react'

import Image from '../assets/img/about.webp'

const About = () => {
  return (
    <section className="section bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <img src={Image} alt="" className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl" />
          <div className="flex flex-col items-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before::opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                Daniel Ufeli
              </h2>
              <p className="mb-4 text-accent">Freelance Web Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About