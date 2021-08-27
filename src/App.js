import React from "react";
import About from "./components/About";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import ParticleBackground from "./components/ParticlesBackground";
import Stack from "./components/Stack";
import { darkTheme } from "./config/theme_config";
import { ThemeContext } from "./contexts/ThemeContext";

//Todo: Add shadow to navbar
//Todo: Stick navbar to top or hide with animation on scroll
//Todo: Add navbar behavior for mobile
//Todo: Add light/dark support and switch
//Todo: Fix nav link hover behavior
//Todo: Keep complete section in view port
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
