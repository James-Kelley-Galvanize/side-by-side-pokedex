import Screen from "./LeftColumnComponents/Screen";
import Stats from "./LeftColumnComponents/Stats";

export default function LeftColumn({ sprites, stats }) {
	return (
		<div className="left pokedex-subcolumn">
			<Screen sprites={sprites} />
			<Stats stats={stats} />
		</div>
	);
}
