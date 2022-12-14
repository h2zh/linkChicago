import React from "react";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";
import { MdOutlineLocationCity } from "react-icons/md";
import { useRouter } from "next/router";

const Header = () => {
  const { user } = useUser();
  const router = useRouter();

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-row items-center justify-center">
        <Link href={"/"}>
          <div className="flex flex-row">
            <MdOutlineLocationCity size="50" />
            <p className="text-xl font-bold tracking-wide mx-3 mt-3">
              linkChicago
            </p>
          </div>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {user ? (
            <div className="flex items-center space-x-3 mt-1">
              <Link href="/">
                <a className="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded">
                  All Links
                </a>
              </Link>
              <a
                onClick={() => {
                  router.push("/favorites");
                }}
                className="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded"
              >
                My Favorites
              </a>
              <Link href="/api/auth/logout">
                <a className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded">
                  Logout
                </a>
              </Link>
              <img
                alt="profile"
                className="rounded-full w-8 h-8"
                src={user.picture}
              />
            </div>
          ) : (
            <div></div>
            // <Link href="/api/auth/login">
            //   <a className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base ml-9 md:mt-0">
            //     Login
            //   </a>
            // </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
