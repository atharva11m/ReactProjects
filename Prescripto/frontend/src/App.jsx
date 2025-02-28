import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Doctors from "./pages/doctors";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Myprofile from "./pages/Myprofile";
import MyAppointments from "./pages/MyAppointments";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/doctors" element={<Doctors></Doctors>}></Route>
        <Route
          path="/doctors/:speciality"
          element={<Doctors></Doctors>}
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/my-profile" element={<Myprofile></Myprofile>}></Route>
        <Route
          path="/my-appointments"
          element={<MyAppointments></MyAppointments>}
        ></Route>
        <Route
          path="/appointment/:docId"
          element={<MyAppointments></MyAppointments>}
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
