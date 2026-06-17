import React, { useState, useEffect } from "react";
import {
  FaBars,
  FaCog,
  FaSyncAlt,
  FaSignOutAlt,
  FaBell,
  FaHome,
} from "react-icons/fa";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { IoCloseSharp } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { Outlet, Link, useNavigate } from "react-router-dom";
// import { logout, setCredentials } from '../features/auth/authSlice'
import { BiPurchaseTag } from "react-icons/bi";
import logo from "../assets/images/logo.jpg";
import {
  TbLayoutDashboardFilled,
  TbLayoutDashboard,
  TbUserStar,
} from "react-icons/tb";
import { BsTools } from "react-icons/bs";
import {
  MdPayment,
  MdHistory,
  MdOutlineCategory,
  MdOutlineHomeWork,
  MdOutlineRealEstateAgent,
} from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";
import { AiOutlineProduct } from "react-icons/ai";
import { RiAdminLine } from "react-icons/ri";
import { getUserById, logout } from "../features/auth/authSlice";
import { jwtDecode } from "jwt-decode";

const DashboardLayout = () => {
  // Get token from localStorage
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  let userId = null;

  if (token) {
    // Decode token
    const decoded = jwtDecode(token);

    // console.log(decoded);

    // Access user id
    userId = decoded.uuid;

    // console.log("User uuid:", userId);
  }

  // get auth info from the state
  const { user, status, error } = useSelector((state) => state.auth);

  // initialize dispatch
  // const dispatch = useDispatch();

  // dispatch for the actual user
  useEffect(() => {
    if (userId) {
      dispatch(getUserById(userId));
    }
  }, [dispatch, userId]);

  console.log(user);

  const [isOpen, setIsOpen] = useState(false);
  //  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  // Handle logout
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const hasEstate = (user.estate_memberships?.length || 0) > 0;

  return (
    <div className="flex">
      <div
        className={`w-20 md:w-64 bg-[#1B2B3F] transition-with duration-300 text-white
         ${isOpen ? "w-64" : "w-20"}
         `}
      >
        <div className="flex justify-between item-center p-4">
          <div className="flex justify-evenly">
            <Link to={"/"}>
              <img src={logo} alt="safehome logo" className="size-8 me-3" />
            </Link>
            <h2
              className={`text-xl font-bold  text-[#B7C8E1] md:block ${isOpen ? "block" : "hidden"}`}
            >
              SafeHome
            </h2>
          </div>
          <button
            className="block text-[#B7C8E1] md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <IoCloseSharp size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        <nav className="mt-4">
          <ul>
            {/* {hasEstate && ( */}
            <li className="flex items-center p-4 m-3 rounded-lg bg-gray-400 cursor-pointer">
              <TbLayoutDashboardFilled size={24} className="text-[#B7C8E1]" />
              <span
                className={`ml-4 text-[#B7C8E1] md:block ${isOpen ? "block" : "hidden"}`}
              >
                <Link to={"/dashboard"}>Dashboard</Link>
              </span>
            </li>
            {/* )} */}
            {/* Join Estate Link Started */}
            {/* {!hasEstate && ( */}
            <li className="items-center p-4 m-3 rounded-lg">
              {/* <TbLayoutDashboardFilled size={24} className="text-[#B7C8E1]" /> */}
              <span
                className={`ml-4 text-[#B7C8E1] md:block ${isOpen ? "block" : "hidden"}`}
              >
                <p className="text-red-500 font-bold">No estate? click join</p>
                <Link
                  to={"/estates"}
                  className="text-lg font-bold ms-3 text-orange-500"
                >
                  Join
                </Link>
              </span>
            </li>
            {/* )} */}
            {/* Join Estate link ended */}
            {/* {hasEstate && ( */}
            <li className="flex items-center p-4 m-3 rounded-lg cursor-pointer">
              <TbLayoutDashboard size={24} className="text-[#B7C8E1]" />
              {/* <FaUserAlt size={24} /> */}
              <span
                className={`ml-4 text-[#B7C8E1] md:block ${isOpen ? "block" : "hidden"}`}
              >
                <Link to={"landlord"}>Landlords</Link>
              </span>
            </li>
            {/* )} */}

            <li className="flex items-center p-4 m-3 rounded-lg cursor-pointer">
              <MdOutlineRealEstateAgent size={24} className="text-[#B7C8E1]" />
              {/* <FaUserAlt size={24} /> */}
              <span
                className={`ml-4 text-[#B7C8E1] md:block ${isOpen ? "block" : "hidden"}`}
              >
                <Link to={"/estates"}>Estates</Link>
              </span>
            </li>

            {/* {hasEstate && ( */}
            <li className="flex items-center p-4 m-3 rounded-lg cursor-pointer">
              <MdOutlineHomeWork size={24} className="text-[#B7C8E1]" />
              {/* <FaUserAlt size={24} /> */}
              <span
                className={`ml-4 text-[#B7C8E1] md:block ${isOpen ? "block" : "hidden"}`}
              >
                <Link to={"tenant"}>Tenants</Link>
              </span>
            </li>
            {/* )} */}
            {/* {hasEstate && ( */}
            <li className="flex items-center p-4 m-3 rounded-lg cursor-pointer">
              <HiOutlineHomeModern size={24} className="text-[#B7C8E1]" />
              {/* <FaUserAlt size={24} /> */}
              <span
                className={`ml-4 text-[#B7C8E1] md:block ${isOpen ? "block" : "hidden"}`}
              >
                <Link to={"homeowner"}>Homeowner</Link>
              </span>
            </li>
            {/* )} */}
            {/* {hasEstate && ( */}
            <li className="flex items-center p-4 m-3 rounded-lg cursor-pointer">
              <TbUserStar size={24} className="text-[#B7C8E1]" />
              {/* <FaUserAlt size={24} /> */}
              <span
                className={`ml-4 text-[#B7C8E1] md:block ${isOpen ? "block" : "hidden"}`}
              >
                <Link to={"estate-manager"}>Estate Manager</Link>
              </span>
            </li>
            {/* )} */}
            {/* {hasEstate && ( */}
            <li className="flex items-center p-4 m-3 rounded-lg cursor-pointer">
              <RiAdminLine size={24} className="text-[#B7C8E1]" />
              {/* <FaUserAlt size={24} /> */}
              <span
                className={`ml-4 text-[#B7C8E1] md:block ${isOpen ? "block" : "hidden"}`}
              >
                <Link to={"admin"}>Admin Corner</Link>
              </span>
            </li>
            {/* )} */}
            {/* {hasEstate && ( */}
            <li className="flex items-center p-4 m-3 rounded-lg cursor-pointer">
              <BsTools size={24} className="text-[#B7C8E1]" />
              {/* <FaUserAlt size={24} /> */}
              <span
                className={`ml-4 text-[#B7C8E1] md:block ${isOpen ? "block" : "hidden"}`}
              >
                <Link to={"mentenance"}>Mentenance Request</Link>
              </span>
            </li>
            {/* )} */}
            {/* {hasEstate && ( */}
            <li className="flex items-center p-4 m-3 text-[#B7C8E1] cursor-pointer">
              <MdPayment size={24} />
              {/* <FaUserAlt size={24} /> */}
              <span className={`ml-4 md:block ${isOpen ? "block" : "hidden"}`}>
                <Link to={"payment-account"}>Payment Accounts</Link>
              </span>
            </li>
            {/* )} */}
            {/* {hasEstate && ( */}
            <li className="flex items-center p-4 m-3 text-[#B7C8E1] cursor-pointer">
              <IoDocumentText size={24} />
              {/* <FaUserAlt size={24} /> */}
              <span className={`ml-4 md:block ${isOpen ? "block" : "hidden"}`}>
                <Link to={"lease-docs"}>Lease Documents</Link>
              </span>
            </li>
            {/* )} */}
            {/* {hasEstate && ( */}
            <li className="flex items-center p-4 m-3 text-[#B7C8E1] cursor-pointer">
              <FaSyncAlt size={24} />
              {/* <FaUserAlt size={24} /> */}
              <span className={`ml-4 md:block ${isOpen ? "block" : "hidden"}`}>
                <Link to={"set-autoplay"}>Set autopay</Link>
              </span>
            </li>
            {/* )} */}
            {/* {hasEstate && ( */}
            <li className="flex items-center p-4 m-3 text-[#B7C8E1] cursor-pointer">
              <MdHistory size={24} />
              {/* <FaUserAlt size={24} /> */}
              <span className={`ml-4 md:block ${isOpen ? "block" : "hidden"}`}>
                <Link to={"payment-history"}>Payment History</Link>
              </span>
            </li>
            {/* )} */}
            {/* {hasEstate && ( */}
            <li className="flex items-center p-4 m-3 text-[#B7C8E1] cursor-pointer">
              <FaHome size={24} />
              {/* <FaUserAlt size={24} /> */}
              <span className={`ml-4 md:block ${isOpen ? "block" : "hidden"}`}>
                <Link to={"lease-info"}>Lease Information</Link>
              </span>
            </li>
            {/* )} */}
            {/* {user.role == 'admin' &&
        <li className='flex items-center p-4 hover:bg-gray-700 cursor-pointer'>
        <FaUserEdit size={24}/>
        <span className={`ml-4 md:block ${isOpen?"block":"hidden"}`}>
        <Link to={'role'}>User Roles</Link>
         </span>  
      </li> */}
            {/* } */}
            {/* {hasEstate && ( */}
            <li className="flex items-center p-4 m-3 text-[#B7C8E1] cursor-pointer">
              <FaCog size={24} />
              <span className={`ml-4 md:block ${isOpen ? "block" : "hidden"}`}>
                <Link to={"profile-settings"}>Profile Settings</Link>
              </span>
            </li>
            {/* )} */}
            {/* {hasEstate && ( */}
            <li className="flex items-center p-4 m-3 text-[#B7C8E1] cursor-pointer">
              <MdOutlineCategory size={24} />
              <span className={`ml-4 md:block ${isOpen ? "block" : "hidden"}`}>
                <Link to={"manage-category"}>Manage Category</Link>
              </span>
            </li>
            {/* )} */}
            {/* {hasEstate && ( */}
            <li className="flex items-center p-4 m-3 text-[#B7C8E1] cursor-pointer">
              <AiOutlineProduct size={24} />
              <span className={`ml-4 md:block ${isOpen ? "block" : "hidden"}`}>
                <Link to={"manage-products"}>Manage Products</Link>
              </span>
            </li>
            {/* )} */}
            {/* {hasEstate && ( */}
            <li
              className="flex items-center p-4 m-3 text-[#B7C8E1] cursor-pointer"
              onClick={handleLogout}
            >
              <FaSignOutAlt size={24} />
              <span className={`ml-4 md:block ${isOpen ? "block" : "hidden"}`}>
                Logout
              </span>
            </li>
            {/* )} */}
          </ul>
        </nav>
      </div>
      {/* dashboard */}
      <div className="p-8 bg-white min-h-screen flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
