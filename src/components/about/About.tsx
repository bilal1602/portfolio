import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import content from "../../content";
const About = () => {
	let {
		theme: { text },
	} = useContext(ThemeContext);

	return (
		<div className="md:min-h-screen flex flex-col items-center pt-20 font-roboto" id="about">
			{/* <div className="mt-20 flex">
				<H1 text={"About Me"} />
			</div> */}
			{/* <div className="justify-center items-center md:flex"> */}

			<div className="mb-10 w-64 mx-auto md:mb-auto">
				<img className="rounded-full shadow-sm" src={content.header.img} alt="Bilal" />
			</div>

			<div className="md:w-8/12 text-xl" style={{ color: text }}>
				<div className="w-11/12 mx-auto text-left md:text-center">
					<p className={"my-5"}>{content.about.desc[0]}</p>
					<p className={"my-5"}>{content.about.desc[1]}</p>
				</div>
			</div>
			{/* </div> */}
		</div>
	);
};

export default About;
