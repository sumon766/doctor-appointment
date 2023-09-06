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

import DoctorsList from "./components/doctor/doctor_list";
import Login from "./components/login/login";
import Register from "./components/login/register";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/my-appointments" element={<MyAppointment />} />
      <Route path="/delete-doctor" element={<DoctorsList />} />
      <Route index element={<MainPage />} />
      <Route path="/add-doctor" element={<AddDoctorForm />} />
      <Route path="/doctors/:id" element={<SingleDoctorPage />} />
      <Route path="/appointment" element={<Appointment />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Route>
  )
);

const App = () => <RouterProvider router={router} />;

export default App;
