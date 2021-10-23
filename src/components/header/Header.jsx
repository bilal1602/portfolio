import React, { useContext } from "react";
import content from "../../content";
// import Typical from "react-typical";
import { ThemeContext } from "../../contexts/ThemeContext";

const Header = () => {
	const {
		theme: { background, heading, subHeading, color1 },
	} = useContext(ThemeContext);
	// const [animated, setAnimated] = useState(false);
	// useEffect(() => setAnimated(true), []);
	return (
		<div className="min-h-screen flex items-center justify-center" style={{ background }}>
			<div className={"w-11/12"}>
				<div className="w-10/12 mx-auto items-center font-roboto md:flex md:flex-col md:mx-0 md:items-start">
					{/* <div className="w-10/12 mx-auto items-center justify-center font-roboto md:mx-0"> */}
					<span style={{ color: color1, marginBottom: 15, fontSize: "clamp(14px,5vw,16px)" }} className="font-consolas ml-1">
						{content.header.text[0]}
					</span>
					<h1
						// style={{ color: heading, marginBottom: 25, fontSize: "clamp(40px, 8vw, 80px)", fontWeight: 700 }}
						style={{ color: heading }}
						className={`text-4xl md:text-7xl font-bold`}
					>
						{content.header.text[1]}
					</h1>
					<h1
						// style={{ color: subHeading, fontSize: "clamp(40px, 8vw, 80px)", fontWeight: 700 }}
						style={{ color: subHeading }}
						className={`text-3xl md:text-7xl font-bold`}
					>
						{content.header.subHeading}
					</h1>
					{/* <h1
						className={`${
							animated ? "" : "translate-y-10 opacity-0"
						} transform transition duration-1000 ease-in-out font-bold text-2xl`}
						style={{ color: subHeading }}
					>
						{content.header.text[2]}
						<Typical
							steps={content.header.typical}
							loop={Infinity}
							className="inline-block"
							placeholderSrc={process.env.PUBLIC_URL + "/logo512.png"}
						/>
					</h1> */}
				</div>
			</div>
		</div>
	);
};
export default Header;
