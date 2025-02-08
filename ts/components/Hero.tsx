'use client'

import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundColor'

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            'Konichiwa!, Tanmay here', '!pip install brain', 'Les go Python!!!'
        ],
        loop: true,
        delaySpeed: 2000,
    })
  return (
    <div>
        <BackgroundCircles />
        <div className="text-2xl font-bold und">
            <span>{text}</span>
            <Cursor cursorColor='#F7ABBA' />
        </div>
    </div>
  )
}