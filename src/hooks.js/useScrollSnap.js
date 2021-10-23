import { useEffect, useRef } from "react";
import ScrollSnap from "scroll-snap";

const useScrollSnap = () => {
	const container = useRef();

	const bindScrollSnap = () => {
		const element = container.current;
		const snapElement = new ScrollSnap(element, { snapDestinationY: "90%" });
		snapElement.bind(() => console.log("Snapped"));
	};
	useEffect(() => bindScrollSnap(), []);
	return container;
};

export default useScrollSnap;
