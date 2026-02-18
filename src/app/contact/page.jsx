import Navbar from '@/components/SharedComponents/Navbar'
import PageBanner from '@/components/SharedComponents/PageBanner'
import Footer from '@/components/SharedComponents/Footer'
import React from 'react'
import ContactSection from '@/components/Home/ContactSection'

const ContactsPage = () => {
  return (
    <div>
      <Navbar/>
      <PageBanner
        title="CONTACT US"
        description="We create elegant landscapes that blend nature, design, and harmony."
      />
      <ContactSection/>
      <Footer/>
      
    </div>
  )
}

export default ContactsPage
