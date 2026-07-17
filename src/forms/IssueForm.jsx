import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";
import logo from "../assets/images/logo.jpg";
import { getUserById } from "../features/auth/authSlice";
import { addIssue } from "../features/issue/issueSlice";

const IssueForm = () => {
  const dispatch = useDispatch();

  const [issueData, setIssueData] = useState({
    issue_type: "",
    description: "",
    estate_id: "",
  });

  const token = localStorage.getItem("token");
  let userId = null;

  try {
    if (token) {
      const decoded = jwtDecode(token);
      userId = decoded.uuid;
    }
  } catch (error) {
    console.log(error.message);
  }

  const { user, status, error } = useSelector((state) => state.auth);
  const { issues, IStatus, IError } = useSelector((state) => state.issues);

  useEffect(() => {
    if (userId) {
      dispatch(getUserById(userId));
    }
  }, [dispatch, userId]);

  const onChange = (e) => {
    setIssueData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const issue = {
      ...issueData,
      estate_id: Number(issueData.estate_id),
    };

    // console.log("Submitting:", issue);

    // Uncomment when your slice is ready
    dispatch(addIssue(issue));
  };

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
          {/* Header */}
          <div className="text-center mb-8">
            <img
              src={logo}
              alt="Logo"
              className="my-5 mx-auto h-20 w-20 object-cover"
            />

            <p className="mt-2 text-sm sm:text-base text-gray-600">
              Fill the form to report an issue in your estate
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Estate */}
            <div>
              <label
                htmlFor="estate_id"
                className="block text-sm font-medium text-gray-700"
              >
                Select Estate
              </label>

              <select
                id="estate_id"
                name="estate_id"
                value={issueData.estate_id}
                onChange={onChange}
                required
                className="mt-1 block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
              >
                <option value="">Choose an estate</option>

                {user?.estate_memberships?.map((estate) => (
                  <option key={estate.id} value={estate.estate_id}>
                    {estate.estate_name}
                  </option>
                ))}
              </select>
            </div>

            {/* Issue Type */}
            <div>
              <label
                htmlFor="issue_type"
                className="block text-sm font-medium text-gray-700"
              >
                Issue Type
              </label>

              <input
                type="text"
                id="issue_type"
                name="issue_type"
                value={issueData.issue_type}
                onChange={onChange}
                required
                placeholder="e.g. Power outage"
                className="mt-1 block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
              />
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Describe the issue
              </label>

              <textarea
                id="description"
                name="description"
                value={issueData.description}
                onChange={onChange}
                rows={5}
                required
                placeholder="Describe the issue..."
                className="mt-1 block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 rounded-lg text-white bg-[#223B7E] hover:bg-[#1c326a] transition-colors"
            >
              <span>
                {IStatus === "loading" ? "Reporting..." : " Report the Issue"}
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default IssueForm;
