import React, { useState, useContext } from "react";
import { Link as ScrollLink } from "react-scroll";
import { ThemeContext } from "../../contexts/ThemeContext";

const NavLink = ({ link, count }) => {
	let { theme } = useContext(ThemeContext);
	let [hovered, setHovered] = useState(false);
	let linkStyle = { color: theme.text };
	if (hovered) linkStyle = { color: theme.color1, border: "2px dotted", borderRadius: "4px" };
	return (
		<>
			<ScrollLink smooth={true} to={link.to}>
				<span
					onMouseEnter={() => setHovered(true)}
					onMouseLeave={() => setHovered(false)}
					className={"text-lg p-2"}
					style={{ cursor: "pointer", flexWrap: "wrap-between", ...linkStyle }}
				>
					<span className={"text-sm"} style={{ color: theme.color1 }}>
						0{count}
						{". "}
					</span>
					{link.text}
				</span>
			</ScrollLink>
		</>
	);
};

export default NavLink;
