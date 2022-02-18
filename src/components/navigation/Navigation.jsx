import React, { useState, useContext } from "react";
import { NavLink } from "./navLink";
import { Drawer } from "./drawer";
// import { BurgerMenu } from "./burgerMenu";
import { ThemeContext } from "../../contexts/ThemeContext";
import content from "../../content";

function Navigation(props) {
	let {
		theme: { white, background, color1 },
	} = useContext(ThemeContext);
	const [isOpen, setIsOpen] = useState(false);
	const navs = content.nav.links.map((link, index) => <NavLink key={index} link={link} count={index + 1} />);
	return (
		<div className="sticky top-0 z-50 opacity-80" style={{ background }}>
			<div className="flex justify-between w-10/12 mx-auto py-3 font-mono" style={{ color: white }}>
				<h1 className="text-3xl font-bold" style={{ color: white }}>
					{content.nav.logo}
					<span className={"w-3 h-3 bg-red-500 inline-block rounded-full"} />
				</h1>
				<div className="hidden md:flex items-center space-x-3">
					{content.nav.links.map((link, index) => (
						<NavLink key={index} link={link} count={index + 1} />
					))}
					<a href={content.nav.resume} rel="noopener">
						<div
							className="border-2 border-solid rounded-md cursor-pointer px-3 py-1 text-color1 hover:bg-color1 hover:bg-opacity-10 transition duration-200"
							style={{ borderColor: color1 }}
						>
							Resume
						</div>
					</a>
				</div>
				<Drawer isOpen={isOpen} setIsOpen={setIsOpen} children={navs} />
				<div className="flex items-center md:hidden">
					{/* <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} /> */}
					<button className="outline-none mobile-menu-button z-11" onClick={() => setIsOpen(!isOpen)}>
						<svg
							className="w-6 h-6 text-slate-dark hover:text-color1 "
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
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
