import React from "react";
import s from "./MainPage.module.scss";
import "./Appointment.css";

function Appointment() {
  return (
    <div className={`${s["main-page"]} row`}>
      <div className={s["side-menu"]} />
      <div className={s["main-content"]}>
        <div className="appointment">
          <div className="foreground-color" />
          <div className="appointment-content">
            <h2>BOOK A DOCTOR NOW</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centuries,
              but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
