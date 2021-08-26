import React from "react";
import Particles from "react-particles-js";
// import Particles from "react-tsparticles";
import particlesConfig from "../config/particle_config";

export default function ParticleBackground({ children }) {
	return (
		<div style={{ background: "#091c29" }}>
			<Particles style={{ position: "absolute" }} height="95%" width="95%" params={particlesConfig} />
			{children}
		</div>
	);
}
