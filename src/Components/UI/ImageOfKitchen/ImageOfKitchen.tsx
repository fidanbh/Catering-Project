import React, { useState } from "react";

import Menu from "../Menu/Menu";
import Slide from "../Slide/Slide";
import ClickMenu from "../ClickMenu/ClickMenu";
import PartsOfCompany from "../PartsOfCompany/PartsOfCompany";
import CompanyInfo from "../CompanyInfo/CompanyInfo";
import Whywe from "../WhyWe/Whywe";
import TrustUs from "../TrustUs/TrustUs";
import Ourservice from "../Ourservice/Ourservice";
import WorkWithUs from "../WorkWithUs/WorkWithUs";
import WhatWeService from "../WhatWeService/WhatWeService";
import EightReason from "../EightReason/EightReason";
import GetOffer from "../GetOffer/GetOffer";

import styles from "./imageKitchen.module.scss";

const ImageOfKitchen = () => {
  const data = [
    "https://i.hizliresim.com/j66ja7i.jpg",
    "https://i.hizliresim.com/j66ja7i.jpg",
    "https://i.hizliresim.com/j66ja7i.jpg",
    "https://i.hizliresim.com/j66ja7i.jpg",
    "https://i.hizliresim.com/j66ja7i.jpg",
    "https://i.hizliresim.com/j66ja7i.jpg",
    "https://i.hizliresim.com/j66ja7i.jpg",
    "https://i.hizliresim.com/j66ja7i.jpg",
    "https://i.hizliresim.com/j66ja7i.jpg",
    "https://i.hizliresim.com/j66ja7i.jpg",
  ];
  const [photoData, setPhotoData] = useState(data);
  return (
    <section>
      <div className={styles.ImageStyle}>
        {photoData.map((data) => (
          <img src={data} className={styles.Images}></img>
        ))}
      </div>
    </section>
  );
};

export default ImageOfKitchen;
