export default function FlavorText({
	selectedVersion,
	flavor_text_entries,
	language,
}) {
	const correctEntry = flavor_text_entries.find(
		(entry) =>
			entry.language.name === language && entry.version.name === selectedVersion
	);
	const { flavor_text } = correctEntry;

	return (
		<h3 className="flavor-text card">
			<text>{flavor_text}</text>
		</h3>
	);
}
