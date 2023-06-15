import React from 'react'
import AmgenLogo from '../assets/amgen-logo.png'

export default function Logo() {
  return (
    <article className='logo-container'>
      <img src={AmgenLogo} alt='amgen logo'/>
    </article>
  )
}
