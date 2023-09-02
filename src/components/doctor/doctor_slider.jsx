import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./doctor_slider.css";
import { getDoctorList } from '../../redux/doctor_list_slice';

const Doctor = () => {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.doctorList);
  useEffect(() => {
    dispatch(getDoctorList());
  }, [dispatch]);
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: true,
    speed: 500,
    slidesToShow: list.count > 3 ? 3 : 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: list.count > 2 ? 2 : 1,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="doctor">
      <div className="container">
        <div className="doctor__title">
          <h2>OUR DOCTORS</h2>
          <p>
            Please select a doctor.
          </p>
        </div>
        <div className="doctor__content">
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Slider {...settings}>
            {list.map((item) => (
              <div className="doctor__content__item" key={item.id}>
                <div className="doctor__content__item__img">
                  <img src={item.photo_url} alt="not found" />
                </div>
                <div className="doctor__content__item__text">
                  <h3>
                    <Link to={`/doctors/${item.id}`}>{item.name}</Link>
                  </h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
