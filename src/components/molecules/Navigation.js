import React from 'react'
import { NavLink } from 'react-router-dom'
import Image from 'next/image'

const Navigation = () => {
  return (
    <nav className="fixed z-40 justify-between items-center flex px-6 py-3 w-full bg-green-500 shadow">
      <div className="flex items-center">
        <p className="mr-6 text-green-900 font-bold mt-1">
          <Image
            src="/brand.png"
            height={20}
            width={70}
          />
        </p>
        <ul className="flex">
          <li className="mr-4"><NavLink exact to="/" className="text-white" activeClassName="font-bold text-green-900">Home</NavLink></li>
          <li className="mr-4"><NavLink to="/events" className="text-white" activeClassName="font-bold text-green-900">Acara</NavLink></li>
          {/* <li className="mr-4"><NavLink to="/topic" className="text-white" activeClassName="font-bold text-green-900">Topik</NavLink></li> */}
        </ul>
      </div>
      <div className="fixed lg:relative bottom-5 lg:bottom-0 lg:right-0 right-5">
        <a href="https://api.whatsapp.com/send/?phone=%2B6281918367880&text&app_absent=0" target="_blank">
          <div className="bg-green-300 font-bold text-center text-green-900 px-3 py-1 rounded-lg shadow-lg">Daftar Member</div>
        </a>
      </div>
    </nav>
  )
}

export default Navigation
