import React from 'react'
import ContactHero from '../components/ContactHero'
import Form from '../components/Form'
import Faq from '../components/Faq'
import Location from '../components/Location'
import Testimonial from '../components/Testimonial'
import Links from '../components/Links'

const Contact = () => {
  return (
    <div>
        <ContactHero />
        <Links />
        <Faq />
        <Location />
        <Form />
        <Testimonial />
    </div>
  )
}

export default Contact