import { useEffect } from 'react'

import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import './App.css'

import AOS from 'aos'
import 'aos/dist/aos.css'
import About from './components/About/About'
import Projects from './components/Projects/Projects'

export default function App() {
  useEffect(() => {
    AOS.init({duration: 1200});
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </div>
  )
}