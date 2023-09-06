/* eslint-disable react/prop-types */
import React from "react";
import s from "./DoctorPreview.module.scss";

const DoctorPreview = (props) => {
  const { name, image, description } = props;
  return (
    <div className={s.preview}>
      <div className={s["preview-image"]}>
        <img src={image || ""} alt={name} />
      </div>
      <div className={s.details}>
        <h4>{name}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default DoctorPreview;
