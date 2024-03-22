import React from "react";
import { Link } from "react-router-dom";

function NavLinks() {
  return (
    <>
      <div className="flex space-x-2 md:space-x-6">
        <li>
          <Link
            className="hover:bg-primary hover:rounded hover:py-2 hover:px-2 hover:font-bold hover:text-white hover:scale-75 transition-all"
            to="/Little-Lemon"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="hover:bg-primary hover:rounded hover:py-2 hover:px-2 hover:font-bold hover:text-white hover:scale-75 transition-all"
            to="/Little-Lemon"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="hover:bg-primary hover:rounded hover:py-2 hover:px-2 hover:font-bold hover:text-white hover:scale-75 transition-all"
            to="/Little-Lemon"
          >
            Menu
          </Link>
        </li>
        <li>
          <Link
            className="hover:bg-primary hover:rounded hover:py-2 hover:px-2 hover:font-bold hover:text-white hover:scale-75 transition-all"
            to="/Little-Lemon/Reservations"
          >
            Reservation
          </Link>
        </li>
        <li>
          <Link
            className="hover:bg-primary hover:rounded hover:py-2 hover:px-2 hover:font-bold hover:text-white hover:scale-75 transition-all"
            to="/Little-Lemon"
          >
            Order Online
          </Link>
        </li>
        <li>
          <Link
            className="hover:bg-primary hover:rounded hover:py-2 hover:px-2 hover:font-bold hover:text-white hover:scale-75 transition-all"
            to="/Little-Lemon"
          >
            Login
          </Link>
        </li>
      </div>
    </>
  );
}

export default NavLinks;
