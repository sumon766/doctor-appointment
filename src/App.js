/* eslint-disable comma-dangle */
import React from "react";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import Appointment from "./components/appointment/Appointment";
import MainPage from "./components/pages/MainPage";
import SingleDoctorPage from "./components/pages/SingleDoctorPage";
import AddDoctorForm from "./components/doctor/form";
import MyAppointment from "./components/appointment/MyAppointment";
import DeleteDoctor from "./components/navbar/DeleteForm";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/my_appointments" element={<MyAppointment />} />
      <Route path="/delete_doctor" element={<DeleteDoctor />} />

      <Route index element={<MainPage />} />
      <Route path="/add-doctor" element={<AddDoctorForm />} />
      <Route path="/doctors/:id" element={<SingleDoctorPage />} />
      <Route path="/appointment" element={<Appointment />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
