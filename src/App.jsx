// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PublicLayout from "./layouts/PublicLayout";
import DashboardLayout from "./layouts/DashboardLayout";

// Public pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Listings from "./pages/Listings";
import Services from "./pages/Services";
import GetStarted from "./components/GetStarted";
import Login from "./forms/Login";

// Dashboard pages
// import DashboardHome from "./pages/dashboard/Home";
// import Users from "./pages/dashboard/Users";
// import Settings from "./pages/dashboard/Settings";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/*  Public Website */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="listings" element={<Listings /> } />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="get-started" element={<GetStarted />} />
          <Route path="/login" element={<Login />} />
        </Route>

        {/*  Dashboard */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          {/* <Route index element={<DashboardHome />} />
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<Settings />} /> */}
          {/* <Route path="" */}
        </Route>

      </Routes>
    </BrowserRouter>
  );
}