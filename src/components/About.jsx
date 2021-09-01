import React, { useContext } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import content from "../content";
import { ThemeContext } from "../contexts/ThemeContext";
import H1 from "./common/H1";
const About = () => {
	let {
		theme: { background, text },
	} = useContext(ThemeContext);
	return (
		<div className="min-h-screen flex flex-col items-center justify-center font-mono" id="about" style={{ background }}>
			<H1 text={"About Me"} />
			<div className={"w-full md:w-2/5"}>
				{/* <BgImage bg={content.header.img} tint="rgba(9, 28, 41,0.7)" /> */}
				{/* <LazyLoadImage style={{ zIndex: 1000 }} src={content.header.img} effect="blur"></LazyLoadImage> */}
			</div>

			<p className="w-11/12 md:w-10/12 text-xl text-center mt-10" style={{ color: text }}>
				{content.stack.desc}
			</p>
		</div>
	);
};

export default About;
