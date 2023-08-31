import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAppointment } from '../../redux/appointmentSlice';
import s from './myappointment.module.scss';

export default function MyAppointment() {
  const { appointmentlists } = useSelector(((state) => state.appointment));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAppointment());
    console.log(appointmentlists);
  }, [dispatch]);
  return (
    <div className={s.myappointmentContainer}>
      <div className={s.appontmentsTable}>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>City</th>
              <th>Doctor</th>
            </tr>
          </thead>
          <tbody>
            {appointmentlists.map((list) => (
              <tr key={list.id}>
                <td>{list.date}</td>
                <td>{list.city}</td>
                <td>{list.doctor_id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
