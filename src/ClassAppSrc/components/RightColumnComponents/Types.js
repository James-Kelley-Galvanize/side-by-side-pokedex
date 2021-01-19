export default function Types({ types }) {
	const typeHtml = types.map((entry) => (
		<button className="type-entry rounded-corners">
			{" "}
			{entry.type.name.toUpperCase()}{" "}
		</button>
	));
	return (
		<div className="types card">
			<h3>TYPES</h3>
			<div className="types-list">{typeHtml}</div>
		</div>
	);
}
