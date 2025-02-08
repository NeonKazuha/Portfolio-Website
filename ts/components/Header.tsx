import React from 'react'
import { SocialIcon } from 'react-social-icons';
type Props = {}

export default function Header({}: Props) {
  return (
    <header>
        <div className="flex flex-row items-center">
            {/* Socials */}
            <SocialIcon 
                url="https://www.linkedin.com/in/tanmay-deshmukh-59a0b8275/" 
                fgColor='gray'
                bgColor='transparent'
            />
            <SocialIcon 
                url="https://www.linkedin.com/in/tanmay-deshmukh-59a0b8275/" 
                fgColor='gray'
                bgColor='transparent'
            />
            <SocialIcon 
                url="https://www.linkedin.com/in/tanmay-deshmukh-59a0b8275/" 
                fgColor='gray'
                bgColor='transparent'
            />

        <div>
            <SocialIcon
             
                    url="https://www.linkedin.com/in/tanmay-deshmukh-59a0b8275/" 
                    fgColor='gray'
                    bgColor='transparent'
            />
        </div>


        </div>
    </header>
  )
}