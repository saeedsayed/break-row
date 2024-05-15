import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FadeAnimate from "../common/animation/FadeAnimate";
import { HiMiniCursorArrowRipple } from "react-icons/hi2";
import { TfiEye } from "react-icons/tfi";
import whoWeAreImage from "../../assets/images/who-we-are.jpg";

const About = () => {
  return (
    <section className="py-5">
      <Container>
        <Row>
          <Col lg={7}>
            <FadeAnimate dir={"btt"}>
              <h3 className="mb-4">
                ابق في الطليعة في العصر{" "}
                <span className="text-primary">الرقمي</span> من خلال حلولنا
                التحويلية المصممة للرفع من مرونة أعمالك ودفعك نحو مستقبلٍ من
                باهر من النجاحات التي لا مثيل لها.
              </h3>
            </FadeAnimate>
            <Row>
              <Col>
                <FadeAnimate dir={"rtl"}>
                  <h4 className="border-bottom border-4 border-primary pb-2 mb-4 pe-3">
                    <HiMiniCursorArrowRipple className="d-block text-warning h1" />{" "}
                    مهمتنا
                  </h4>
                  <p>
                    تتمثل مهمتنا في "كودهايف" في تحويل الرؤى المبتكرة إلى
                    تطبيقات ديناميكية للشركات الناشئة. نحن نسعى جاهدين لتقديم
                    خدماتنا المتمثلة في تطوير تطبيقات عالية المستوى وفعالة
                    وبتكلفة مناسبة، وتزويد كل شركة بالأدوات الرقمية التي تحتاجها
                    لتزدهر في سوق اليوم سريع الخطى.
                  </p>
                </FadeAnimate>
              </Col>
              <Col>
                <FadeAnimate dir={"ltr"}>
                  <h4 className="border-bottom border-4 border-primary pb-2 mb-4 pe-3">
                    <TfiEye className="d-block text-warning h1" /> رؤيتنا
                  </h4>
                  <p>
                    رؤيتنا في "كود هايف" هي أن نصبح روادًا في مجال تطوير
                    التطبيقات، وكسر الحواجز التي تحول دون دخول الشركات للسوق
                    مهما كان حجمها. ونطمح إلى خلق عالم تتمتع فيه كل شركة بغض
                    النظر عن ميزانيتها أو مواردها، بإمكانية الوصول إلى حلول
                    رقمية عالية الجودة ومصممة خصيصًا لتعزيز قدرتها التنافسية
                    ونجاحها.
                  </p>
                </FadeAnimate>
              </Col>
            </Row>
          </Col>
          <Col lg={5}>
            <FadeAnimate dir={"ttb"}>
              <div className="position-relative">
                <img
                  src={whoWeAreImage}
                  alt="about-img"
                  className="img-fluid"
                />
                <h4
                  style={{
                    position: "absolute",
                    top: "30%",
                    left: "20px",
                    fontSize: "50px",
                  }}
                >
                  من <br />
                  نحن
                </h4>
              </div>
              <div
                style={{
                  backgroundColor: "var(--bg-dark)",
                  color: "#fff",
                  padding: "8px",
                  fontWeight: "100",
                  fontSize: "14px",
                }}
              >
                <p className="mb-3">
                  تأسست "بريك روو" على مبادئ الديناميكية والتركيز على العميل
                  والقوة التكنولوجية. كانت رحلتنا متشابكة مع عملية إنشاء تطبيقات
                  مُذهلة وكأنها قطعة فنية لكل من نظامي التشغيل iOS وAndroid. منذ
                  بدايتنا، كانت رؤيتنا هي إفساح الطريق أمام الشركات الناشئة
                  لتُنافس في السوق، بغض النظر عن قيود الوقت والميزانية.
                </p>
                <p className="mb-3">
                  نحن راضون بشدة عن فريقنا من مطوري التطبيقات الخبراء. إنهم
                  يمزجون بين إستراتيجيتهم عالية المستوى وكفاءتهم وشغفهم لتحقيق
                  نتائج مُبهرة للمشاريع، مهما كان حجمها.
                </p>
                <p className="mb-3">
                  بعد أن أمضينا وقتًا كافيًا في العمل على مشاريعٍ متنوعة، نحن
                  على استعداد لتحويل أفكارك النيرة إلى تطبيقاتٍ متكاملة الوظائف،
                  مهما تعقدت التحديات.
                </p>
              </div>
            </FadeAnimate>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
