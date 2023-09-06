import React from "react";
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
import s from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={`${s["footer-content"]} row`}>
      <span className={s["social-links"]}>
        <BsFacebook className={s.icon} />
        <BsTwitter className={s.icon} />
        <BsLinkedin className={s.icon} />
      </span>
    </footer>
  );
}
