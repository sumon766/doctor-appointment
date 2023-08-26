import React from "react";
import s from "./MainPage.module.scss";
import DoctorPreview from "../DoctorPreview";

const doctors = [
  {
    id: 1,
    name: "Dr. John Doe",
    speciality: "Cardiologist",
    image: "/images/doc1.jpg",
    rating: 4.5,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nu",
  },
  {
    id: 2,
    name: "Dr. Mary Smith",
    speciality: "Dentist",
    image: "/images/doc2.jpg",
    rating: 4.5,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nu",
  },
  {
    id: 3,
    name: "Dr. Susan Lawson",
    speciality: "Neurologist",
    image: "/images/doc3.jpg",
    rating: 4.5,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nu",
  },
  {
    id: 4,
    name: "Dr. Fred William",
    speciality: "Orthopedic",
    image: "/images/doc4.jpg",
    rating: 4.5,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nu",
  },
  {
    id: 5,
    name: "Dr. James Johnston",
    speciality: "Pediatrician",
    image: "/images/doc5.jpg",
    rating: 4.5,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nu",
  },
  {
    id: 6,
    name: "Dr. Lillian Smith",
    speciality: "Psychiatrist",
    image: "/images/doc6.jpg",
    rating: 4.5,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nu",
  },
];

function MainPage() {
  return (
    <div className={s["main-page"]}>
      <div className={s["side-menu"]}>Menu here</div>
      <div className={s["main-content"]}>
        {doctors.map((doc) => (
          <DoctorPreview
            key={doc.id}
            name={doc.name}
            image={doc.image}
            description={doc.description}
          />
        ))}
      </div>
    </div>
  );
}

export default MainPage;
