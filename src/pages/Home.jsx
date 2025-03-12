import React from 'react'
import Slider from "../componets/partials/Slider"
import About from '../componets/About'
import Blog from '../componets/Blog'
import VideoSection from '../componets/VideoSection'
import MoreInformation from '../componets/MoreInformation'
import Events from '../componets/Events'

export default function Home() {
  return (
    <>
    <Slider/>
   <About/>
   <Blog/>
   <VideoSection/>
     <MoreInformation/>

    <Events/>
    </>
  )
}
