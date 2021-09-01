import React, { useContext, useEffect, useState } from "react";
import content from "../content";
import Typical from "react-typical";
import { ThemeContext } from "../contexts/ThemeContext";

const Header = () => {
	const {
		theme: { color1 },
	} = useContext(ThemeContext);
	const [animated, setAnimated] = useState(false);
	useEffect(() => setAnimated(true), []);
	return (
		<div className="min-h-screen flex items-center justify-center">
			<div className={"w-10/12 mx-auto flex flex-col md:flex-row-reverse items-center justify-between"}>
				<div className={"w-full md:w-2/5"}></div>
				<div className="w-8/12 text-white font-roboto">
					<span className="font-consolas m-0" style={{ color: color1 }}>
						{content.header.text[0]}
					</span>
					<h2
						className={`${
							animated ? "" : "translate-y-10 opacity-0"
						} transform transition duration-1000 ease-in-out text-3xl md:text-5xl font-bold`}
					>
						{content.header.text[1]}
					</h2>
					<h1
						className={`${
							animated ? "" : "translate-y-10 opacity-0"
						} transform transition duration-1000 ease-in-out font-bold text-2xl text-gray-500`}
					>
						{content.header.text[2]}
						<Typical
							steps={content.header.typical}
							loop={Infinity}
							className="inline-block"
							placeholderSrc={process.env.PUBLIC_URL + "/logo512.png"}
						/>
					</h1>
				</div>
			</div>
		</div>
	);
};

export default Header;
