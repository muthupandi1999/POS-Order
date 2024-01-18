import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function LoginSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear",
    arrows: false,
  };
  return (
    <div className="w-[350px]">
      <Slider {...settings}>
        <div className="">
          <img
            src="https://res.cloudinary.com/dmmsjhioj/image/upload/v1704463727/samples/eating-vegan-food-concept-illustration_114360-11292-ai-brush-removebg-6mc30mfs_uevlpx.png"
            alt=""
            className="w-full h-2/4"
          />
          <h4 className="py-3 text-2xl text-center text-Snow font-semibold">Empower your ideas</h4>
        </div>
        <div className="">
          <img
            src="https://res.cloudinary.com/dmmsjhioj/image/upload/v1704463909/samples/female-chef-concept-illustration_114360-12051-removebg-preview_q9c51t.png"
            alt=""
            className="w-full h-2/4"
          />
           <h4 className="py-3 text-2xl text-center text-Snow font-semibold">Empower your ideas</h4>
        </div>
        <div className="">
          <img
            src="https://res.cloudinary.com/dmmsjhioj/image/upload/v1704464416/samples/eating-variety-foods-concept-illustration_114360-11295-removebg-preview_wpzzqq.png"
            alt=""
            className="w-full h-2/4"
          />
           <h4 className="py-3 text-2xl text-center text-Snow font-semibold">Empower your ideas</h4>
        </div>
        <div className="">
          <img
            src="https://res.cloudinary.com/dmmsjhioj/image/upload/v1704464481/samples/female-chef-concept-illustration_114360-12051-removebg-preview_1_a8vgup.png"
            alt=""
            className="w-full h-2/4"
          />
           <h4 className="py-3 text-2xl text-center text-Snow font-semibold">Empower your ideas</h4>
        </div>
      </Slider>
    </div>
  );
}

export default LoginSlider;
