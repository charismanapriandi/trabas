import React from 'react'
import Image from 'next/image'
import Gap from '../atoms/Gap'
import { Link } from 'react-router-dom'

const CardEvent = () => {
  return (
    <Link to="/events/event">
      <div className="border border-gray-200 rounded-lg p-2 max-w-sm mr-2 mb-2 relative">
        <div className="flex justify-between items-center">
          <p className="font-bold text-xl">Non incididunt ipsum nisi</p>
          <span className="bg-green-400 text-white px-2 rounded-full">acara</span>
        </div>
        <Gap height={10} />
        <div className="relative w-full h-64">
          <Image
            src="/mendaki.jpg"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <Gap height={10} />
        <p>Nostrud minim sit cupidatat sint consectetur proident culpa ullamco qui pariatur aliqua sit. Esse excepteur tempor quis et proident in id laboris. In voluptate aliqua cillum id eu est tempor laborum proident adipisicing aliqua mollit deserunt amet. Enim mollit eiusmod veniam sunt pariatur aliqua qui.</p>
      </div>
    </Link>
  )
}

export default CardEvent
