import React from "react";
import About from "./components/About";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import ParticleBackground from "./components/ParticlesBackground";
import Stack from "./components/Stack";
import { darkTheme } from "./config/theme_config";
import { ThemeContext } from "./contexts/ThemeContext";

//Todo: Add shadow to navbar
//Todo: Add navbar behavior for mobile
//Todo: Fix nav link hover behavior
//Todo: Add light/dark support and switch
//Todo: Keep complete section in view port
//Todo: Stick NavToo top or hide with anmation on scroll
//Todo: Add Clibre and other fonts
//Todo: Add Missing sections
//Todo: Add projects section

export default function App() {
	return (
		<div>
			<ThemeContext.Provider value={{ theme: darkTheme }}>
				<Navigation />
				<ParticleBackground children={<Header />} />
				<About />
				<Stack />
			</ThemeContext.Provider>
		</div>
	);
}
