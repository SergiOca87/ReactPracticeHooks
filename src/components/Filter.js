import React, { useState } from 'react';

const Filter = ({ options }) => {
	const [activeOptions, changeOptions] = useState([]);

	const filterOption = (optionValueState, optionValueName) => {
		if (optionValueState) {
			changeOptions([...activeOptions, optionValueName]);
		} else {
			changeOptions(
				activeOptions.filter((option) => option !== optionValueName)
			);
		}
	};

	// We have an active set of filters now that we can use to filter a list

	return (
		<div>
			<form>
				{options.map((option) => (
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
				))}

				<p>{activeOptions}</p>
			</form>
		</div>
	);
};

export default Filter;
