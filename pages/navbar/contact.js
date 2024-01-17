import React, { useState } from "react";
import styles from "@/styles/Contact.module.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = { name, email, phone, desc };
    fetch("http://localhost:3000/api/postcontact", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success: ", data);
        alert("thanks for contacting us!");
        setName("");
        setEmail("");
        setPhone("");
        setDesc("");
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  };

  const handleOnChange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "phone") {
      setPhone(e.target.value);
    } else if (e.target.name === "desc") {
      setDesc(e.target.value);
    }
  };
  return (
    <div className={`${styles.main} ${inter.className} ${styles.container}`}>
      <h1 className={styles.mb3}>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.mb3}>
          <label htmlFor="name" className={`form-lable ${styles.formLable}`}>
            Enter your name here
          </label>
          <input
            required
            value={name}
            onChange={handleOnChange}
            type="text"
            className={`form-control ${styles.input}`}
            id="name"
            name="name"
            aria-describedby="emailHelp"
          />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="email" className={`form-lable ${styles.formLable}`}>
            Enter your email here
          </label>
          <input
            required
            value={email}
            onChange={handleOnChange}
            type="email"
            name="email"
            className={`form-control ${styles.input}`}
            id="email"
          />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="phone" className={`form-lable ${styles.formLable}`}>
            Enter you phone number here
          </label>
          <input
            required
            value={phone}
            onChange={handleOnChange}
            type="phone"
            name="phone"
            className={`form-control ${styles.input}`}
            id="phone"
          />
        </div>
        <div className={styles.mb3}>
          <label className={`form-lable ${styles.formLable}`} htmlFor="desc">
            Elaborate your concern
          </label>
          <textarea
            required
            onChange={handleOnChange}
            className={`form-control ${styles.input}`}
            id="desc"
            name="desc"
            value={desc}
          ></textarea>
        </div>
        <button type="submit" className={styles.btn}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
