'use client';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import React, { useState, useEffect, useRef } from 'react';
import Dashboard from './Dashboard';

const Navbar = () => {
  const { data: session, status } = useSession();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  const handleLogout = () => {
    if (confirm('Are you sure you want to log out?')) {
      signOut();
    }
  };

  if (status === 'loading') {
    return <div>Loading...</div>; // Show a loader while session is being fetched
  }

  const renderButtons = () => {
    if (session) {
      return (
        <div className="relative flex items-center gap-4">
          {/* Dropdown Button */}
          <button
            onClick={toggleDropdown}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center"
            type="button"
          >
            Welcome {session.user.email}
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          {/* Dropdown Menu */}
          {showDropdown && (
            <div
              ref={dropdownRef}
              className="absolute right-0 mt-2 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              style={{ top: '100%' }} // Position directly below the button
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <Link href="/dashboard">
                    <div className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Dashboard
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/Username">
                    <div className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      My Profile
                    </div>
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Sign out
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      );
    } else {
      return (
        <Link href="/login">
          <button
            className="text-white bg-gradient-to-br from-blue-600 to-green-500 hover:bg-gradient-to-bl font-medium rounded-lg text-lg px-6 py-1 text-center transition-transform duration-300 hover:scale-105"
            aria-label="Login"
          >
            Login
          </button>
        </Link>
      );
    }
  };

  return (
    <nav className="bg-blue-950 text-white flex justify-between items-center px-4 h-14">
      {/* Add Link for home page navigation */}
      <Link href="/">
        <div className="logo font-bold text-lg cursor-pointer">GetmeaCoffee! 🍵</div>
      </Link>
      <div>{renderButtons()}</div>
    </nav>
  );
};

export default Navbar;
