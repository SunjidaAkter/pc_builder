import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { data: session } = useSession();
  return (
    <div className="navbar lg:px-12 md:px-6 px-0 bg-base-300">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <Link href="/">
              <li>Home</li>
            </Link>
            <li>
              <details>
                <summary>Categories</summary>
                <ul className="p-2 lg:w-60 z-20">
                  <li>
                    <Link href={`/product/cpu_processor`}>CPU / Processor</Link>
                  </li>
                  <li>
                    <Link href={`/product/motherboard`}>Motherboard</Link>
                  </li>{" "}
                  <li>
                    <Link href={`/product/ram`}>RAM</Link>
                  </li>{" "}
                  <li>
                    <Link href={`/product/storage_device`}>Storage Device</Link>
                  </li>{" "}
                  <li>
                    <Link href={`/product/power_supply_unit`}>
                      Power Supply Unit
                    </Link>
                  </li>{" "}
                  <li>
                    <Link href={`/product/monitor`}>Monitor</Link>
                  </li>
                </ul>
              </details>
            </li>
            <Link href="/blog">
              <li>Item 3</li>
            </Link>
          </ul>
        </div>
        <Link href="/">
          <li className="btn btn-ghost text-primary font-bold normal-case lg:text-5xl md:text-3xl text-xl">
            Tech
          </li>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <details>
              <summary>Categories</summary>
              <ul className="p-2 lg:w-60 z-20">
                <li>
                  <Link href={`/product/cpu_processor`}>CPU / Processor</Link>
                </li>
                <li>
                  <Link href={`/product/motherboard`}>Motherboard</Link>
                </li>{" "}
                <li>
                  <Link href={`/product/ram`}>RAM</Link>
                </li>{" "}
                <li>
                  <Link href={`/product/storage_device`}>Storage Device</Link>
                </li>{" "}
                <li>
                  <Link href={`/product/power_supply_unit`}>
                    Power Supply Unit
                  </Link>
                </li>{" "}
                <li>
                  <Link href={`/product/monitor`}>Monitor</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link href="/blog">
              <li>Blog</li>
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-primary">PC BUILDER</a>
        {session?.user ? (
          <li
            onClick={() => signOut()}
            className="btn btn-ghost text-primary hover:bg-transparent focus:bg-transparent"
          >
            Logout
          </li>
        ) : (
          <Link href="/login">
            <li className="btn btn-ghost text-primary hover:bg-transparent focus:bg-transparent">
              Login
            </li>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
