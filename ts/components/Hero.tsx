'use client'

import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

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
        
        <div className="text-2xl font-bold">
            <span>{text}</span>
            <Cursor cursorColor='#F7ABBA' />
        </div>
    </div>
  )
}