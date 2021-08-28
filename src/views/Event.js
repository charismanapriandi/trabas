import React from 'react'
import Gap from '../components/atoms/Gap'
import Image from 'next/image'

const Event = () => {
  return (
    <div className="min-h-screen container mx-auto">
      <Gap height={70} />
      <div className="bg-white p-4 rounded-lg shadow-xl">
        <p className="font-bold text-xl">Non incididunt ipsum nisi</p>
        <div className="relative w-full h-64">
          <Image
            src="/mendaki.jpg"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <Gap height={20} />
        <p>
          Et cillum sit ipsum quis esse eu cupidatat eiusmod fugiat cupidatat ea culpa. Fugiat minim qui incididunt ex do velit. Consequat elit labore mollit sint culpa nisi Lorem esse. Ea mollit do commodo sint enim fugiat.
          Et cillum sit ipsum quis esse eu cupidatat eiusmod fugiat cupidatat ea culpa. Fugiat minim qui incididunt ex do velit. Consequat elit labore mollit sint culpa nisi Lorem esse. Ea mollit do commodo sint enim fugiat.
          Et cillum sit ipsum quis esse eu cupidatat eiusmod fugiat cupidatat ea culpa. Fugiat minim qui incididunt ex do velit. Consequat elit labore mollit sint culpa nisi Lorem esse. Ea mollit do commodo sint enim fugiat.
          Et cillum sit ipsum quis esse eu cupidatat eiusmod fugiat cupidatat ea culpa. Fugiat minim qui incididunt ex do velit. Consequat elit labore mollit sint culpa nisi Lorem esse. Ea mollit do commodo sint enim fugiat.
          Et cillum sit ipsum quis esse eu cupidatat eiusmod fugiat cupidatat ea culpa. Fugiat minim qui incididunt ex do velit. Consequat elit labore mollit sint culpa nisi Lorem esse. Ea mollit do commodo sint enim fugiat.
          Et cillum sit ipsum quis esse eu cupidatat eiusmod fugiat cupidatat ea culpa. Fugiat minim qui incididunt ex do velit. Consequat elit labore mollit sint culpa nisi Lorem esse. Ea mollit do commodo sint enim fugiat.
          Et cillum sit ipsum quis esse eu cupidatat eiusmod fugiat cupidatat ea culpa. Fugiat minim qui incididunt ex do velit. Consequat elit labore mollit sint culpa nisi Lorem esse. Ea mollit do commodo sint enim fugiat.
        </p>
      </div>
    </div>
  )
}

export default Event
