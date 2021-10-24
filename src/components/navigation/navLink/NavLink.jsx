import React, { useContext } from "react";
import { Link as ScrollLink } from "react-scroll";
import { ThemeContext } from "../../../contexts/ThemeContext";

const NavLink = ({ link }) => {
	let { theme } = useContext(ThemeContext);
	return (
		<ScrollLink smooth={true} to={link.to}>
			<span
				className={"text-base py-2 px-4 cursor-pointer text-slate-light hover:text-color1 transition duration-200"}
				// style={{ color: theme.lightest_slate }}
			>
				<span className={"text-sm mr-1"} style={{ color: theme.color }}>
					{link.number}
				</span>
				<span>{link.text}</span>
				{/* {link.text} */}
			</span>
		</ScrollLink>
	);
};

export default NavLink;
