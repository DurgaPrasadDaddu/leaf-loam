import Navbar from '@/components/SharedComponents/Navbar'
import PageBanner from '@/components/SharedComponents/PageBanner'
import Footer from '@/components/SharedComponents/Footer'
import React from 'react'

const ServicesPage = () => {
  return (
    <div>
      <Navbar/>
      <PageBanner
        title="OUR SERVICES "
        description="We create elegant landscapes that blend nature, design, and harmony."
      />
      <Footer/>
      
    </div>
  )
}

export default ServicesPage
