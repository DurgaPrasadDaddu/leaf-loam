import Navbar from '@/components/SharedComponents/Navbar'
import PageBanner from '@/components/SharedComponents/PageBanner'
import Footer from '@/components/SharedComponents/Footer'
import React from 'react'
import ServicesSectionPage from '@/components/ServicesPage Components/ServicesSectionPage'
import Testimonials from '@/components/Home/Testimonials'

const ServicesPage = () => {
  return (
    <div>
      <Navbar/>
      <PageBanner
        title="OUR SERVICES "
        description="We create elegant landscapes that blend nature, design, and harmony."
      />
      <ServicesSectionPage/>
      <Testimonials/>
      <Footer/>
      
    </div>
  )
}

export default ServicesPage;
