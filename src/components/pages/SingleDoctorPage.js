import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import s from "./MainPage.module.scss";
import './SingleDoctorPage.css';
import { addAppointment } from "../../redux/appointmentSlice";

function SingleDoctorPage() {
  const { id } = useParams();
  const [doctorData, setDoctorData] = useState(null);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const cityNames = ["New York", "California", "Alaska", "San Francisco"];


  const randomIndex = Math.floor(Math.random() * cityNames.length);
  const randomCity = cityNames[randomIndex];

  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/doctors/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setDoctorData(data);
      });
  }, [id]);
  const handleClick = () => {
    dispatch(addAppointment({
      user_id: user.id, doctor_id: parseFloat(id), city: randomCity, date: new Date()
    }));
  };

  return (
    <div className={`${s["main-page"]} row`}>
      <div className={s["side-menu"]}>Menu here</div>
      <div className={s["main-content"]}>
        {doctorData ? (
          <div className="single-doctor">
            <div className="single-doctor-img">
              <img src={doctorData.photo_url || ""} alt={doctorData.name} />
            </div>
            <div className="single-doctor-details">
              <div className="doctor-name">
                <h2>{doctorData.name}</h2>
                <p>$5 deposit on any doctor reservation</p>
              </div>
              <div className="purchase-fee-details">
                <div>
                  <p>Finance Fee</p>
                  <p>$120</p>
                </div>
                <div>
                  <p>Option to purchase fee</p>
                  <p>$240</p>
                </div>
                <div>
                  <p>Total amount payable</p>
                  <p>$9870</p>
                </div>
                <div>
                  <p>Duration</p>
                  <p>48 months</p>
                </div>
              </div>
              <div className="representative-fee">
                <p><b>5.9% APR Representative</b></p>
              </div>
              <div className="discover-more">
                <a href="https://github.com/">
                  DISCOVER MORE MODELS
                  <i className="fa fa-angle-right" aria-hidden="true" />
                </a>
              </div>
              <div className="reserve-button">
                <button type="button" onClick={handleClick}>
                  <i className="fa fa-cog" aria-hidden="true" />
                  Reserve
                  <i className="fa fa-angle-right" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default SingleDoctorPage;
