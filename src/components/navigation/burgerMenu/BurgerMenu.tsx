import React from "react";
import { DrawerProps } from "../drawer/index";

const BurgerMenu = ({ isOpen, setIsOpen }: DrawerProps) => {
	const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;

	return (
		<button className="flex flex-col h-12 w-12 justify-center items-center group" onClick={() => setIsOpen(!isOpen)}>
			<div
				className={`${genericHamburgerLine} ${
					isOpen ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100" : "opacity-50 group-hover:opacity-100"
				}`}
			/>
			<div className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"}`} />
			<div
				className={`${genericHamburgerLine} ${
					isOpen ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100" : "opacity-50 group-hover:opacity-100"
				}`}
			/>
		</button>
	);

	//     return <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
	//     <div class="relative py-3 sm:max-w-xl mx-auto">
	//         <nav x-data="{ open: false }">
	//             <button class="text-gray-500 w-10 h-10 relative focus:outline-none bg-white" onClick={onClick}>
	//                 <span class="sr-only">Open main menu</span>
	//                 <div class="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
	//                     <span aria-hidden="true" class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out" :class="{'rotate-45': open,' -translate-y-1.5': !open }"></span>
	//                     <span aria-hidden="true" class="block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out" :class="{'opacity-0': open } "></span>
	//                     <span aria-hidden="true" class="block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out" :class="{'-rotate-45': open, ' translate-y-1.5': !open}"></span>
	//                 </div>
	//             </button>
	//         </nav>
	//     </div>
	// </div>
};

export default BurgerMenu;
