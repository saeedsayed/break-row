import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { PAGES_LINKS, SOCIAL_MEDIA_LINKS } from "../../data/dummyData";
import FadeAnimate from "./animation/FadeAnimate";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section
      style={{ backgroundColor: "var(--bg-dark)" }}
      className="py-5 text-white"
    >
      <Container>
        <Row>
          <Col>
            <FadeAnimate dir={"rtl"}>
              <p className="h1">نتكلم؟</p>
              <p className="h5">لا تتردد في الاتصال بنا</p>
              <p className="mb-0">هاتف: ٩٧١٥٤٢٢٠٣٣٣٠+</p>
              <p>عنوان البريد الإلكتروني: info@breakrow.ae</p>
            </FadeAnimate>
          </Col>
          <Col>
            <FadeAnimate dir={"ltr"}>
              <div dir="ltr">
                <p className="h3">تابعنا على</p>
                <div className="d-flex gap-3">
                  {SOCIAL_MEDIA_LINKS.map(
                    ({ id, name, path, avatar: Avatar }) => (
                      <a
                        href={path}
                        key={id}
                        title={name}
                        target="_blank"
                        className="text-primary h2"
                      >
                        <Avatar />
                      </a>
                    )
                  )}
                </div>
                <div className="d-flex gap-3">
                  {PAGES_LINKS.map(({ name, path }) => (
                    <Link to={path} key={name} className="nav-link">
                      {name}
                    </Link>
                  ))}
                </div>
                <p className="mt-3 mb-0">جمع الحقوق محفوظة, بريك روو 2024</p>
              </div>
            </FadeAnimate>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
