import React from 'react'

const Footer = () => {
  return (
    <footer className="footer bottom-0 left-0 w-full text-center">
    <p className="text-sm text-slate-800 backdrop-blur-sm py-2">
        &copy; {new Date().getFullYear()} Tarunkumar. All rights reserved.
    </p>
    <p className="text-xs mt-1">
        Built with ❤️ in React.
    </p>
</footer>
  )
}

export default Footer