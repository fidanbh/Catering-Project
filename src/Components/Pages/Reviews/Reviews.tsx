import React from "react";

import styles from "./reviews.module.scss";

const Reviews = () => {
  return (
    <section className={styles.reviewsStyle}>
      <div className={styles.reviewsTittle}>
        <h1>Отзывы</h1>
      </div>
      <div className={styles.reviewsMenu}>
        <span className={styles.reviewsText}>Вы можете оставить свой отзыв:</span>
        <p>Либо отправьте его нам на почту:</p>
        <span>Burda maile unvanlanma olmalidir XXX</span>
      </div>
    </section>
  );
};

export default Reviews;
