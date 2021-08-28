import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import Gap from '../atoms/Gap'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="w-full bg-green-500 text-white py-2">
      <div className="container mx-auto flex justify-center items-center">
        <Link to="#">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </Link>
        <Gap width={10} />
        <Link to="#">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </Link>
        <Gap width={10} />
        <Link to="#">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </Link>
      </div>
    </footer>
  )
}

export default Footer
