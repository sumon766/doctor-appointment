import React from "react";
import s from "./MainPage.module.scss";
import './SingleDoctorPage.css';

function SingleDoctorPage() {
  return (
    <div className={`${s["main-page"]} row`}>
      <div className={s["side-menu"]}>Menu here</div>
      <div className={s["main-content"]}>
        <div className="single-doctor">
          <div className="single-doctor-img">
            <img src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Doctor" />
          </div>
          <div className="single-doctor-details">
            <div className="doctor-name">
              <h2>Dr. Jane Doe</h2>
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
              <button type="button">
                <i className="fa fa-cog" aria-hidden="true" />
                Reserve
                <i className="fa fa-angle-right" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleDoctorPage;
