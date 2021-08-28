import React, { useState } from 'react';
import Image from 'next/image';
import Gap from '../components/atoms/Gap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import CardEvent from '../components/molecules/CardEvent';

const Landingpage = () => {
  const [mission, setMission] = useState(false)
  
  return (
    <div>
      <div className="w-full h-screen relative overflow-hidden">
        <Image 
          src="/banner.jpg"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-0 left-0 w-full flex h-screen bg-black opacity-50" />
        <div className="absolute md:flex block top-1/2 transform items-center -translate-y-1/2 container left-1/2 -translate-x-1/2 p-4">
          <div className="lg:w-1/2 relative">
            <div className="lg:h-96 lg:w-96 w-64 h-64">
              <Image 
                src="/trabas.png"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div className="lg:w-1/2 text-center lg:text-left">
            <p className="text-2xl font-bold text-white mt-10 lg:mt-0">TRABAS</p>
            <p className="text-lg text-white">Nulla sit consectetur labore irure duis ex exercitation. Eu nulla excepteur voluptate exercitation veniam consequat exercitation cillum ea voluptate.</p>
            <Link to="/about" className="text-green-400">{'Baca selengkapnya >'}</Link>
          </div>
        </div>
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-white text-center">
          <div className="animate-bounce">
            <FontAwesomeIcon icon={faChevronDown} size="lg" />
          </div>
          <p>Scroll kebawah</p>
        </div>
      </div>
      <div className="container mx-auto mt-4">
        <section className="max-w-md mx-auto bg-white border border-gray-100 rounded-lg shadow-lg p-4 overflow-hidden">
          <div>
            <ul className="flex justify-center mb-2">
              <li className={`${!mission && 'bg-green-500 text-white'} font-bold text-xl mx-2 px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer`} onClick={() => setMission(false)}>Visi</li>
              <li className={`${mission && 'bg-green-500 text-white'} font-bold text-xl mx-2 px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer`} onClick={() => setMission(true)}>Misi</li>
            </ul>
            {/* vision */}
            <div className={`${!mission ? 'block' : 'hidden'}`}>Nulla aliqua elit commodo elit proident et ea dolor minim officia. Enim esse nisi veniam ea. Pariatur laboris exercitation eiusmod officia. Sunt quis esse ut nisi et culpa magna est elit eu laboris laborum est.</div>
            {/* mission */}
            <div className={`${mission ? 'block' : 'hidden'}`}>Esse ipsum ad proident proident occaecat ullamco labore amet nulla in et minim aliquip. Officia laboris ea duis cillum. Id nostrud eiusmod magna ullamco ullamco cillum proident consequat proident magna nisi et consectetur irure. Non commodo eiusmod et eiusmod non eu. Ipsum minim magna incididunt consequat. Esse sunt ut nulla anim ad aliquip nostrud sint ad labore excepteur esse laborum nostrud.</div>
          </div>
        </section>
        <Gap height={20} />
        <section className="border border-gray-100 py-2 px-4 bg-white rounded-lg shadow-lg">
          <div className="flex justify-between">
            <p className="font-bold text-xl">Aktivitas Terbaru</p>
            <Link className="text-green-500" to="/events">{'lihat semua aktivitas >'}</Link>
          </div>
          <Gap height={10} />
          <div className="flex flex-wrap overflow-hidden justify-center">
            <CardEvent />
            <CardEvent />
            <CardEvent />
          </div>
        </section>
      </div>
      <Gap height={20} />
    </div>
  )
}

export default Landingpage
