import React from 'react'

const Footer = () => {
  return (
     <footer className="p-10 bg-gray-900 text-center text-white">
        <p>
          &copy; {new Date().getFullYear()} GoldTech Solutions. All Rights
          Reserved.
        </p>
      </footer>
  )
}

export default Footer
