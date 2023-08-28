import React from "react";
import s from "./MainPage.module.scss";
import "./Appointment.css";

function Appointment() {
  return (
    <div className={`${s["main-page"]} row`}>
      <div className={s["side-menu"]}>Menu here</div>
      <div className={s["main-content"]}>
        <div>Appointment page</div>
      </div>
    </div>
  );
}

export default Appointment;
