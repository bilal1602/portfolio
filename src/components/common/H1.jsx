import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
const H1 = ({ text = "", classes = "", styles = {} }) => {
	const { theme } = useContext(ThemeContext);
	return (
		<h1 className={`text-5xl font-bold ${classes}`} style={{ color: theme.heading, ...styles }}>
			{text}
		</h1>
	);
};

export default H1;
