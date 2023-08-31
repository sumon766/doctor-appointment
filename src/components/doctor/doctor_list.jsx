import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDoctorList, deleteDoctor } from "../../redux/doctor_list_slice";
import "./doctor_list.scss";

const DoctorsList = () => {
  const { list } = useSelector((state) => state.doctorList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDoctorList());
  }, [dispatch]);

  const hundleDelete = (id) => {
    dispatch(deleteDoctor(id));
    dispatch(getDoctorList());
  };

  return (
    <div className="doctors-list">
      <div className="doctors-list-item">
        <table>
          <thead>
            <tr>
              <th>Photo</th>
              <th>Name</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {list && list.map((doctor) => (
              <tr key={doctor.id}>
                <td>
                  <img src={doctor.photo_url} alt={doctor.photo_url} />
                </td>
                <td>{doctor.name}</td>
                <td>{doctor.description}</td>
                <td><button type="button" onClick={() => hundleDelete(doctor.id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DoctorsList;
