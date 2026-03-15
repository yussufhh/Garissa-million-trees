import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ImpactStats from './components/ImpactStats'
import Featured from './components/Featured'
import Founder from './components/Founder'
import Footer from './components/Footer'
import Gallery from './components/Gallery'

const App = () => {
  return (
    <div>
     <Navbar/>
     <Hero/>
     <ImpactStats/>
     < Featured/>
     <Founder/>
     <Footer/>
     <Gallery/>
    </div>
  )
}

export default App