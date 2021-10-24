const colors = {
	color1: "#00C3F5",
	navy: "#0a192f",
	light_navy: "#112240",
	lightest_navy: "#233554",
	slate: "#8892b0",
	light_slate: "#a8b2d1",
	lightest_slate: "#ccd6f6",
	white: "#e6f1ff",
	green: "#64ffda",
};
export const lightTheme = {
	body: "#FFF",
	text: "#091c29",
	background: "#091c29",
	...colors,
};
export const darkTheme = {
	backgroundClass: "bg-navy-dark",
	body: colors.navy,
	heading: colors.lightest_slate,
	subHeading: colors.slate,
	text: colors.slate,
	background: colors.navy,
	white: colors.white,
	...colors,
};
