import React, { useState } from "react";

import emailjs from "emailjs-com";

import {
  AiOutlineArrowLeft,
  AiFillStar,
  AiFillCloseCircle,
} from "react-icons/ai";

import { MdClose } from "react-icons/md";
import InputMask from "react-input-mask";

interface IModalPage {
  open?: boolean;
  clickClose?: () => void;
}

import styles from "./sendReview.module.scss";
const SendReview: React.FC<IModalPage> = ({ open, clickClose }) => {
  // const [name, setName] = useState("");

  // const handleSubmit = (event) => {
  //   // event.preventDefault();
  //   // alert(`The name you entered was: ${name}`);
   
  // };
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Handle form submission logic here
  //   // For example, you can update state variables or perform other actions
  //   console.log("Name:", name);
  //   console.log("Phone:", phone);
  //   // Then you can proceed with sending the email
  //   handleEmailClick();
  // };

  // const emailAddress = 'example@example.com';
  // const subject = 'Subject of the email';
  // const body = 'Body of the email';

  // const handleEmailClick = () => {
  //   window.location.href = `mailto:${'fidaska3@gmail.com'}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  // };
  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     await axios.post("/send-email", {
  //       to: "fidaska3@gmail.com",
  //       subject: "New Contact Form Submission",
  //       body: `Name: ${name}\nPhone: ${phone}`,
  //     });
  //     alert("Email sent successfully!");
  //   } catch (error) {
  //     console.error("Error sending email:", error);
  //     alert("Error sending email. Please try again later.");
  //   }
  // };
  const handleSubmit = (event) => {
    event.preventDefault();  

    // emailjs.send("service_48zeulp", "template_oakylee", 
    emailjs.send("hlXa2blYXhQguoNWoGHrC", "template_oakylee",{
      to_email: "fidaska3@gmail.com",
      subject: "New Contact Form Submission",
      body: `Name: ${name}\nPhone: ${phone}`,
    })
    .then((response) => {
      console.log("Email sent successfully:", response);
      alert("Email sent successfully!");
    })
    .catch((error) => {
      console.error("Error sending email:", error);
      alert("Error sending email. Please try again later.");
    });
  };
  return (
    <>
      {!!open && (
        <div className={styles.modal}>
          <div className={styles.modalSecond}>
            <div className={styles.closeBtn}>
              <MdClose className={styles.modal_close} onClick={clickClose} />
            </div>
            <div>
              <div>
                <h2 className={styles.tittleText}>Отправьте заявку</h2>
              </div>
              <div>
                <form onSubmit={handleSubmit}>
                  <label htmlFor="text">Ваше имя:</label>
                  <br />
                  <InputMask
                    // mask="Как к вам обращаться?"
                    // placeholder="Как к вам обращаться?"
                    // id="text"
                    // name="text"
                    // type="text"
                    // value={handleSubmit(event)}
                    // className={styles.inputStyle}
                    // mask="a******************"
                    mask=""
                    placeholder="Как к вам обращаться?"
                    id="name"
                    name="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={styles.inputStyle}
                  />
                  <br />
                  <label htmlFor="phone" >Ваш телефон:</label>
                  <br />
                  <InputMask
                    // mask="+7 (999) 999-99-99"
                    // placeholder="+7 (___) ___-__-__"
                    // id="phone"
                    // name="phone"
                    // className={styles.inputStyle}
                    mask="+7 (999) 999-99-99"
                    placeholder="+7 (___) ___-__-__"
                    id="phone"
                    name="phone"
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={styles.inputStyle}
                  />
                  <br />
                  <input type="submit" value="Отправить" className={styles.inputSubmit}/>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SendReview;
