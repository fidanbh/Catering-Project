import React, { useState } from "react";

import styles from "./imageProduction.module.scss";

const ImageOfProduction = () => {
  const datas = [
    "/img/eatpakr.jpg",
    "/img/eatpakr.jpg",
    "/img/eatpakr.jpg",
    "/img/eatpakr.jpg",
    "/img/eatpakr.jpg",
    "/img/eatpakr.jpg",
    "/img/eatpakr.jpg",
    "/img/eatpakr.jpg",
    "/img/eatpakr.jpg",
    "/img/eatpakr.jpg",
  ];
  const [photoProduction, setPhotoProduction] = useState(datas);
  return (
    <div className={styles.ImageStyle}>
      {photoProduction.map((data) => (
        <img src={data} className={styles.Images}></img>
      ))}
    </div>
  );
};

export default ImageOfProduction;
