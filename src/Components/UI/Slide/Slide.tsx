import React, { useState } from "react";
import { Link } from "react-router-dom";

import Slider from "react-slick";

import { slideData } from "./SlideData";

import "./slide.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface GroupSliderProps {
  //   slides: string[];
}

const Slide: React.FC<GroupSliderProps> = () => {
  const [data, setData] = useState(slideData);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="slideMenu">
      <h1 className="tittleStyle">
        Предлагаем <span className="textTittleStyle">вашему вниманию</span>
      </h1>
      <Slider {...settings} className="slide">
        <div className="parts">
          <Link to="/otkritiye-stolovoy">
            <img src="https://i.hizliresim.com/1bodaj8.jpeg"></img>
            <p className="partsText">Организация питания в отдаленных точках</p>
          </Link>
        </div>
        <div className="parts">
          <Link to="/dostavka-pitaniya">
            <img src="https://i.hizliresim.com/fdhqcik.jpeg"></img>
            <p className="partsText">Доставка питания на предприятия</p>
          </Link>
        </div>
        <div className="parts">
          <Link to="/organizachiya-pitaniya-na-sotrudnikov-rabotnikov">
            <img src="https://i.hizliresim.com/7g3zmbk.jpeg"></img>
            <p className="partsText">Организация питания работников</p>
          </Link>
        </div>
        <div className="parts">
          <Link to="/organizachiya-pitaniya-na-predpriyatiya">
            <img src="https://i.hizliresim.com/juu4xae.jpg"></img>
            <p className="partsText">
              Организация пунктов питания по типу раздаточной
            </p>
          </Link>
        </div>
        <div className="parts">
          <Link to="/organizachiya-pitaniya-na-predpriyatiya">
            <img src="https://i.hizliresim.com/juu4xae.jpg"></img>
            <p className="partsText">
              Организация пунктов питания по типу раздаточной
            </p>
          </Link>
        </div>
      </Slider>
    </section>
  );
};

export default Slide;
