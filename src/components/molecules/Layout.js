import React, { useState } from 'react'
import Gap from '../atoms/Gap'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faUserAlt } from '@fortawesome/free-solid-svg-icons'

const Layout = ({ children }) => {
  const [panel, setPanel] = useState(false)
  
  return (
    <div className="min-h-screen">
    <Gap height={70} />
    <div className="container mx-auto flex">
      <div className="bg-white shadow-lg lg:mr-4 w-full p-4 rounded-lg">
        { children }
      </div>
      <div className="fixed lg:hidden right-2 p-2 rounded-full bg-yellow-400 w-12 h-12 flex justify-center items-center text-center" onClick={() => setPanel(true)} >
        <FontAwesomeIcon icon={faUserAlt} color='white' />
      </div>
      <div className={`${panel ? 'right-0 opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none -right-full lg:right-0 lg:opacity-100'} bg-white p-4 shadow-lg border border-gray-200 lg:w-96 w-full lg:rounded-lg fixed lg:relative h-screen top-0 z-50 transition-all duration-300`}>
        <div className="lg:hidden bg-green-400 text-white w-7 h-7 flex justify-center items-center rounded-full mb-5">
          <FontAwesomeIcon icon={faTimes} onClick={() => setPanel(false)} />
        </div>
        <p className="font-bold">Member Aktif 2</p>
        <Gap height={10} />
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-gray-200 relative overflow-hidden">
            <Image
              src="/profile.jpeg"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <Gap width={10} />
          <p>Sukron Amin</p>
        </div>
        <Gap height={10} />
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-gray-200 relative overflow-hidden">
            <Image
              src="/profile.jpeg"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <Gap width={10} />
          <p>Sukron Amin</p>
        </div>
        <Gap height={10} />
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-gray-200 relative overflow-hidden">
            <Image
              src="/profile.jpeg"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <Gap width={10} />
          <p>Sukron Amin</p>
        </div>
        <Gap height={10} />
      </div>
    </div>
    </div>
  )
}

export default Layout
