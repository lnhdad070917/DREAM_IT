import React from "react";
import logo from "../../../../assets/img/dreamit.png";
// // import js from "../../../../assets/js/index.js";

// export default function Navbar() {
//     // console.log(props);
//     return (
//         // <div>
//         //     <nav className="p-5 bg-nav shadow md:flex md:items-center md:justify-between">
//         //         <div className="flex justify-between items-center ">
//         //             <h1 className="h-8 text-2xl font-bold cursor-pointer">
//         //                 <img className="h-10 inline" src={logo} />
//         //                 DREAM <span className="text-amber-400">IT</span>
//         //             </h1>

//         //             <span className="text-3xl cursor-pointer mx-2 md:hidden block">
//         //                 {/* <ion-icon name="menu" onclick="Menu(this)"> */}
//         //                 <iconify-icon
//         //                     name="menu"
//         //                     onclick="Menu(this)"
//         //                     icon="icon-park:hamburger-button"
//         //                 ></iconify-icon>
//         //                 {/* </ion-icon> */}
//         //             </span>
//         //         </div>

//         //         <ul className="md:flex md:items-center md:z-auto md:static md:bg-transparent bg-white absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px]">
//         //             <li className="mx-4 my-6 md:my-0">
//         //                 <a
//         //                     href="#"
//         //                     className="text-xl font-semibold hover:text-amber-400 duration-500"
//         //                 >
//         //                     Home
//         //                 </a>
//         //             </li>
//         //             <li className="mx-4 my-6 md:my-0">
//         //                 <a
//         //                     href="#"
//         //                     className="text-xl font-semibold hover:text-amber-400 duration-500"
//         //                 >
//         //                     Steps
//         //                 </a>
//         //             </li>
//         //             <li className="mx-4 my-6 md:my-0">
//         //                 <a
//         //                     href="#"
//         //                     className="text-xl font-semibold hover:text-amber-400 duration-500"
//         //                 >
//         //                     Desain
//         //                 </a>
//         //             </li>
//         //             <li className="mx-4 my-6 md:my-0">
//         //                 <a
//         //                     href="#"
//         //                     className="text-xl font-semibold hover:text-amber-400 duration-500"
//         //                 >
//         //                     Testimoni
//         //                 </a>
//         //             </li>
//         //             <li className="mx-4 my-6 md:my-0">
//         //                 <a
//         //                     href="#"
//         //                     className="text-xl font-semibold hover:text-amber-400 duration-500"
//         //                 >
//         //                     Q&A
//         //                 </a>
//         //             </li>

//         //             <button className="text-amber-400 md:text-white shadow-lg duration-500 px-8 py-2 mx-3 hover:text-black rounded border-orange">
//         //                 Login
//         //             </button>
//         //             <button className="bg-amber-400 border-inherit text-white shadow-lg duration-500 px-8 py-2 mx-3 hover:text-black rounded border-white">
//         //                 Register
//         //             </button>
//         //             <h2 className=""></h2>
//         //         </ul>
//         //     </nav>
//         //     {/* <script src="../../../../assets/js/index.js"></script> */}
//         // </div>

//     );
// }

import { useState, useEffect } from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";

export default function Example() {
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a
                    href="#"
                    className="text-lg text-black font-semibold hover:text-amber-400 duration-500"
                >
                    Home
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a
                    href="#"
                    className="text-lg text-black font-semibold hover:text-amber-400 duration-500"
                >
                    Steps
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a
                    href="#"
                    className="text-lg text-black font-semibold hover:text-amber-400 duration-500"
                >
                    Desain
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a
                    href="#"
                    className="text-lg text-black font-semibold hover:text-amber-400 duration-500"
                >
                    Testimoni
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a
                    href="#"
                    className="text-lg text-black font-semibold hover:text-amber-400 duration-500"
                >
                    Q&A
                </a>
            </Typography>
        </ul>
    );

    return (
        <Navbar className="mx-auto top fixed bg-nav w-full py-2 px-4 lg:px-8">
            <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                <Typography
                    as="a"
                    href="#"
                    variant="small"
                    className="mr-4 text-black cursor-pointer py-1.5 font-normal"
                >
                    <h3 className="h-8 text-2xl font-bold cursor-pointer">
                        <img className="h-5 inline" src={logo} alt="Logo" />
                        DREAM <span className="text-amber-400">IT</span>
                    </h3>
                </Typography>
                <div className="hidden lg:block">{navList}</div>
                <div>
                    <Button
                        variant="gradient"
                        size="sm"
                        className="hidden lg:inline-block text-amber-400 md:text-white shadow duration-500 px-8 py-2 mx-3 hover:text-black rounded border-orange"
                    >
                        <span>Login</span>
                    </Button>
                    <Button
                        variant="gradient"
                        size="sm"
                        className="hidden lg:inline-block bg-amber-400 border-inherit text-white shadow duration-500 px-8 py-2 mx-3 hover:text-black rounded border-white"
                    >
                        <span>Register</span>
                    </Button>
                </div>
                <IconButton
                    variant="text"
                    className="ml-auto text-black h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </IconButton>
            </div>
            <MobileNav open={openNav}>
                <div className="container text-center mx-auto">
                    {navList}
                    <Button
                        variant="gradient"
                        size="sm"
                        // fullWidth
                        className="w-full text-amber-400 md:text-white shadow-lg duration-500 px-8 py-2 my-2 hover:text-black rounded border-orange"
                    >
                        <span>Login</span>
                    </Button>
                    <Button
                        variant="gradient"
                        size="sm"
                        // fullWidth
                        className="w-full bg-amber-400 border-inherit text-white shadow-lg duration-500 px-8 py-2 my-2 hover:text-black rounded border-white"
                    >
                        <span>Register</span>
                    </Button>
                </div>
            </MobileNav>
        </Navbar>
    );
}
