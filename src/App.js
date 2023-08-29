/* eslint-disable comma-dangle */
import React from "react";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import Appointment from "./components/pages/Appointment";
import MainPage from "./components/pages/MainPage";
import SingleDoctorPage from "./components/pages/SingleDoctorPage";
import Appoint from "./components/navbar/Appoint";
import MyAppointment from "./components/navbar/MyAppointment";
import AddDoctor from "./components/navbar/AddDoctor";
import DeleteDoctor from "./components/navbar/DeleteForm";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/my_appointments" element={<MyAppointment />} />
      <Route path="/add_doctor" element={<AddDoctor />} />
      <Route path="/delete_doctor" element={<DeleteDoctor />} />

      <Route path="/appoint" element={<Appoint />} />
      <Route index element={<MainPage />} />
      <Route path="/doctors/:id" element={<SingleDoctorPage />} />
      <Route path="/appointment" element={<Appointment />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
