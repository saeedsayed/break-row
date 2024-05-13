// components
import SectionTitle from "./SectionTitle";
import { Col, Container, Row } from "react-bootstrap";
import FadeAnimate from "../common/animation/FadeAnimate";
import { Link } from "react-router-dom";
// icons
import { MdSupportAgent, MdNetworkPing } from "react-icons/md";
import { FaPersonRays } from "react-icons/fa6";

const WhyUsCard = ({ icon, title, description }) => (
  <Col md={4}>
    <div className="text-center">
      <span style={{ fontSize: "60px", color: "#f7be3c" }}>{icon}</span>
      <h3 className="mt-3">{title}</h3>
      <p>{description}</p>
      <Link to={"/about-us"}>اقراء اكثر</Link>
    </div>
  </Col>
);

const WhyUs = () => {
  return (
    <section className="py-5">
      <Container>
        <SectionTitle smTitle={"بنياننا"} bgTitle={"لما عليك اختيارنا ؟"} />
        <FadeAnimate dir={"ltr"}>
          <Row>
            <WhyUsCard
              title={"الدعم الشامل"}
              description={`  منذ الخطوة الأولى وحتى الإطلاق النهائي، ولما بعده، نحن متواجدون دائمًا
        لضمان استمرار نجاح حلولك الرقمية.`}
              icon={<MdSupportAgent />}
            />
            <WhyUsCard
              title={"نهجٌ يتمركز حول العملاء"}
              description={`نحن نستمع إلى ما تحتاجه، ونضع على أساسه الاستراتيجيات المناسبة لعملك وعملائك.`}
              icon={<FaPersonRays />}
            />
            <WhyUsCard
              title={"خبرة لا مثيل لها"}
              description={`فريقنا الخبير متواجد هنا لتحويل وجهات نظرك فيما يتعلق بعملك إلى منصاتٍ رقمية قوية.`}
              icon={<MdNetworkPing />}
            />
          </Row>
        </FadeAnimate>
      </Container>
    </section>
  );
};

export default WhyUs;
