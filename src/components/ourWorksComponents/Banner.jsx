import React from 'react'
import { Container } from 'react-bootstrap'
import FadeAnimate from '../common/animation/FadeAnimate'

const Banner = () => {
  return (
    <section className='py-5 bg-section'>
      <Container>
        <FadeAnimate>
        <h1 style={{ paddingBlockStart: '150px' }} className='text-center'>نحن نصنع العقود الآجلة الرقمية بواسطة
          <span className='text-primary'>ابتكار ملهم</span> في العلامات التجارية</h1>
        </FadeAnimate>
      </Container>
    </section>
  )
}

export default Banner