import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { getDoctorList, deleteDoctor } from "../../redux/doctor_list_slice";
import "./doctor_list.scss";

const DoctorsList = () => {
  const { list } = useSelector((state) => state.doctorList);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDoctorList());
  }, [dispatch]);

  const hundleDelete = async (id) => {
    if (!user) {
      return toast.error("You must be authenticated to perform this action!");
    }
    await dispatch(deleteDoctor(id));
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
            {list?.map((doctor) => (
              <tr key={doctor.id}>
                <td>
                  <img src={doctor.photo_url} alt="" />
                </td>
                <td>{doctor.name}</td>
                <td>{doctor.description}</td>
                <td>
                  <button type="button" onClick={() => hundleDelete(doctor.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DoctorsList;
