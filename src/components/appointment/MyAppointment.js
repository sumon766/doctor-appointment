import React from 'react';
import { list } from 'postcss';
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
          {appointmentlists.map(list)}
          {/* <tr>
            <th>{list.date}</th>
            <th>{list.city}</th>
            <th>{list.doctor_id}</th>
          </tr> */}

        </table>
      </div>

    </div>
  );
}
