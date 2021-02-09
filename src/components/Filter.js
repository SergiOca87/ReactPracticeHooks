import React, { useState } from 'react';
import { Button, Card, Image } from 'semantic-ui-react';

const Filter = ({ options, list }) => {
	const [activeOptions, changeOptions] = useState([]);

	// Either add or remove the chosen option from the activeOptions state arr
	const filterOption = (optionValueState, optionValueName) => {
		if (optionValueState) {
			changeOptions([...activeOptions, optionValueName]);
		} else {
			changeOptions(
				activeOptions.filter((option) => option !== optionValueName)
			);
		}
	};

	// Render the options passed as props to this filter Component
	const renderOptions = options.map((option) => {
		return (
			<div key={option}>
				<input
					type="checkbox"
					name={option}
					value={option}
					id={option}
					onChange={(e) =>
						filterOption(e.target.checked, e.target.value)
					}
				/>
				<label htmlFor={option}>{option}</label>
			</div>
		);
	});

	// Filter the passed down list with the active (checked) passed parameters
	const filteredAndRenderList = (itemsList) => {
		if (activeOptions.length) {
			return itemsList
				.filter((listItem) => activeOptions.includes(listItem.type))
				.map((listItem) => {
					return (
						<Card className={listItem.type} key={listItem.id}>
							<Card.Content>
								<Card.Header>{listItem.name}</Card.Header>
							</Card.Content>
							<Card.Content extra>{listItem.icon}</Card.Content>
						</Card>
					);
				});
		} else {
			return itemsList.map((listItem) => {
				return (
					<Card className={listItem.type} key={listItem.id}>
						<Card.Content>
							<Card.Header>{listItem.name}</Card.Header>
						</Card.Content>
						<Card.Content extra>{listItem.icon}</Card.Content>
					</Card>
				);
			});
		}
	};

	return (
		<div>
			<form>{renderOptions}</form>
			{filteredAndRenderList(list)}
		</div>
	);
};

export default Filter;
