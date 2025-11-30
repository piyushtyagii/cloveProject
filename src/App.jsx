import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import MobileForm from './components/MobileForm'
import Treatments from './components/Treatments'
import Worksamples from './components/Worksamples'
import Benefits from './components/Benefits'
import ClientReviews from './components/ClientReviews'
import Booking from './components/Booking'
import Safety from './components/Safety'
import GoogleReviews from './components/GoogleReviews'
import Locations from './components/Locations'
import DiscountPlan from './components/DiscountPlan'
import Faq from './components/Faq'
import Footer from './components/Footer'

function App() {

  return (
    <div className="overflow-x-hidden">
    <Header/>
    <Hero/>
    <div className="w-full py-3 px-5 block md:hidden overflow-hidden"><MobileForm/></div>
    <Treatments/>
    <Worksamples/>
    <Benefits/>
    <ClientReviews/>
    <Booking/>
    <div className="w-full py-3 px-5 block md:hidden overflow-x-hidden"><MobileForm isBooking={true}/></div>
    <Safety/>
    <GoogleReviews/>
    <Locations/>
    <DiscountPlan/>
    <Faq/>
    <Footer/>
    </div>
  )
}

export default App
