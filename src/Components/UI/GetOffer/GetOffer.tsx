import React from "react";
import { Link } from "react-router-dom";

import styles from "./getOffer.module.scss";
import Button from "../Button/Button";

const GetOffer = () => {
  return (
    <section className={styles.getOffer}>
      <div>
        <div>
          <div className={styles.tittle}>
            <h1 className={styles.tittleText}>
              Получите{" "}
              <span className={styles.styleText}>коммерческое предложение</span>
            </h1>
          </div>
          <div className={styles.styleTextSecond}>
            <span>
              Мы с вами свяжемся, уточним детали и вышлем коммерческое
              предложение для Вас.
            </span>
          </div>
        </div>
        <div className={styles.formStyle}>
          <form>
            <span className={styles.offerMessage}>
              Заполните и отправьте форму
            </span>
            <br />
            <label>
              <span className={styles.offerAbouCompany}>
                Опишите вкратце о вашей организации и вашем запросе:
              </span>
              <br />
              <textarea className={styles.offerTextarea}></textarea>
            </label>
            <br />
            <label>
              <span className={styles.offerAbouCompany}>Ваше имя:</span>
              <br />
              <input className={styles.offerInput}></input>
            </label>
            <br />
            <label>
              <span className={styles.offerAbouCompany}>Ваша почта:</span>
              <br />
              <input className={styles.offerInput}></input>
            </label>
            <br />
            <label>
              <span className={styles.offerAbouCompany}>Ваш телефон:</span>
              <br />
              <input className={styles.offerInput}></input>
            </label>
            <br />
            <Button
            openPage={''}
              text={"Отправить запрос"}
              icon={""}
              buttonStyle={styles.buttonStyle}
            />
            <span className={styles.textConf}>
              Отправляя форму, вы даете согласие на обработку своих{" "}
              <Link to="/newPage">персональных данных.</Link>
            </span>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetOffer;
