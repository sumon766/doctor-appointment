import React from 'react';
import s from './myappointment.module.scss';

export default function MyAppointment() {
  const appointmentlists = [{
    id: 1,
    date: 'Sat, 09 Sep 2023',
    city: "Addis Ababa",
    doctor_id: 'Dr . Joe',
  },
  {
    id: 2,
    date: 'Sat, 09 Sep 2023,',
    city: "Addis Ababa",
    doctor_id: 'Dr. Hope',
  },
  {
    id: 3,
    date: 'Sat, 09 Sep 2023',
    city: "Nairobi",
    doctor_id: 'Dr. Hope',
  }];
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
