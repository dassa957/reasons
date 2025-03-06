import About from '@components/About'
import End from '@components/End'
import Hero from '@components/Hero'
import Hosts from '@components/Hosts'
import Special from '@components/Special'
import YouTubeVideos from '@components/Youtube'
import React from 'react'

const RootPage = () => {
  return (
    <div>
      <Hero />
      <Special />
      <YouTubeVideos />
      <About />
      <Hosts />
      <End />
    </div>
  )
}

export default RootPage