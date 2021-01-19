import FlavorText from "./RightColumnComponents/FlavorText";
import Qualities from "./RightColumnComponents/Qualities";
import Types from "./RightColumnComponents/Types";
import Versions from "./RightColumnComponents/Versions";

export default function RightColumn({
	game_indices,
	selectedVersion,
	changeSelectedVersion,
	language,
	flavor_text_entries,
	height,
	weight,
	egg_groups,
	types,
}) {
	return (
		<div className="right-subcolumn pokedex-subcolumn">
			<FlavorText
				selectedVersion={selectedVersion}
				flavor_text_entries={flavor_text_entries}
				language={language}
			/>

			<Versions
				game_indices={game_indices}
				selectedVersion={selectedVersion}
				changeSelectedVersion={changeSelectedVersion}
			/>

			<Qualities height={height} weight={weight} egg_groups={egg_groups} />

			<Types types={types} />
		</div>
	);
}
