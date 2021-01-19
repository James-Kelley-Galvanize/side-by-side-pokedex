const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

export default function NameBanner({ name, id }) {
	return (
		<div className="name-num-header">
			<h1>
				{capitalize(name)} - #{id}
			</h1>
		</div>
	);
}
