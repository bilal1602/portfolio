const particlesConfig = {
	particles: {
		number: {
			value: 200,
			density: {
				enable: true,
				value_area: 700,
			},
		},
		color: {
			value: "#ffffff",
		},
		shape: {
			type: "circle",
			stroke: {
				width: 0,
				color: "#000000",
			},
			polygon: {
				nb_sides: 1,
			},
		},
		opacity: {
			value: 0.5,
			random: false,
			anim: {
				enable: false,
				speed: 1,
				opacity_min: 0.1,
				sync: true,
			},
		},
		size: {
			value: 1.5,
			random: true,
			anim: {
				enable: false,
				speed: 10,
				size_min: 0.1,
				sync: false,
			},
		},
		line_linked: {
			enable: false,
			distance: 65,
			color: "#ffffff",
			opacity: 0.8,
			width: 0.6,
		},
		move: {
			enable: true,
			speed: 3,
			direction: "none",
			random: true,
			straight: false,
			out_mode: "out",
			bounce: false,
			attract: {
				enable: false,
				rotateX: 600,
				rotateY: 1200,
			},
		},
	},
	interactivity: {
		detect_on: "canvas",
		events: {
			onhover: {
				enable: true,
				mode: "connect",
			},
			onclick: {
				enable: true,
				mode: "push",
			},
			resize: true,
		},
		modes: {
			connect: {
				radius: 200,
				distance: 80,
				line_linked: {
					opacity: 0.4,
				},
			},
			grab: {
				distance: 200,
				line_linked: {
					opacity: 0.6,
				},
			},
			bubble: {
				distance: 400,
				size: 40,
				duration: 2,
				opacity: 8,
				speed: 3,
			},
			repulse: {
				distance: 200,
				duration: 0.4,
			},
			push: {
				particles_nb: 4,
			},
			remove: {
				particles_nb: 2,
			},
		},
	},
	retina_detect: true,
};
export default particlesConfig;
