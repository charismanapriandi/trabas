import React from 'react'
import Gap from '../components/atoms/Gap'
import CardEvent from '../components/molecules/CardEvent'
import Layout from '../components/molecules/Layout'

const EventList = () => {
  return (
    <Layout>
      <p className="font-bold text-xl">Daftar Acara</p>
      <Gap height={20} />
      <div className="flex flex-wrap justify-center">
        <CardEvent />
        <CardEvent />
        <CardEvent />
      </div>
    </Layout>
  )
}

export default EventList
