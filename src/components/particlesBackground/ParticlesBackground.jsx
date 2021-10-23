import React, { useContext, useState } from "react";
import Particles from "react-particles-js";
import particlesConfig from "../../config/particle_config";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function ParticleBackground({ children }) {
	let { theme } = useContext(ThemeContext);
	const [config, setConfig] = useState(particlesConfig);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	React.useEffect(() => {
		if (windowWidth < 768)
			setConfig({
				...particlesConfig,
				particles: { ...particlesConfig.particles, line_linked: { ...particlesConfig.particles.line_linked, enable: true } },
			});
		else setConfig(particlesConfig);
	}, [windowWidth]);

	React.useEffect(() => window.addEventListener("resize", () => setWindowWidth(window.innerWidth), false), []);
	return (
		<div style={{ background: theme.background }}>
			<Particles style={{ position: "absolute", zIndex: 1 }} height="95%" width="100%" params={config} />
			{children}
		</div>
	);
}
