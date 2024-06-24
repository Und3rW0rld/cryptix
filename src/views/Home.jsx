import React from 'react'

import Header from '../componentes/Header/Header'

function Home() {
  return (
    <>
    <Header/>
    <div id='home' className='home'>
      <p>Este es el home</p>
    </div>
    <div id='about' className='about'>
      <p>Este es el about</p>
    </div>
    <div id='contact' className='contact'>
      <p>Este es el contact</p>
    </div>
    </>
  )
}

export default Home