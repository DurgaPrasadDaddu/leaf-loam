import Navbar from '@/components/SharedComponents/Navbar'
import PageBanner from '@/components/SharedComponents/PageBanner'
import Footer from '@/components/SharedComponents/Footer'
import React from 'react'
import IntroductionPage from '@/components/AboutComponents/IntroductionPage'
import MissionVisionPage from '@/components/AboutComponents/MissionVisionPage'
import ProcessSection from '@/components/AboutComponents/ProcessSectionPage'

const AboutPage = () => {
  return (
    <div>
      <Navbar/>
      <PageBanner
        title="ABOUT US"
        description="We create elegant landscapes that blend nature, design, and harmony."
      />
      <IntroductionPage/>
      <MissionVisionPage/>
      <ProcessSection/>
      <Footer/>
      
    </div>
  )
}

export default AboutPage
