import React from 'react'
import AboutHero from '../components/About/AboutHero'
import OurStory from '../components/About/OurStory'
import Highlight from '../components/Home/Highlight'
import MissionValues from '../components/About/MissionValues'
import AreasWeServe from '../components/About/AreasWeServe'

function About() {
  return (
    <div>
      <AboutHero />
      <OurStory />
      <Highlight />
      <AreasWeServe />
      <MissionValues />
    </div>
  )
}

export default About