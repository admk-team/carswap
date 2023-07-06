import { useState } from 'react';
import imagelogo1 from '@/Assets/logo 111.png'
import watsapImage from '@/Assets/whatsapp.png'
import bellIcon from "@/Assets/bell.png"

const NavBar2 = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
    <nav className=" border-b border-black ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img className="" src={imagelogo1} alt="Logo" />
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <a className=" font-black font-extrabold">
                Post a Car
              </a>
             <img className='w-7 h-7' src={bellIcon} alt="" />
              <div className="flex items-center text-white bg-gray-900 px-3 py-2">
                <span className="w-7 h-7 mr-1"><img src={watsapImage} alt="" /></span>
                <span className="text-white text-sm">07031555235</span>
              </div>
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-amber-600">
                {/* Mobile menu items */}
                <a
                  href="#"
                  className="px-3 py-2 rounded-md text-base font-medium text-white"
                >
                  LogIn/SignUp
                </a>

              </div>
            </div>

          </div>
          <div className="md:hidden">
            <button
              className="mobile-menu-button p-2 rounded-md inline-flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              onClick={toggleMenu}
            >
              {showMenu ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {showMenu && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* Mobile menu items */}
            <a className=" block px-3 py-2 text-base font-medium bg-gray-900 text-white font-bold ">
                Post a Car
              </a>
             <div className="px-3 py-2 flex items-center font-medium text-white bg-gray-900">
                <span className="block w-7 h-7 mr-1"><img src={bellIcon} alt="" /></span>
                <span className="text-white mt-2 text-sm"></span>
              </div>
              <div className="px-3 py-2 flex items-center font-medium text-white bg-gray-900">
                <span className="block mt-2 w-6 h-6 mr-1"><img src={watsapImage} alt="" /></span>
                <span className="text-white mt-2 text-sm">07031555235</span>
              </div>
            <a
              href="#"
              className="block px-3 py-2  text-base font-medium text-white bg-gray-900"
            >
              Login
            </a>
            <a
              href="#"
              className="block px-3 py-2  text-base font-medium text-white bg-gray-900"
            >
              Signup
            </a>
          </div>
        </div>
      )}
    </nav>
    </>
  );
};

export default NavBar2;