import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FadeAnimate from "../common/animation/FadeAnimate";
import ourCoreValuesImage from "../../assets/images/our-core-values-img.png";

const OurPrincepel = () => {
  return (
    <section className="py-5 bg-section">
      <Container>
        <FadeAnimate>
          <h2 className="text-primary text-center mb-4">قيمنا الاساسية</h2>
          <p className="text-center mb-5">
            في "بريك روو"، كل قرار نتخذه، وكل استراتيجية ننفذها، وكل خدمة نقدمها
            مبنية على قيمٍ ثابتة.{" "}
          </p>
        </FadeAnimate>
        <Row>
          <Col lg={4}>
            <div dir="ltr" className="mt-4 mb-5">
              <h4>الابتكار</h4>
              <p>
                نحن نؤمن إيمانًا راسخًا بالإمكانات التحويلية للتكنولوجيا وقوة
                الأفكار الدافعة للتقدم.
              </p>
            </div>
            <div dir="ltr">
              <h4>إمكانية الوصول</h4>
              <p>
                نحن نؤمن بأن كل شركة بغض النظر عن حجمها، يجب أن يُتاح إليها
                إمكانية الوصول إلى حلول رقمية مخصصة من الدرجة الأولى.
              </p>
            </div>
          </Col>
          <Col lg={4}>
            <img src={ourCoreValuesImage} alt="our core values" />
          </Col>
          <Col lg={4}>
            <div className="mt-4 mb-5">
              <h4>النجاح</h4>
              <p>
                نحن نُدرك أن مسيرة انتصارنا ترتبط ارتباطًا وثيقًا بنجاح عملائنا.
                وعلى هذا الأساس، نحن ملتزمون بدعمهم في كل خطوة من رحلتهم.
              </p>
            </div>
            <div>
              <h4>الشراكات</h4>
              <p>
                أولى أولوياتنا هي بناء علاقات قوية وشفافة مع عملائنا، مبنية على
                الأهداف المشتركة والاحترام المتبادل.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OurPrincepel;
