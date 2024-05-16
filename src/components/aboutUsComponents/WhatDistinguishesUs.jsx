// components
import { Card, CardBody, CardImg, Col, Container, Row } from "react-bootstrap";
import FadeAnimate from "../common/animation/FadeAnimate";
// assets
import whatDistinguishesImage from "../../assets/images/what-makes.jpg";
// data
import { STANDOUT } from "../../data/dummyData";

const WhatDistinguishesUs = () => {
  return (
    <section className="py-5">
      <Container>
        <Row>
          <Col md="5">
            <FadeAnimate dir={"rtl"} className="position-relative">
              <img
                src={whatDistinguishesImage}
                alt=""
                style={{ borderRadius: "100px 100px 0 100px", height: "100%" }}
              />
              <div
                className="position-absolute p-4 bg-warning bottom-0"
                style={{ borderRadius: "50px 50px 0 50px" }}
              >
                <p className="h1 text-primary">60%</p>
                <p className="h6">ستدخل إلى السوق في وقتٍ أسرع بنسبة</p>
                <p className="h1 text-primary">40%</p>
                <p className="h6">تخفيض بنسبة في تكلفة التطوير</p>
              </div>
            </FadeAnimate>
          </Col>
          <Col md="7">
            <FadeAnimate dir={"ltr"} className="py-5">
              <h1>
                ما الذي يُميزنا عن <div className="text-primary">غيرنا؟</div>
              </h1>
              <h4 className="mt-4">نحن نضع معايير عالية</h4>
              <p>
                الشيء الوحيد المشترك بيننا هو شغفنا تجاه ما نقوم به. نحن نحفز
                أنفسنا إلى الإبداع كل يوم لأن هذا هو ما نسعى لتحقيقه، وليس فقط
                لأننا مضطرون إلى ذلك.
              </p>
              <h4 className="mt-4">نحن نضع معايير عالية</h4>
              <p>
                الشيء الوحيد المشترك بيننا هو شغفنا تجاه ما نقوم به. نحن نحفز
                أنفسنا إلى الإبداع كل يوم لأن هذا هو ما نسعى لتحقيقه، وليس فقط
                لأننا مضطرون إلى ذلك.
              </p>
            </FadeAnimate>
          </Col>
        </Row>
        <h2 className="py-5 text-center h1">
          لما نحن <span className="text-warning">بارزون</span>؟
        </h2>
        <Row>
          {STANDOUT.map(({ title, description, image }) => (
            <Col md={"4"}>
              <FadeAnimate dir="btt" className="h-100">
                <Card className="shadow rounded-4 h-100">
                  <div className="p-3" style={{ height: "250px" }}>
                    <CardImg
                      src={image}
                      className="shadow h-100 rounded-5"
                      style={{ transform: "translateX(30px)" }}
                    />
                  </div>
                  <CardBody>
                    <h4>{title}</h4>
                    <p>{description}</p>
                  </CardBody>
                </Card>
              </FadeAnimate>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default WhatDistinguishesUs;
