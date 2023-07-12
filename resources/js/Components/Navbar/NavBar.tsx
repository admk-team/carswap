import { useState } from 'react';
import imagelogo1 from '@/Assets/headerlogo.png'
import watsapImage from '@/Assets/whatsapp.png'
import bellIcon from "@/Assets/bell.png"
import { Link } from '@inertiajs/react';

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link  href={route('front.index')}>
              <img className="w-52 h-10 object-contain" src={imagelogo1} alt="Logo" />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <a className=" text-white font-bold ">
                Post a Car
              </a>
             <img className='w-7 h-7' src={bellIcon} alt="" />
              <div className="flex items-center">
                <span className="w-6 h-6 mr-1"><img src={watsapImage} alt="" /></span>
                <span className="text-white text-sm">07031555235</span>
              </div>
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-emerald-500 hover:bg-emerald-600">
                {/* Mobile menu items */}
                <a
                 href={route('user.login')}
                  className="px-3 py-2 rounded-md text-base font-medium text-white"
                >
                  Login/SignUp
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
            <a className=" block px-3 py-2  text-base font-medium text-white bg-gray-900text-white font-bold ">
                Post a Car
              </a>
             <img className='block   w-7 h-7' src={bellIcon} alt="" />
              <div className="flex items-center">
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
    </div>
  );
};

export default NavBar;
