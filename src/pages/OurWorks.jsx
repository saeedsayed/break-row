import React from 'react'
import PageAnimate from '../components/common/animation/PageAnimate'
import { Banner, WorksList } from "../components/ourWorksComponents"

const OurWorks = () => {
  return (
    <PageAnimate>
      <Banner />
      <WorksList />
    </PageAnimate>
  )
}

export default OurWorks