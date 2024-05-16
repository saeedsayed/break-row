// components
import { Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";
import { MainButton } from "../common";
import FadeAnimate from "../common/animation/FadeAnimate";
// data
import { HOME_BANNER } from "../../data/dummyData";
// styles
import style from "./Banner.module.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Banner = () => {
  return (
    <section className={`${style.bannerSection}`}>
      <Container className="h-100">
        <Swiper
          modules={[Pagination, Autoplay, EffectFade]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          fadeEffect={{ crossFade: true }}
          spaceBetween={50}
          slidesPerView={1}
          effect={"fade"}
          pagination={{ clickable: true }}
          className="h-100"
        >
          {HOME_BANNER.map((banner) => (
            <SwiperSlide key={banner.id} className="h-100">
              <Row className="align-items-stretch h-100">
                <Col md={7} className="d-flex align-items-center">
                  <FadeAnimate dir={"rtl"}>
                    <img src={banner.image} alt={banner.description} />
                  </FadeAnimate>
                </Col>
                <Col className="d-flex flex-column justify-content-center align-items-start">
                  <FadeAnimate dir={"ltr"}>
                    <h5>الحل الكامل لشركتك</h5>
                    <p className="h1">{banner.description}</p>
                    <MainButton to={"/about-us"}>اقرا اكثر</MainButton>
                  </FadeAnimate>
                </Col>
              </Row>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default Banner;
