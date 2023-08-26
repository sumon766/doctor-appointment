// eslint-disable-next-line import/no-extraneous-dependencies
import Slider from "react-slick";
// eslint-disable-next-line import/no-extraneous-dependencies
import "slick-carousel/slick/slick.css";
// eslint-disable-next-line import/no-extraneous-dependencies
import "slick-carousel/slick/slick-theme.css";
import "./doctor_slider.css";

const Doctor = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
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
            <div className="doctor__content__item">
              <div className="doctor__content__item__img">
                <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
              </div>
              <div className="doctor__content__item__text">
                <h3>Dr. JOHN DOE</h3>
                <p>Cardiologist</p>
              </div>
            </div>
            <div className="doctor__content__item">
              <div className="doctor__content__item__img">
                <img src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
              </div>
              <div className="doctor__content__item__text">
                <h3>Dr. JOHN DOE</h3>
                <p>Cardiologist</p>
              </div>
            </div>
            <div className="doctor__content__item">
              <div className="doctor__content__item__img">
                <img src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
              </div>
              <div className="doctor__content__item__text">
                <h3>Dr. JOHN DOE</h3>
                <p>Cardiologist</p>
              </div>
            </div>
            <div className="doctor__content__item">
              <div className="doctor__content__item__img">
                <img src="https://images.unsplash.com/photo-1651008376811-b90baee60c1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9jdG9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
              </div>
              <div className="doctor__content__item__text">
                <h3>Dr. JOHN DOE</h3>
                <p>Cardiologist</p>
              </div>
            </div>
            <div className="doctor__content__item">
              <div className="doctor__content__item__img">
                <img src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
              </div>
              <div className="doctor__content__item__text">
                <h3>Dr. JOHN DOE</h3>
                <p>Cardiologist</p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
