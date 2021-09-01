import React, { useContext } from "react";
import Particles from "react-particles-js";
// import Particles from "react-tsparticles";
import particlesConfig from "../config/particle_config";
import { ThemeContext } from "../contexts/ThemeContext";

export default function ParticleBackground({ children }) {
	let { theme } = useContext(ThemeContext);
	return (
		<div style={{ background: theme.background }}>
			<Particles style={{ position: "absolute" }} height="95%" width="100%" params={particlesConfig} />
			{children}
		</div>
	);
}
