import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import Link from 'next/link'
const Footer = () => {
  return (
     <footer className="p-10 bg-gray-900  text-white w-full">
      <div className='flex flex-col justify-center items-center gap-3 w-full'>
        <p className='text-sm md:text-base text-center'>
          &copy; {new Date().getFullYear()} GoldTech Solutions. All Rights
          Reserved.
        </p>
        <div className='flex gap-3 items-center'>
          <Link href={'https://github.com/dannymccall?tab=repositories'} rel="noopener noreferrer" target='_blank'>
            <FaGithub size={25}/>
          </Link>
          <Link href={'https://www.linkedin.com/in/daniel-palmer-278010189/'} rel="noopener noreferrer" target='_blank'>
            <FaLinkedinIn size={25}/>
          </Link>
        </div>

      </div>
      </footer>
  )
}

export default Footer
