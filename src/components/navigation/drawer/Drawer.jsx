import React, { useContext } from "react";
import { hexToRgba } from "../../../utils";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { CloseOutlined } from "@ant-design/icons";
export default function Drawer({ children, isOpen, setIsOpen }) {
	let { theme } = useContext(ThemeContext);
	return (
		<main
			className={`fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out
				${isOpen ? " transition-opacity opacity-100 duration-500 translate-x-0  " : " transition-all delay-500 opacity-0 translate-x-full  "}`}
		>
			<section
				className={`w-6/12 max-w-lg right-0 absolute h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform ${
					isOpen ? " translate-x-0 " : " translate-x-full "
				}`}
				style={{ background: hexToRgba(theme.background) }}
			>
				{/* <button className="text-slate-light ml-2 font-2xl" onClick={() => setIsOpen(false)}> */}
				<CloseOutlined
					className="hover:text-color1 ml-4 mt-4 text-2xl"
					onClick={() => setIsOpen(false)}
					style={{ color: theme.slate }}
				/>
				{/* </button> */}
				<article className="relative w-screen max-w-lg pb-10 divide-y flex flex-col overflow-y-scroll h-full">
					{children.map((child, ind) => (
						<header key={ind} className="p-4 font-bold text-lg">
							{child}
						</header>
					))}
					{/* <header className="p-4 font-bold text-lg">Header</header>
					{children} */}
				</article>
			</section>
			<section className=" w-screen h-full cursor-pointer " onClick={() => setIsOpen(false)}></section>
		</main>
	);
}
