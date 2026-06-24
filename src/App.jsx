import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
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
import SignUp from "./forms/SignUp";

// Dashboard components
import Dashboard from "./components/Dashboard";
import LeaseDocs from "./components/LeaseDocs";
import LeaseInfo from "./components/LeaseInfo";
import Mentenance from "./components/Mentenance";
import PaymentAccount from "./components/PaymentAccount";
import PaymentHistory from "./components/PaymentHistory";
import ProfileSettings from "./components/ProfileSettings";
import SetAutoplay from "./components/SetAutoplay";
import ConfirmPayment from "./components/ConfirmPayment";
import PaymentSuccess from "./components/PaymentSuccess";
import PaymentDeclined from "./components/PaymentDeclined";
import GetCategories from "./manageCat/GetCategories";
import GetProducts from "./manageProd/GetProducts";
import EditProduct from "./forms/EditProduct";
import PropertyDetailPage from "./components/PropertyDetailPage";
import PropertyCard from "./components/PropertyCard";
import Estates from "./components/Estates";

// Dashboards
import Landlords from "./dashboards/Landlords";
import Tenant from "./dashboards/Tenant";
import Homeowner from "./dashboards/Homeowner";
import Admin from "./dashboards/Admin";
import EstateManager from "./dashboards/EstateManager";
import CreateEstateForm from "./forms/CreateEstateForm";
import AssignPermission from "./dashboards/AssignPermission";
import UserRoles from "./dashboards/UserRoles";
import EditEstateForm from "./forms/EditEstateForm";

// Notifications
import { useNotificationSocket } from "./sockets/useNotificationSocket";
import { useNotificationInit } from "./sockets/useNotificationInit";
import { connectSocket } from "./sockets/socket";
import { useEffect } from "react";
import NotificationPage from "./dashboards/NotificationPage";
import EstateMemberApproval from "./dashboards/EstateMemberApproval";
import PropertyForm from "./forms/PropertyForm";

/**
 * ✅ GLOBAL PROVIDER
 */
function AppProviders() {
  // connect socket first
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    connectSocket(token);
  }, []);

  // then attach listeners
  useNotificationSocket();

  // then load initial data
  useNotificationInit();

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      {/* GLOBAL SOCKET + NOTIFICATIONS */}
      <AppProviders />

      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="listings" element={<Listings />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="get-started" element={<GetStarted />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="edit/:id" element={<EditProduct />} />
          <Route path="detail/:id" element={<PropertyDetailPage />} />
          <Route path="procard" element={<PropertyCard />} />
          <Route path="estates" element={<Estates />} />
        </Route>

        {/* DASHBOARD ROUTES */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="lease-docs" element={<LeaseDocs />} />
          <Route path="lease-info" element={<LeaseInfo />} />
          <Route path="mentenance" element={<Mentenance />} />
          <Route path="payment-account" element={<PaymentAccount />} />
          <Route path="payment-history" element={<PaymentHistory />} />
          <Route path="profile-settings" element={<ProfileSettings />} />
          <Route path="set-autoplay" element={<SetAutoplay />} />
          <Route path="confirm-payment" element={<ConfirmPayment />} />
          <Route path="payment-success" element={<PaymentSuccess />} />
          <Route path="payment-decline" element={<PaymentDeclined />} />
          <Route path="manage-category" element={<GetCategories />} />
          <Route path="manage-products" element={<GetProducts />} />
          <Route path="landlord" element={<Landlords />} />
          <Route path="tenant" element={<Tenant />} />
          <Route path="homeowner" element={<Homeowner />} />
          <Route path="estate-manager" element={<EstateManager />} />
          <Route path="create-estate" element={<CreateEstateForm />} />
          <Route path="admin" element={<Admin />} />
          <Route path="assign-permission" element={<AssignPermission />} />
          <Route path="user-role" element={<UserRoles />} />
          <Route path="edit-estate/:id" element={<EditEstateForm />} />
          <Route path="notifications" element={<NotificationPage />} />
          <Route path="property-form" element={<PropertyForm />} />
          <Route
            path="estate-member-approval"
            element={<EstateMemberApproval />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
