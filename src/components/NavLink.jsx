import React, { useContext } from "react";
import { Link as ScrollLink } from "react-scroll";
import { ThemeContext } from "../contexts/ThemeContext";

const NavLink = ({ link, count }) => {
	let { theme } = useContext(ThemeContext);
	return (
		<ScrollLink smooth={true} to={link.to}>
			{/* <div className="md:hidden mobile-menu">
				<ul>
					<li
						className="block text-sm px-2 py-4  hover:text-color1 transition duration-200"
						// onMouseEnter={() => setHovered(true)}
						// onMouseLeave={() => setHovered(false)}
						style={{ cursor: "pointer" }}
					>
						{link.text}
					</li>
				</ul>
			</div> */}
			<span className={"text-base py-2 px-4 cursor-pointer hover:text-color1 transition duration-200"}>
				<span className={"text-sm"} style={{ color: theme.color1 }}>
					0{count}
					{". "}
				</span>
				{link.text}
			</span>
		</ScrollLink>
	);
};

export default NavLink;
