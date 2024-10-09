"use client";
import React, { useEffect } from "react";
import image from "next/image";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { HiSearch, HiBell, HiChat } from "react-icons/hi";
import { useSession, signIn, signOut } from "next-auth/react";
import app from "./../Shared/firebaseConfig";
import { useRouter } from "next/navigation";

//use arrow functions
const Header = () => {
  const router = useRouter();

  const db = getFirestore(app);

  return (
    <div className="flex gap-3 md:gap-2 items-center p-6">
      <img
        src="/logo.png"
        alt="logo"
        width={50}
        height={50}
        className="hover:bg-gray-300 p-2 

                  rounded-full cursor-pointer"
      />
      <button className="bg-black text-white p-2 px-4 rounded-full hidden md:block">
        Home
      </button>
      <button
        className="font-semibold p-2 px-4 rounded-full"
        onClick={() => router.push("/PinterestCreatePage.jsx")}
      >
        Create
      </button>
      <div
        className="bg-[#e9e9e9] p-3

                      flex gap-3 items-center rounded-full w-full hidden md:flex "
      >
        <HiSearch className="text-[25px] text-gray-500 md:hidden" />

        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none"
        />
      </div>
      <HiBell className="text-[40px] text-gray-500" />
      <HiChat className="text-[40px] text-gray-500" />
      <img
        src="https://picsum.photos/50/50"
        onClick={() => router.push("/")}
        alt="user-image"
        width={50}
        height={50}
        className="hover:bg-gray-300 p-2 

                rounded-full cursor-pointer"
      />
      :
      {/* <button className='font-semibold p-2 px-4 rounded-full'

        onClick={() => signIn()}>Login</button> */}
    </div>
  );
};

export default Header;
