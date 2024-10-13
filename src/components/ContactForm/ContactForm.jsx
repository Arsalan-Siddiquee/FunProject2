import { FaPhoneAlt } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { Button } from "../Button/Button";
import styles from "./ContactForm.module.css";
import { MdMail } from "react-icons/md";
import { useState } from "react";

const ContactForm = () => {

  const [name, setName] = useState(" ");
  const [email, setEmail] = useState("  ");
  const [text, setText] = useState(" ");


  const onSubmit = (event) => {

    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);

  }


  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
        <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>} />
        <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px"/>} />
        </div>
        <Button
        isOutline={true} text="VIA EMAIL FORM" icon={<MdMail fontSize="24px"/>} />
        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea id="text" name="text"   rows={10}/>
          </div>
          <div style={{
            display: "flex",
            justifyContent : "end",
          }}><Button text="SUBMIT BUTTON"/></div>
          <div>
            Name - {name} <br />
            Email - {email} <br />
            Text - {text}
          </div>

        </form>
      </div>
      <div className={styles.contact_image}></div>
      <img src="./images/contact.jpg" alt="Customer support team" className={styles.image} />
      
    </section>
  );
};

export default ContactForm;