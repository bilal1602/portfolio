import React, { useContext, useEffect, useState } from "react";
import content from "../../content";
import Typical from "react-typical";
import { ThemeContext } from "../../contexts/ThemeContext";

const Header = () => {
	const {
		theme: { color1 },
	} = useContext(ThemeContext);
	const [animated, setAnimated] = useState(false);
	useEffect(() => setAnimated(true), []);
	return (
		<div className="min-h-screen flex items-center justify-center">
			<div className={"w-11/12"}>
				<div className="w-8/12 mx-auto items-center justify-center text-white font-roboto md:mx-0 md:mt-20">
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
