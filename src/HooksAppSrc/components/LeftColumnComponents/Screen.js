export default function Screen({ sprites }) {
	return (
		<div className="screen rounded-corners">
			<img
				className="pokedex-image"
				src={sprites.front_default}
				alt="pokemon sprite"
			/>
		</div>
	);
}
