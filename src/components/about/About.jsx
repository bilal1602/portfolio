import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import content from "../../content";
const About = () => {
	let {
		theme: { background, text },
	} = useContext(ThemeContext);

	return (
		<div className="min-h-screen z-50 flex flex-col items-center justify-center font-roboto" id="about" style={{ background }}>
			{/* <div className="mt-20 flex">
				<H1 text={"About Me"} />
			</div> */}
			{/* <div className="justify-center items-center md:flex"> */}
			<div className="w-4/12">
				<div className="w-64 mx-auto items-center">
					<img className="rounded-full shadow-sm" src={content.header.img} alt="Bilal" />
				</div>
			</div>
			<div className="w-8/12 text-xl" style={{ color: text }}>
				<div className="w-10/12 mx-auto text-center">
					<p className={"my-5"}>{content.about.desc[0]}</p>
					<p className={"my-5"}>{content.about.desc[1]}</p>
				</div>
			</div>
			{/* </div> */}
		</div>
	);
};

export default About;
