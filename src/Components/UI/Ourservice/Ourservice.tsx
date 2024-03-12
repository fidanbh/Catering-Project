import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import styles from "./ourservice.module.scss";
import ImageOfKitchen from "../ImageOfKitchen/ImageOfKitchen";
import ImageOfProduction from "../ImageOfProduction/ImageOfProduction";

const Ourservice = () => {
  const [showDiv1, setShowDiv1] = useState(true);
  const [showDiv2, setShowDiv2] = useState(false);

  const toggleDiv1 = () => {
    setShowDiv1(true);
    setShowDiv2(false);
  };

  const toggleDiv2 = () => {
    setShowDiv1(false);
    setShowDiv2(true);
  };
  return (
    <section className={styles.ourService}>
      <div>
        <h1 className={styles.tittle}>
          Не боимся показать{" "}
          <span className={styles.styleText}>процесс изнутри</span>
        </h1>
      </div>
      <div>
        <ul className={styles.listOurService}>
          <li onClick={toggleDiv1}>Фото кухни </li>
          <li onClick={toggleDiv2}>Фото продукции </li>
        </ul>
      </div>
      <div className={styles.firstPart}>
        {showDiv1 && <ImageOfKitchen />}
        {showDiv2 && <ImageOfProduction />}
      </div>
    </section>
  );
};

export default Ourservice;
