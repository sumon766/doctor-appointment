import React from "react";
import s from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer>
      <div className={`${s["footer-content"]} row`}>
        <span>Footer</span>
      </div>
    </div>
  );
}
