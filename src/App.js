import React from "react";
import { About } from "./components/about/index";
import { Header } from "./components/header/index";
import { Navigation } from "./components/navigation/index";
import { ParticlesBackground } from "./components/particlesBackground/index";
import { Stack } from "./components/stack/index";
import { darkTheme } from "./config/theme_config";
import { ThemeContext } from "./contexts/ThemeContext";

// // Todo: Add navbar behavior for mobile
// // Todo: Fix nav link hover behavior
// // Todo: Fix header behavior mobile

//*-- Navigation Changes --*
//Todo: Change navbar opacity or add faded effect
//Todo: Add animater burger menu and add nav drawer for mobile
//Todo: when drawer is opened: fade background opacity and show logo
//Todo: maybe hide navbar on mobile and just show burger and logo
//Todo: Stick navbar to top or hide with animation on scroll (look at brittany chiang github)
//Todo: Add shadow to navbar

//*-- Header Changes --*
// // Todo: remove typical and change text it
//Todo: Add animation to header text items

//*-- Misc --*
//Todo: Keep only one section in view port
//Todo: Add Missing sections
//Todo: Add projects section
//Todo: Change fonts
//Todo: Add light/dark support and switch

export default function App() {
	return (
		<div style={{ background: darkTheme.background }}>
			<ThemeContext.Provider value={{ theme: darkTheme }}>
				<Navigation />

				<ParticlesBackground />
				{/* <div> */}
				<Header />
				<About />
				<Stack />
				{/* </div> */}
			</ThemeContext.Provider>
		</div>
	);
}
