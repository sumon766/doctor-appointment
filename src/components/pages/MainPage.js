import React from "react";
import s from "./MainPage.module.scss";
import Doctor from "../doctor/doctor_slider";

function MainPage() {
  return (
    <div className={`${s["main-page"]} row`}>
      <div className={s["side-menu"]} />
      <div className={s["main-content"]}>
        <Doctor />
      </div>
    </div>
  );
}

export default MainPage;
