import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import icon from "./Photos/icon.png";
export default function Navbar() {
  const [isMobile, setMobileMenuOpen] = useState(true);
  return (
    <>
      <nav className="bg-gray-800 flex sticky top-0 z-10 select-none">
        <div className="w-full px-4">
          <div className="relative flex items-center h-16">
            <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
              <button
                onClick={() => {
                  setMobileMenuOpen(!isMobile);
                }}
                type="button"
                className="inline-flex items-center justify-center p-1 rounded-xl bg-gray-800 border-4 border-gray-500 appearance-none"
              >
                {/* Open Button */}
                <svg
                  className={`${isMobile ? "block" : "hidden"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>

                {/* Close(X) Button */}
                <svg
                  className={`${isMobile ? "hidden" : "block"} h-6 w-6 `}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* DeskTop Menu */}
            <div className="flex-1 flex items-center justify-center sm:items-stretch md:justify-start md:items-center">
              <div className="flex-shrink-0">
                <Link
                  to="/GV-NEWS/"
                  className="text-white m-auto text-2xl flex justify-center items-center font-bold leading-none"
                >
                  <img
                    src={icon}
                    alt="icon"
                    className="w-10 pr-1 hover:animate-spin"
                  />
                  GV NEWS
                </Link>
              </div>

              <div className="hidden sm:block sm:ml-2">
                <div className="flex md:space-x-0 space-x-4 max-md:hidden">
                  <Link
                    to="/GV-NEWS/home"
                    className="text-gray-300 hover:bg-gray-700
                    hover:text-white px-3 py-2 rounded-md text-base font-medium
                    type"
                  >
                    Home
                  </Link>

                  <Link
                    to="/GV-NEWS/entertainment"
                    className="text-gray-300 hover:bg-gray-700
                    hover:text-white px-3 py-2 rounded-md text-base font-medium
                    type"
                  >
                    Entertainment
                  </Link>

                  <Link
                    to="/GV-NEWS/politics"
                    className="text-gray-300 hover:bg-gray-700
                    hover:text-white px-3 py-2 rounded-md text-base font-medium
                    type"
                  >
                    Politics
                  </Link>
                  <Link
                    to="/GV-NEWS/business"
                    className="text-gray-300 hover:bg-gray-700
                    hover:text-white px-3 py-2 rounded-md text-base font-medium
                    type"
                  >
                    Business
                  </Link>
                  <Link
                    to="/GV-NEWS/technology"
                    className="text-gray-300 hover:bg-gray-700
                    hover:text-white px-3 py-2 rounded-md text-base font-medium
                    type"
                  >
                    Technology
                  </Link>
                  <Link
                    to="/GV-NEWS/science"
                    className="text-gray-300 hover:bg-gray-700
                    hover:text-white px-3 py-2 rounded-md text-base font-medium
                    type"
                  >
                    Science
                  </Link>
                  <Link
                    to="/GV-NEWS/health"
                    className="text-gray-300 hover:bg-gray-700
                    hover:text-white px-3 py-2 rounded-md text-base font-medium
                    type"
                  >
                    Health
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <button
                className="max-md:px-4 md:px-3 ml-1 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg focus:outline-none"
                title="Coming Soon"
              >
                Login
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden" id="mobile-menu">
            <div
              className={`px-2 pt-2 pb-3 space-y-1 border-t-2 border-gray-500 ${
                isMobile ? "hidden" : "null"
              }`}
            >
              <Link
                to="/GV-NEWS/home"
                className="text-gray-300 hover:bg-gray-700
                hover:text-white block px-3 py-2 rounded-md text-base
                font-medium"
              >
                Home
              </Link>
              <Link
                to="/GV-NEWS/entertainment"
                className="text-gray-300 hover:bg-gray-700
                hover:text-white block px-3 py-2 rounded-md text-base
                font-medium"
              >
                Entertainment
              </Link>
              <Link
                to="/GV-NEWS/politics"
                className="text-gray-300 hover:bg-gray-700
                hover:text-white block px-3 py-2 rounded-md text-base
                font-medium"
              >
                Politics
              </Link>
              <Link
                to="/GV-NEWS/business"
                className="text-gray-300 hover:bg-gray-700
                hover:text-white block px-3 py-2 rounded-md text-base
                font-medium"
              >
                Business
              </Link>
              <Link
                to="/GV-NEWS/technology"
                className="text-gray-300 hover:bg-gray-700
                hover:text-white block px-3 py-2 rounded-md text-base
                font-medium"
              >
                Technology
              </Link>
              <Link
                to="/GV-NEWS/science"
                className="text-gray-300 hover:bg-gray-700
                hover:text-white block px-3 py-2 rounded-md text-base
                font-medium"
              >
                Science
              </Link>
              <Link
                to="/GV-NEWS/health"
                className="text-gray-300 hover:bg-gray-700
                hover:text-white block px-3 py-2 rounded-md text-base
                font-medium"
              >
                Health
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
}
