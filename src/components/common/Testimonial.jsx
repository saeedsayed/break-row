// Components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation } from "swiper/modules";
import { Container, Image } from "react-bootstrap";
// data
import { TESTIMONIAL } from "../../data/dummyData";
// styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import FadeAnimate from "./animation/FadeAnimate";

const Testimonial = () => {
  return (
    <section className="py-5 bg-section">
      <Swiper
        modules={[EffectFade, Navigation]}
        fadeEffect={{ crossFade: true }}
        spaceBetween={50}
        slidesPerView={1}
        effect={"fade"}
        loop
        navigation
      >
        {TESTIMONIAL.map(({ id, name, description, company, image }) => (
          <SwiperSlide key={id} className="h-100 user-select-none text-center">
            <FadeAnimate>
              <Container>
                <Image
                  src={image}
                  alt={name}
                  className="mb-4 mx-auto"
                  roundedCircle
                />
                <h6>
                  {name}-{company}
                </h6>
                <p>{description}</p>
              </Container>
            </FadeAnimate>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
