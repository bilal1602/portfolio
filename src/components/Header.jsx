import React, { useContext, useEffect, useState } from "react";
// import { LazyLoadImage } from "react-lazy-load-image-component";
import content from "../content";
import Typical from "react-typical";
import { ThemeContext } from "../contexts/ThemeContext";
// function BgImage(props) {
// 	return (
// 		<div
// 			style={{
// 				background: "url(" + props.bg + ")",
// 				backgroundSize: "cover",
// 				height: "60vh",
// 				width: "60vh",
// 				borderRadius: 5,
// 				zIndex: "1000",
// 			}}
// 		>
// 			{/* <div
// 				style={{
// 					position: "absolute",
// 					height: "60vh",
// 					width: "60vh",
// 					backgroundColor: props.tint,
// 					zIndex: "1000",
// 				}}
// 			/> */}
// 		</div>
// 	);
// }

const Header = () => {
	const {
		theme: { color1 },
	} = useContext(ThemeContext);
	const [animated, setAnimated] = useState(false);
	useEffect(() => setAnimated(true), []);
	return (
		<div className="min-h-screen flex items-center justify-center">
			<div className={"w-10/12 mx-auto flex flex-col md:flex-row-reverse items-center justify-between"}>
				<div className={"w-full md:w-2/5"}>
					{/* <BgImage bg={content.header.img} tint="rgba(9, 28, 41,0.7)" /> */}
					{/* <LazyLoadImage style={{ zIndex: 1000 }} src={content.header.img} effect="blur"></LazyLoadImage> */}
				</div>
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
