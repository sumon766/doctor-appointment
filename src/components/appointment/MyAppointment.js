import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDoctorList } from '../../redux/doctor_list_slice';
import { fetchAppointment } from '../../redux/appointmentSlice';
import s from './myappointment.module.scss';

export default function MyAppointment() {
  const { appointmentlists, error, loading } = useSelector((state) => state.appointment);
  const { list } = useSelector((state) => state.doctorList);
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDoctorList());
    dispatch(fetchAppointment());
  }, [dispatch]);

  return (
    <div className={s.myappointmentContainer}>
      <div className={s.appontmentsTable}>
        { !loading && !error && (
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>City</th>
                <th>Doctor</th>
              </tr>
            </thead>
            <tbody>
              {
    appointmentlists?.filter((l) => l.user_id === user.id).map((l) => (
      <tr key={l.id}>
        <td>{l.date}</td>
        <td>{l.city}</td>
        <td>{list.find((item) => item.id === l.doctor_id)?.name}</td>
      </tr>
    ))

  }
            </tbody>

          </table>
        )}
      </div>
    </div>
  );
}
