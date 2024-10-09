import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick/lib/slider";
import SlickItem from "../SlickItem";
import CustomSlider from "./style";

const SlickSlider = ({ details = "", slides = 3, theme = "light" }) => {
    const settings = {
        slidesToShow: slides,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    infinite: true,
                },
            },
            {
                breakpoint: 778,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                },
            },
        ],
    };

    let slickItems = [];
    for (let i of details) {
        slickItems.push(<SlickItem image={i.image} name={i.name} work={i.work} linkedin={i.linkedin} theme={theme} />);
    }

    return (
        <CustomSlider {...settings} theme={theme} className="container">
            {slickItems}
        </CustomSlider>
    );
};

export default SlickSlider;
