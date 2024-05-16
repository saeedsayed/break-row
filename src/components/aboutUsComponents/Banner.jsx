// components
import MainButton from "../common/MainButton";
import FadeAnimate from "../common/animation/FadeAnimate";

const Banner = () => {
  return (
    <section className="py-5">
      <FadeAnimate dir={"btt"}>
        <h2 style={{ paddingBlockStart: "91px" }} className="text-center h1">
          نحن نهندس نمو اعمالك من خلال التحول{" "}
          <span className="text-primary">الرقمي</span> و{" "}
          <span className="text-warning">المحمول</span>
        </h2>
      </FadeAnimate>
      <div className="d-flex justify-content-center py-4 gap-4">
        <FadeAnimate dir={"rtl"}>
          <MainButton>الملف</MainButton>
        </FadeAnimate>
        <FadeAnimate dir={"ltr"}>
          <MainButton>لنتحدث سويا</MainButton>
        </FadeAnimate>
      </div>
    </section>
  );
};

export default Banner;
