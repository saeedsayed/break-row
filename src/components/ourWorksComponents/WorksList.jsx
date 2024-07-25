import React from 'react'
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Container, Row } from 'react-bootstrap'
import { OURWORKS } from '../../data/dummyData'
import FadeAnimate from '../common/animation/FadeAnimate'
import { MdDoubleArrow } from "react-icons/md";

const WorksList = () => {
  return (
    <section className='py-5'>
      <Container>
        <Row className='gy-4'>
          {OURWORKS.map(({ id, name, thumbnails, type }) => (
            <Col lg="4" md='6' key={id}>
              <FadeAnimate dir={'btt'}>
                <Card className='shadow'>
                  <CardImg src={thumbnails} alt={name} />
                  <CardBody>
                    <CardTitle>{name}</CardTitle>
                    <CardText>{type}</CardText>
                    <Button variant='warning text-primary d-flex align-items-center'><MdDoubleArrow/> التفاصيل</Button>
                  </CardBody>
                </Card>
              </FadeAnimate>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default WorksList