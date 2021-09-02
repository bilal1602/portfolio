import React, { useState, useContext } from "react";
import { NavLink } from "./navLink";
import { Drawer } from "./drawer";
// import { BurgerMenu } from "./burgerMenu";
import { ThemeContext } from "../../contexts/ThemeContext";
import content from "../../content";

function Navigation(props) {
	let {
		theme: { background, white },
	} = useContext(ThemeContext);
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div style={{ background }}>
			<div className="flex justify-between w-10/12 mx-auto py-3 font-mono" style={{ color: white }}>
				<h1 className="text-3xl font-bold">
					{content.nav.logo}
					<span className={"w-3 h-3 bg-red-500 inline-block rounded-full"} />
				</h1>
				<div class="hidden md:flex items-center space-x-3">
					{content.nav.links.map((link, index) => (
						<NavLink key={index} link={link} count={index + 1} />
					))}
				</div>
				<Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
				<div className="flex items-center md:hidden">
					{/* <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} /> */}
					<button className="outline-none mobile-menu-button z-11" onClick={() => setIsOpen(!isOpen)}>
						<svg
							className="w-6 h-6 text-gray-500 hover:text-color1 "
							x-show="!showMenu"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Navigation;
