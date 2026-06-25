import React, { lazy, Suspense } from 'react'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SkipLink from './components/SkipLink'

// Lazy load below-fold components for better performance
const About = lazy(() => import('./components/About'))
const Expertise = lazy(() => import('./components/Expertise'))
const Services = lazy(() => import('./components/Services'))
const Skills = lazy(() => import('./components/Skills'))
const Projects = lazy(() => import('./components/Projects'))
const Experience = lazy(() => import('./components/Experience'))
const Credentials = lazy(() => import('./components/Credentials'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

// Minimal loading fallback that matches design
const SectionLoader = () => (
  <div className="w-full min-h-[400px] flex items-center justify-center bg-transparent">
    <div className="w-8 h-8 border-2 border-[#ff2a2a] border-t-transparent rounded-full animate-spin"></div>
  </div>
)

function App() {
  return (
    <>
      <SkipLink />
      <Preloader />
      <Navbar />

      <main id="main-content">
        <Hero />

        <Suspense fallback={<SectionLoader />}>
          <About />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Expertise />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Services />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Skills />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Projects />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Experience />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Credentials />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Footer />
        </Suspense>
      </main>
    </>
  )
}

export default App
