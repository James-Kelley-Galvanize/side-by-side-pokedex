export default function Qualities({ height, weight, egg_groups }) {
	const eggHtml = egg_groups.map((entry) => (
		<button className="egg-group rounded-corners">
			{" "}
			{entry.name.toUpperCase()}{" "}
		</button>
	));
	return (
		<div className="card qualities">
			<h3>Height: {height}</h3>
			<h3>Weight: {weight}</h3>
			<h3>
				Egg Groups: <br /> {eggHtml}
			</h3>
		</div>
	);
}
