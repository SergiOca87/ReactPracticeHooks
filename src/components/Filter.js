import React, { useState } from 'react';
import FilterList from './FilterList';

// Maybe this is a better approach:
// https://medium.com/@quintonbrown8101/javascript-filter-using-react-hooks-in-a-functional-component-2bae7ff7066

// - You think it's flawed as CardList is not reusable
// - Logic is too spread and not too reusable
// - Try to add Card to the state
// - useEffect to filter, see post and examples with Objects as state in other wodgets

const Filter = ({ options }) => {
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

	// Pass down the activeOptions down to the list that has to be filtered
	return (
		<div>
			<form>{renderOptions}</form>

			<div>
				<FilterList activeOptions={activeOptions} />
			</div>
		</div>
	);
};

export default Filter;
