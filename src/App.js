import Header from "./components/Header";
import Navigation from "./components/Navigation";
import ParticleBackground from "./components/ParticlesBackground";
import Stack from "./components/Stack";

export default function App() {
	return (
		<div>
			<ParticleBackground
				children={
					<>
						<Navigation />
						<Header />
					</>
				}
			/>

			<Stack />
		</div>
	);
}
