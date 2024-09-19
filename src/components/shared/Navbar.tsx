"use client";
import { signOut } from "next-auth/react";
import logo from "../../assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useAppSelector } from "@/redux/hook";

const Navbar = ({ session }) => {
  type sessionProps = {
    name: string;
    email: string;
    image: string;
  };

  const products = useAppSelector((store) => store.cart.products);

  return (
    <div className="navbar bg-base-100  border-b  w-[90%] mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/support">Support</Link>
            </li>
          </ul>
        </div>
        <Link href="/" className="text-xl">
          <Image src={logo} width={150} height={150} alt="logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/shop">Shop</Link>
          </li>
          <li>
            <Link href="/about-us">About Us</Link>
          </li>
          <li>
            <Link href="/cart">Cart</Link>
          </li>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="relative pr-5">
          <Link
            className="rounded-lg backdrop-blur-[2px] p-1 inline-block"
            href={"/cart"}
          >
            <ShoppingCart size={24} />
          </Link>
          <span className="rounded-full absolute top-[-10px] left-[20px] bg-green-700 text-white text-center size-[25px]">
            {products.length}
          </span>
        </div>
        {session?.user ? (
          <>
            <button
              onClick={() => signOut()}
              className="btn btn-error btn-outline text-white rounded-full px-5"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            href="/login"
            className="btn btn-accent btn-outline text-white rounded-full px-5"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
