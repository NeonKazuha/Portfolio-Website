'use client'

import Link from 'next/link';
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundColor'
import { urlFor } from "../protfolio/sanity";
import { PageInfo } from '../typings';

type Props = {
  pageInfo: PageInfo
}

export default function Hero({ pageInfo }: Props) {
// eslint-disable-next-line @typescript-eslint/no-unused-vars 
    const [text, _unused] = useTypewriter({
        words: [
          `Hi, the name's ${pageInfo?.name}`, 
          '!pip install brain', 
          'Les go Python!!!'
        ],
        loop: true,
        delaySpeed: 2000,
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />

      <img
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
        src={urlFor(pageInfo?.heroImage).url()}
        alt=''
      />

      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[10px] md:tracking-[15px]'>
          {pageInfo?.role}
        </h2>
        <h1 className='text-2xl md:text-5xl lg:text-6xl font-semibold px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#68B2A0' />
        </h1>

        <div className='pt-5'>
          <Link href='#about'>
            <button className='heroButton'>About</button>
          </Link>
          <Link href='#experience'>
            <button className='heroButton'>Experience</button>
          </Link>
          <Link href='#skills'>
            <button className='heroButton'>Skills</button>
          </Link>
          <Link href='#projects'>
            <button className='heroButton'>Projects</button>
          </Link>
        </div>
      </div>
    </div>
  )
}