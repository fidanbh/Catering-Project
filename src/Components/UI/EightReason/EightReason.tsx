import React, { useState } from "react";
import { MdDone } from "react-icons/md";

import { eightData } from "./EightData";

import styles from "./eightReason.module.scss";
import Button from "../Button/Button";

const EightReason = () => {
  const [datas, setDatas] = useState(eightData);
  return (
    <section className={styles.eightReason}>
      <h1 className={styles.eightTittle}>
        <span className={styles.styleText}>Восемь причин</span> выбрать наши
        услуги
      </h1>

      <div className={styles.eightMenu}>
        <p>Договор с нашей компанией «Вкус Кейтеринг» — это:</p>
        <div className={styles.eightGrid}>
          {datas.map((data) => (
            <div className={styles.eightParts}>
              <div className={styles.numberStyle}>{data.number}</div>
              <div className={styles.textStyle}>
                <p>{data.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.commonMessage}>
          <p>
            <span>
              {" "}
              Все это возможно для мероприятий самого разного формата.
            </span>{" "}
            Нужно только с самого начала сообщить менеджерам необходимую
            информацию — в каком формате проводится праздник, сколько приглашено
            гостей и т.д.
          </p>
        </div>
      </div>
      <div>
        <Button
        openPage={''}
          text={"Оформить заявку"}
          icon={<MdDone />}
          buttonStyle={styles.buttonStyle}
        />
      </div>
    </section>
  );
};

export default EightReason;
