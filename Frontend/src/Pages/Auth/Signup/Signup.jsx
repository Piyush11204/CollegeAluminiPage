import React, { useState, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    fullname: "",
    education: "",
    location: "",
    yearOfPassout: "",
    profession: "",
    phone: "",
    password: "",
    profile: "",
    coverImage: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


















  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []); // The empty array ensures this runs only once when the component mounts







  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Signup data:", formData);
    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/users/register",
        formData
      );
      console.log(res);
      localStorage.setItem("userId", res.data.date.userId);
      // window.location = "/";
      toast.success(res.data.message);
      setShowOtpModal(true);
    } catch (err) {
      toast.error(err.response.data.messagetext);
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    try {
      const userId = localStorage.getItem("userId");
      const res = await axios.post(
        "http://localhost:8000/api/v1/users/verifyOtp",
        { userId, otp }
      );
      console.log(res);
      toast.success("OTP verified successfully!");
      setShowOtpModal(false);
      navigate("/login");
      localStorage.removeItem("userId");
    } catch (err) {
      toast.error("OTP verification failed. Please try again.");
    }
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-200 py-12 sm:px-6 lg:px-8 ">
        <div className="border rounded-xl shadow-2xl bg-[#ede8f5]">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-black">
              Create a new account
            </h2>
          </div>

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-xl">
            <div className=" py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="flex flex-row justify-evenly gap-10">
                  <div>
                    <div>
                      <label
                        htmlFor="username"
                        className="block text-sm font-medium text-black"
                      >
                        Username
                      </label>
                      <div className="mt-1">
                        <input
                          id="username"
                          name="username"
                          type="text"
                          required
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          value={formData.username}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-black"
                      >
                        Email address
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="fullname"
                        className="block text-sm font-medium text-black"
                      >
                        Full Name
                      </label>
                      <div className="mt-1">
                        <input
                          id="fullname"
                          name="fullname"
                          type="text"
                          required
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          value={formData.fullname}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="education"
                        className="block text-sm font-medium text-black"
                      >
                        Education
                      </label>
                      <div className="mt-1">
                        <input
                          id="education"
                          name="education"
                          type="text"
                          required
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          value={formData.education}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="location"
                        className="block text-sm font-medium text-black"
                      >
                        Location
                      </label>
                      <div className="mt-1">
                        <input
                          id="location"
                          name="location"
                          type="text"
                          required
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          value={formData.location}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="yearOfPassout"
                        className="block text-sm font-medium text-black"
                      >
                        Year of Passout
                      </label>
                      <div className="mt-1">
                        <input
                          id="yearOfPassout"
                          name="yearOfPassout"
                          type="text"
                          required
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          value={formData.yearOfPassout}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <label
                        htmlFor="profession"
                        className="block text-sm font-medium text-black"
                      >
                        Profession
                      </label>
                      <div className="mt-1">
                        <input
                          id="profession"
                          name="profession"
                          type="text"
                          required
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          value={formData.profession}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-black"
                      >
                        Phone
                      </label>
                      <div className="mt-1">
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-black"
                      >
                        Password
                      </label>
                      <div className="mt-1 relative">
                        <input
                          id="password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          autoComplete="new-password"
                          required
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          value={formData.password}
                          onChange={handleChange}
                        />
                        <button
                          type="button"
                          className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                          onClick={togglePasswordVisibility}
                        >
                          {showPassword ? (
                            <EyeOff className="h-5 w-5 text-gray-500" />
                          ) : (
                            <Eye className="h-5 w-5 text-gray-500" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="profile"
                        className="block text-sm font-medium text-black"
                      >
                        Profile Picture URL
                      </label>
                      <div className="mt-1">
                        <input
                          id="profile"
                          name="profile"
                          type="text"
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          value={formData.profile}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="coverImage"
                        className="block text-sm font-medium text-black"
                      >
                        Cover Image URL
                      </label>
                      <div className="mt-1">
                        <input
                          id="coverImage"
                          name="coverImage"
                          type="text"
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          value={formData.coverImage}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="mt-6">
                      <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Sign up
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {showOtpModal && (
          <div
            className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
            id="my-modal"
          >
            <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
              <div className="mt-3 text-center">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Enter OTP
                </h3>
                <div className="mt-2 px-7 py-3">
                  <p className="text-sm text-gray-500">
                    We've sent an OTP to your email. Please enter it below to
                    verify your account.
                  </p>
                  <input
                    type="text"
                    className="mt-4 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter OTP"
                  />
                </div>
                <div className="items-center px-4 py-3">
                  <button
                    id="ok-btn"
                    className="px-4 py-2 bg-indigo-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    onClick={handleOtpSubmit}
                  >
                    Verify OTP
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </>
  );
};

export default Signup;
