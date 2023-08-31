import React from "react";
import s from "../pages/MainPage.module.scss";
import "./Appointment.css";

function Appointment() {
  const doctorNames = ["John Doe", "Jane Doe", "Dr. Smith", "Dr. Johnson"];
  const cityNames = ["New York", "California", "Alaska", "San Francisco"];

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
            <div className="appointment-form">
              <form className="form">
                <select id="doctor">
                  <option value="">Select a doctor</option>
                  {doctorNames.map((doctor) => (
                    <option key={doctor} value={doctor}>
                      {doctor}
                    </option>
                  ))}
                </select>

                <select id="city">
                  <option value="">Select a city</option>
                  {cityNames.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>

                <input id="date" type="date" name="date" />
                <input id="submit" type="submit" name="submit" value="BOOK NOW" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
