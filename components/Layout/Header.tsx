import React from "react";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";
import { MdOutlineLocationCity } from "react-icons/md";

const Header = () => {
  const { user } = useUser();
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href={"/"}>
          <div className="flex flex-row">
            <MdOutlineLocationCity size="50" />
            <p className="text-xl font-bold tracking-wide ml-3 mt-3">
              linkChicago
            </p>
          </div>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-sm md:text-base justify-center">
          {user ? (
            <div className="flex items-center space-x-3">
              <Link href="/">
                <a className="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded mt-4 md:mt-0">
                  All Directory
                </a>
              </Link>
              <Link href="/favorites">
                <a className="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded mt-4 md:mt-0">
                  My Favorites
                </a>
              </Link>
              <Link href="/api/auth/logout">
                <a className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded mt-4 md:mt-0">
                  Logout
                </a>
              </Link>
              <img
                alt="profile"
                className="rounded-full w-8 h-8 mt-4  md:mt-0"
                src={user.picture}
              />
            </div>
          ) : (
            <Link href="/api/auth/login">
              <a className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                Login
              </a>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
