import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Dishes from './components/Dishes'
import About from './components/About'
import Menu from './components/Menu'
import Reviews from './components/Reviews'
import Getintouch from './components/Getintouch'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div id='home'>
          <Home />
        </div>

        <div className='menu'>
          <Menu />
        </div>

        <div className='about'>
          <About />
        </div>

        <div className='dishes'>
          <Dishes />
        </div>
       
        <div className='reviews'>
          <Reviews />
        </div>

        <div className='getintouch'>
          <Getintouch />
        </div>

        <div className='footer'> 
          <Footer />
        </div>
      </main>
    </div>
  )
}

export default App
