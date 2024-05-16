// components
import { Card, CardBody, Col, Container, Row } from "react-bootstrap";
import { SectionTitle } from "./";
import { MainButton } from "../common";
import FadeAnimate from "../common/animation/FadeAnimate";
// data
import { SERVICES } from "../../data/dummyData";
// assets
import background from "../../assets/images/revolutionize-bg.png";
import iphoneImage from "../../assets/images/iphone.png";
import aiImage from "../../assets/images/ai.svg";

const ServiceCard = ({ serviceName, serviceDescription, ServiceIcon }) => (
  <Col md={4} sm={6}>
    <FadeAnimate dir={"ltr"}>
      <div className="text-center">
        <span style={{ fontSize: "60px", color: "#f7be3c" }}>
          <ServiceIcon />
        </span>
        <h3 className="mt-3">{serviceName}</h3>
        <p>{serviceDescription}</p>
      </div>
    </FadeAnimate>
  </Col>
);

const OurServices = () => {
  return (
    <section className="py-5">
      <Container>
        <SectionTitle smTitle={"حقق المكسب معنا"} bgTitle={"خدماتنا"} />
        <Row className="justify-content-center">
          {SERVICES.map(({ id, name, description, icon }) => (
            <ServiceCard
              key={id}
              serviceName={name}
              serviceDescription={description}
              ServiceIcon={icon}
            />
          ))}
        </Row>
        <FadeAnimate>
          <Col md={6} className="mx-auto">
            <Card className="shadow">
              <CardBody className="text-center">
                <p>
                  اكتشف خدماتناالمخصصة والمتطورة والمصممة لتحقيق الكفاءة
                  والشفافية ورضا العملاء.
                </p>
                <MainButton to="/Services">عرض المزيد</MainButton>
              </CardBody>
            </Card>
          </Col>
        </FadeAnimate>
      </Container>

      <div style={{ background: `url(${background}) bottom repeat-x` }}>
        <Container>
          <Row className="pt-5 align-items-stretchd gy-3">
            <Col
              md={3}
              className="justify-content-center align-items-center d-flex flex-column"
            >
              <FadeAnimate dir={"rtl"} className="text-start">
                <p className="h1 text-primary">60%</p>
                <p className="h5">ستدخل إلى السوق في وقتٍ أسرع بنسبة</p>
                <p className="h1 text-primary">40%</p>
                <p className="h5">تخفيض بنسبة في تكلفة التطوير</p>
              </FadeAnimate>
            </Col>
            <Col lg={5}>
              <FadeAnimate dir={"btt"}>
                <div
                  style={{
                    background: `url(${iphoneImage}) center`,
                    height: "467px",
                    width: "360px",
                  }}
                  className="d-flex align-items-center m-auto justify-content-center flex-column h3 mb-0 px-4 text-center"
                >
                  أحدث ثورة في رؤيتك من خلال حلول{" "}
                  <span className="text-primary">
                    {" "}
                    تكنولوجيا المعلومات المبتكرة لدينا!
                  </span>
                </div>
              </FadeAnimate>
            </Col>
            <Col
              lg={4}
              className="justify-content-center align-items-center d-flex flex-column"
            >
              <FadeAnimate dir={"ltr"}>
                <p>
                  يلتزم فريقنا المُتفاني من عشاق التكنولوجيا بتقديم خدماتٍ رفيعة
                  المستوى مصممة خصيصًا لتلبية احتياجاتك الفريدة. سواء كنت تتطلع
                  إلى إنشاء تطبيق هاتفي يغير قواعد اللعبة، أو إنشاء نظام أساسي
                  ديناميكي للويب، أو الاستفادة من قوة الذكاء الاصطناعي، فلدينا
                  كل ما تحتاجه.
                </p>
              </FadeAnimate>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bg-section py-5">
        <Container>
          <Row>
            <Col lg={6}>
              <FadeAnimate dir={"ltr"}>
                <img src={aiImage} alt="" />
                <h4 className="mt-5">حلول الذكاء الاصطناعي وتعليم الآلات</h4>
                <p>
                  استفد من قوة الذكاء الاصطناعي لتبسيط العمليات وتعزيز الابتكار
                  وإنشاء تفاعلات مؤثرة مع العملاء
                </p>
              </FadeAnimate>
            </Col>
            <Col lg={6}>
              <FadeAnimate dir={"rtl"}>
                <ul>
                  <li className="p-3">
                    <h6>دمج الذكاء الاصطناعي</h6>
                    <p>
                      نُصمم التطبيقات بقدرات الذكاء الاصطناعي المضمنة، لتقديم
                      تجارب مخصصة ووظائف فائقة
                    </p>
                  </li>
                  <li className="p-3 bg-white">
                    <h6>الأتمتة والكفاءة</h6>
                    <p>
                      نستغل حلول الذكاء الاصطناعي لأتمتة المهام الروتينية وتعزيز
                      الإنتاجية وتحسين الكفاءة التشغيلية الشاملة
                    </p>
                  </li>
                  <li className="p-3">
                    <h6>روبوتات الدردشة المدعومة بالذكاء الاصطناعي</h6>
                    <p>
                      نستخدم روبوتات الدردشة المدعمة بالذكاء الاصطناعي لخدمة
                      العملاء على مدار الساعة، وتقديم استجابات سريعة وتعزيز
                      مشاركة العملاء
                    </p>
                  </li>
                </ul>
              </FadeAnimate>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default OurServices;
