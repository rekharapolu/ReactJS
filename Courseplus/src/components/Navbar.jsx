import React from "react";
import { HiMiniUserCircle } from "react-icons/hi2";
import logo from '../assets/logo.png'

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/30 p-4 shadow-md flex justify-between items-center">
            <aside>
                <img src={logo} alt="" className="w-50 h-auto" />
            </aside>
            <aside>
                <ul className="flex space-x-6 items-center">
                    <li>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            width="30"
                            height="30"
                            stroke="currentColor"
                            fill="none"
                            strokeWidth="32"
                        >
                            <title>Cart</title>
                            <circle cx="176" cy="416" r="16" strokeLinecap="round" strokeLinejoin="round" />
                            <circle cx="400" cy="416" r="16" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M48 80h64l48 272h256" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M160 288h249.44a8 8 0 007.85-6.43l28.8-144a8 8 0 00-7.85-9.57H128" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </li>
                    <li>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            width="30"
                            height="30"
                            stroke="currentColor"
                            fill="none"
                            strokeWidth="32"
                        >
                            <title>Mail</title>
                            <rect x="48" y="96" width="416" height="320" rx="40" ry="40" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M112 160l144 112 144-112" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </li>
                    <li className="relative inline-block">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            width="30"
                            height="30"
                            className="text-gray-800"
                        >
                            <title>Notifications</title>
                            <path
                                d="M427.68 351.43C402 320 383.87 304 383.87 217.35 383.87 138 343.35 109.73 310 96c-4.43-1.82-8.6-6-9.95-10.55C294.2 65.54 277.8 48 256 48s-38.21 17.55-44 37.47c-1.35 4.6-5.52 8.71-9.95 10.53-33.39 13.75-73.87 41.92-73.87 121.35C128.13 304 110 320 84.32 351.43 73.68 364.45 83 384 101.61 384h308.88c18.51 0 27.77-19.61 17.19-32.57zM320 384v16a64 64 0 01-128 0v-16"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="32"
                            />
                        </svg>
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                            2
                        </span>
                    </li>
                    <li>
                    <HiMiniUserCircle className="w-10 h-10 text-gray-700" />
                    </li>
                </ul>
            </aside>
        </nav>
    );
};

export default Navbar;
