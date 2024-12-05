import React, { useState, useContext } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../../context/userContext.jsx';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user, setUser, logout } = useContext(UserContext);

  const [showButton, setShowButton] = useState(false);

  const handleClick = () => {
    setShowButton(!showButton); // Toggle button visibility
  };

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <nav className="bg-gray-800 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center gap-2 cursor pointer">
              <span className='text-blue-300 text-center font-bold'>LegacyNet</span>
              <span className="text-xl font-bold"><img src='/vcetlogo.png' className='w-12 h-12'/></span>
            </NavLink>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink to="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Home</NavLink>
                {/* <div className="relative">
                  <button onClick={toggleDropdown} className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 flex items-center">
                    Services
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  {isDropdownOpen && (
                    <div className="absolute z-10 left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Service 1</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Service 2</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Service 3</a>
                      </div>
                    </div>
                  )}
                </div> */}
                <NavLink to="/contributearticle" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Contribute Articles</NavLink>
                <NavLink to="/contribution" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Donation</NavLink>
                <NavLink to="/aluminilist" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Search Alumini</NavLink>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
          {user ? (
                <div className="flex justify-center items-center gap-4 " onClick={handleClick}>
                  <div className="">
                    <div
                      className="flex justify-center items-center border rounded-full w-10 h-10 cursor-pointer"
                      
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        width="20px"
                        fill='white'
                      >
                        <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z" />
                      </svg>
                    </div>

                    {showButton && (
                      <div className="absolute bg-white p-5 rounded-xl flex text-center justify-center z-50">
                        <button className="text-red-500" onClick={logout}>
                          Logout
                        </button>
                      </div>
                    )}
                  </div>
                  <h1>Hello!! {user.fullname}.</h1>
                </div>

              ):(
            <div className="ml-4 flex items-center md:ml-6">
              <NavLink to="/login" className="bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded-md text-sm font-medium">Login</NavLink>
              <NavLink to="/signup" className="bg-blue-600 hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium ml-2">Sign up</NavLink>
            </div>
            )
          }
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Home</a>
            <button onClick={toggleDropdown} className="w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 flex items-center justify-between">
              Services
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {isDropdownOpen && (
              <div className="pl-4">
                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Service 1</a>
                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Service 2</a>
                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Service 3</a>
              </div>
            )}
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">About</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Contact</a>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="flex items-center text-center px-5">
              <NavLink to="/login" className="bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded-md text-base font-medium w-full">Login</NavLink>
            </div>
            <div className="mt-3 flex items-center text-center px-5">
              <NavLink className="bg-blue-600 hover:bg-blue-500 px-3 py-2 rounded-md text-base font-medium w-full">Sign up</NavLink>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;