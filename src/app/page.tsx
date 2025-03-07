"use client"
import ClickToEarn from '@/components/ClickToEarn'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import HowToBuy from '@/components/HowToBuy'
import JoinTheCult from '@/components/JoinTheCult'
import MeetPeperuney from '@/components/MeetPeperuney'
import OurPartners from '@/components/OurPartners'
import PeperuneyMeme from '@/components/PeperuneyMeme'
import PeperuneyToons from '@/components/PeperuneyToons'
import Pizzanomics from '@/components/Pizzanomices'
import WhatFaq from '@/components/WhatFaq'
import React from 'react'

const page = () => {
  return (
    <div><Hero />
      <MeetPeperuney />
      <HowToBuy />
      <Pizzanomics />
      <ClickToEarn />
      <PeperuneyToons/>
      <OurPartners />
      <PeperuneyMeme/>
      <WhatFaq />
      <JoinTheCult />
      <Footer/>
    </div>
  )
}

export default page