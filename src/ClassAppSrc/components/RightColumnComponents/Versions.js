const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

export default function Versions({
	game_indices,
	selectedVersion,
	changeSelectedVersion,
}) {
	return (
		<div className="versions card">
			<h3>VERSIONS</h3>
			<div className="version-list">
				{game_indices.map((entry) => {
					const { name } = entry.version;
					return (
						<button
							className={`version rounded-corners${
								name === selectedVersion ? ` selected` : ``
							}`}
							onClick={(e) => {
								e.preventDefault();
								changeSelectedVersion(name);
							}}
						>
							{` ${capitalize(name)} `}
						</button>
					);
				})}
			</div>
		</div>
	);
}
