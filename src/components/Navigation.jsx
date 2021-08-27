import React, { useContext } from "react";
import content from "../content";
import { ThemeContext } from "../contexts/ThemeContext";
import NavLink from "./hocs/NavLink";

function Navigation(props) {
	let {
		theme: { background },
	} = useContext(ThemeContext);
	return (
		<div style={{ background }}>
			<div className="flex justify-between w-10/12 mx-auto py-3 text-white font-mono">
				<h1 className="text-3xl font-bold">
					{content.nav.logo}
					<span className={"w-3 h-3 bg-red-500 inline-block rounded-full"}></span>
				</h1>
				<div class="hidden md:flex sm:block items-center space-x-3">
					{content.nav.links.map((link, index) => (
						<NavLink key={index} link={link} count={index + 1} />
					))}
				</div>

				{/* <div class="hidden sm:flex items-center">
					<button class="outline-none mobile-menu-button">
						<svg
							class=" w-6 h-6 text-gray-500 hover:text-color1 "
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
				</div> */}
			</div>
		</div>
	);
}

export default Navigation;
