import Navbar from '@/components/SharedComponents/Navbar'
import PageBanner from '@/components/SharedComponents/PageBanner'
import Footer from '@/components/SharedComponents/Footer'
import React from 'react'
import ServicesSection from '@/components/Home/ServicesSection'
import Testimonials from '@/components/Home/Testimonials'

const ProjectsPage = () => {
  return (
    <div>
      <Navbar/>
      <PageBanner
        title="OUR PROJECTS"
        description="We create elegant landscapes that blend nature, design, and harmony."
      />
      <ServicesSection/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default ProjectsPage
