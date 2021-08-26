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
			<div className="flex items-center justify-between w-10/12 mx-auto py-3 text-white font-mono">
				<h1 className="text-3xl font-bold">
					{content.nav.logo}
					<span className={"w-3 h-3 bg-red-500 inline-block rounded-full"}></span>
				</h1>
				<div>
					{content.nav.links.map((link, index) => (
						<NavLink key={index} link={link} count={index + 1} />
					))}
				</div>
			</div>
		</div>
	);
}

export default Navigation;
