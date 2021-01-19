export default function Stats({ stats }) {
	const statsHtml = stats.map((entry) => {
		return (
			<button className="stat-entry rounded-corners">
				<span className="stat-name"> {entry.stat.name.toUpperCase()}</span>
				<br />
				{entry.base_stat}
			</button>
		);
	});
	return <div className="stats card">{statsHtml}</div>;
}
