import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import content from "../../content";
import H1 from "../common/H1";
import { Tooltip } from "antd";
const Stack = () => {
	return (
		<div className="md:min-h-screen flex flex-col items-center justify-center font-roboto my-10" id="stack">
			<H1 text={"Tools & Technologies"} />
			{Object.values(content.stack).map((stackLine, ind) => (
				<div key={ind} className="flex flex-wrap justify-center mt-5 md:mt-10">
					{stackLine.map((tech, index) => {
						return (
							<Tooltip key={tech.alt + index} title={tech.alt}>
								<span
									className={`animate-${
										index % 2 === 0 ? "float" : "refloat"
									} w-20 h-20 md:w-40 md:h-40 bg-white shadow-inner m-2 rounded-full flex items-center p-5`}
								>
									<LazyLoadImage src={tech.img} alt={tech.alt} />
								</span>
							</Tooltip>
						);
					})}
				</div>
			))}
		</div>
	);
};

export default Stack;
