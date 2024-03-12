import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

import { FaLocationDot } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { FaPhoneAlt } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";

import styles from "./topNav.module.scss";
import "./topnav.css";

const TopNav = () => {
  const [isBlog, setIsBlog] = useState(false);
  const handleWhatsAppRedirect = () => {
    const phoneNumber = "+78442609060";
    const whatsappUrl = `https://wa.me/${phoneNumber}`;

    // window.location.href = whatsappUrl;
    window.open(whatsappUrl, "_blank");
  };
 
  return (
    <section className={styles.topNavStyle}>
      <div className={styles.topNav}>
        <div className={styles.topNavDiv}>
          <div>
            <ul className={styles.topNav_list}>
              <li>
                <div className={styles.topNav_logo}>
                  {/* <img src="https://i.hizliresim.com/1ebhqso.png"></img>{" "} */}
                  <img
                    src="/img/logo-vkus.png"
                    className={styles.logoImage}
                  ></img>
                </div>
              </li>
              <li className={styles.adressListLi}>
                <div className={styles.adressList}>
                  <div>
                    <FaLocationDot className={styles.location} />
                  </div>{" "}
                  <div className={styles.adressPart2}>
                    Волгоград, Краснополянская , 78a
                  </div>
                </div>
              </li>
              <li className={styles.whatsappStyleLi}>
                <div className={styles.whatsappStyle}>
                  Задайте вопрос онлайн:
                  <FaWhatsappSquare
                    className={styles.whatsappImage}
                    onClick={handleWhatsAppRedirect}
                  />
                </div>
              </li>
              <li className={styles.contactStyleLi}>
                <div className={styles.contactStyle}>
                  <GoDotFill className={styles.dotsStyle} /> Звоните, Пн - Пт
                  9:00 - 17:00
                  <br />
                  <div >
                    <FaPhoneAlt className={styles.phoneStyle}/>{" "}
                    <span className={styles.phoneStyleText}>
                      +7 (844) 260-90-60 
                    </span>
                  </div>
                </div>
              </li>
              <li className={styles.buttonCall}>
                <div>
                  <button>
                    <FaPhoneAlt /> Перезвоните мне{" "}
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className={styles.line} />
      <div className={styles.Navbarlists}>
        <div>
          <ul className={styles.listOfNav}>
            <Link to="/">
              <li>Главная</li>
            </Link>

            <Link to="/service">
              {" "}
              <li
                onMouseEnter={() => setIsBlog(true)}
                onMouseLeave={() => setIsBlog(false)}
              >
                Услуги <BiChevronDown />
                <div className={isBlog ? "" : "blogPagesLi"}>
                  <div className={styles.uslugiStil}>
                    <ul className={styles.uslugiStilUl}>
                      <li>
                        <Link to="/otkritiye-stolovoy">Открытие столовой</Link>
                      </li>
                      <li>
                        <Link to="/dostavka-pitaniya">Доставка питания</Link>
                      </li>
                      <li>
                        <Link to="/organizachiya-pitaniya-na-predpriyatiya">
                          Организация питания на предприятии
                        </Link>
                      </li>
                      <li>
                        <Link to="/organizachiya-pitaniya-na-sotrudnikov-rabotnikov">
                          Организация питания на работников, сотрудников,
                          персонала
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </Link>

            <Link to="/aboutCompany">
              <li>О компании</li>
            </Link>

            <Link to="/reviews">
              <li>Отзывы</li>
            </Link>

            <Link to="/customers">
              <li>Клиентам</li>
            </Link>

            <Link to="/contacts">
              {" "}
              <li>Контакты </li>
            </Link>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TopNav;
