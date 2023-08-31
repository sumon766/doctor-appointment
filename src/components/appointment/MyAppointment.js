import React from 'react';
import s from './myappointment.module.scss';

export default function MyAppointment() {
  // const appointmentlists = [{
  //   id: 1,
  //   date: 'Sat, 09 Sep 2023',
  //   city: "Addis Ababa",
  //   doctor_id: 'Dr . Joe',
  // },
  // {
  //   id: 2,
  //   date: 'Sat, 09 Sep 2023,',
  //   city: "Addis Ababa",
  // },
  // {
  //   id: 3,
  //   date: 'Sat, 09 Sep 2023',
  //   city: "Nairobi",
  //   doctor_id: 'Dr. Hope',
  // }];
  return (
    <div className={s.myappointmentContainer}>
      <div className={s.appontmentsTable}>
        <table>
          <tr>
            <th>Date</th>
            <th>City</th>
            <th>Doctor</th>
          </tr>
          <tr>
            <td>Data 1A</td>
            <td>Data 1B</td>
            <td>Data 1C</td>
          </tr>
          <tr>
            <td>Data 1A</td>
            <td>Data 1B</td>
            <td>Data 1C</td>
          </tr>
          <tr>
            <td>Data 1A</td>
            <td>Data 1B</td>
            <td>Data 1C</td>
          </tr>
          <tr>
            <td>Data 1A</td>
            <td>Data 1B</td>
            <td>Data 1C</td>
          </tr>
        </table>
      </div>

    </div>
  );
}
