import { useState } from 'react';
import imagelogo1 from '@/Assets/headerlogo.png'
import watsapImage from '@/Assets/whatsapp.png'
import bellIcon from "@/Assets/bell.png"
import { Link } from '@inertiajs/react';
import backgroundImage from '@/Assets/navbarbg.png';

const NavBar = (auth: any) => {
  const [showMenu, setShowMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [subMenu, setSebMenu] = useState(false);

  const toggleSubMenu = () => {
    setSebMenu(!subMenu)
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <nav className="bg-gray-800" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link href={route('front.index')}>
                <img className="w-52 h-10 object-contain" src={imagelogo1} alt="Logo" />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
                <Link href={route('user.postcar')} className=" text-white font-bold">
                  Post a Car
                </Link>
                <img className='w-7 h-7' src={bellIcon} alt="" />

                <div className="flex items-center">
                  <a href="https://api.whatsapp.com/send?phone=08120222922" className="flex items-center" target="_blank" rel="noopener noreferrer">
                    <img src={watsapImage} className='w-6 h-6 mr-1 ' alt="" />
                    <span className="text-white text-sm">08120222922</span>
                  </a>
                </div>

                <div className="bg-emerald-500 hover:bg-emerald-600">

                  {
                    auth && auth.auth.user ?
                      <button className='px-3 py-2 rounded-md text-white flex' onClick={toggleDropdown}>
                        Dashboard
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mt-1 ml-2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>

                      </button>
                      :
                      <>
                      <div className='m-2'>
                        <Link
                          href={route('user.login')}
                          className="rounded-md justify-content-center text-center text-base font-medium text-white"
                        >
                          Login
                        </Link>
                        <span className='text-white py-2'> / </span>
                        <Link
                          href={route('user.register')}
                          className="rounded-md justify-content-center align-center self-center text-center text-base font-medium text-white"
                        > SignUp
                        </Link>
                        </div>
                      </>
                  }

                  {isOpen && (
                    <div className="absolute mt-1 font-sm bg-white border-1 border-gray-950">
                      <Link
                        href={route('user.editProfile')}
                        className="block px-4 border-b py-1 border-gray-900 text-center text-gray-900"
                      >
                        My Profile
                      </Link>
                      <Link
                        href={route('user.dashboard')}
                        className="block px-3 border-b py-1 border-gray-900 text-center text-gray-900"
                      >
                        My Dashboard
                      </Link>
                      <Link
                        href={route('Logout')}
                        className="block px-2 border-b py-1 border-gray-900 text-center text-gray-900"
                      >
                        Logout
                      </Link>
                    </div>
                  )}
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
              <Link href={route('user.postcar')} className=" block px-3 py-2  text-base font-medium text-white">
                Post a Car
              </Link>
              <img className='block w-7 h-7 ml-3' src={bellIcon} alt="" />
              <div className="flex items-center ml-3 mt-3">
                <a href="https://api.whatsapp.com/send?phone=08120222922" className="flex items-center" target="_blank" rel="noopener noreferrer">
                  <img src={watsapImage} className='w-6 h-6 mr-1 ' alt="" />
                  <span className="text-base font-medium text-white">08120222922</span>
                </a>
              </div>

              {
                auth && auth.auth.user ?
                  <div className=' px-3 mt-3 text-base font-medium text-white cursor-pointer flex' onClick={toggleSubMenu}>
                    Dashboard
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mt-1 ml-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                  :
                  <>
                  <div className='m-3'>
                    <Link
                      href={route('user.login')}
                      className="   text-base font-medium text-white"
                    >
                      LogIn
                    </Link>
                    <span className='px-2 text-white'>/</span>
                    <Link
                      href={route('user.register')}
                      className="  text-base font-medium text-white"
                    >
                      SignUp
                    </Link>
                    </div>
                  </>
              }
              {subMenu && (
                <>
                  <ul className='text-white ml-10 '>
                    <li className='mt-2'>
                      <Link className="hover:text-white" href={route('user.editProfile')}> My Profile</Link>
                    </li>
                    <li className=' mt-2'>
                      <Link className="hover:text-white" href={route('user.dashboard')}>My Dashbaord</Link>
                    </li>
                    <li className='mt-2'>
                      <Link href={route('Logout')} className="hover:text-white" >Logout</Link>
                    </li>
                  </ul>
                </>
              )
              }

            </div>
          </div>
        )
        }
      </nav >
    </div >
  );
};

export default NavBar;


