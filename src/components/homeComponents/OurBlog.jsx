import React from "react";
import SectionTitle from "./SectionTitle";
import { Card, CardBody, Col, Container, Row } from "react-bootstrap";
import FadeAnimate from "../common/animation/FadeAnimate";
import image from "../../assets/images/ai.svg";
import MainButton from "../common/MainBtn";
import { BLOGS } from "../../data/dummyData";
import { Link } from "react-router-dom";

const BlogCard = ({ image, title }) => (
  <Col sm={6}>
    <Card className="shadow rounded-4">
      <CardBody className="d-flex">
        <div>
          <h5 className="mt-3 h6">{title}</h5>
          <Link className="text-warning">اقرأ اكثر</Link>
        </div>
        <img src={image} alt={title} className="rounded-5 me-3 w-25" />
      </CardBody>
    </Card>
  </Col>
);

const OurBlog = () => {
  return (
    <section>
      <Container>
        <SectionTitle smTitle={"حقق المكاسب معنا"} bgTitle={"مدونتنا"} />
        <Row className="mb-5">
          <Col lg={4}>
            <FadeAnimate dir={"rtl"} className="h-100">
              <div className="border h-100 rounded-4">
                <img src={image} alt="" />
              </div>
            </FadeAnimate>
          </Col>
          <Col lg={8}>
            <Row className="gy-3">
              {BLOGS.map(({ id, title, image }) => (
                <BlogCard key={id} image={image} title={title} />
              ))}
            </Row>
          </Col>
        </Row>
        <FadeAnimate>
          <MainButton to="/Blogs" style={{ margin: "auto", display: "block" }}>
            عرض جميع المدونات
          </MainButton>
        </FadeAnimate>
      </Container>
    </section>
  );
};

export default OurBlog;
