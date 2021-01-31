import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
	const [term, setTerm] = useState('Default');
	const [searchResults, setResults] = useState([]);

	console.log(searchResults);

	// UseEffect:
	// Second argument controls how useEffect is executed, it can be executed with 3 different scenarios:
	// 1 When the component is rendered for the first time only
	// - [] (we pass an empty Array)

	// 2 When the component is rendered for the first time AND whenever it rerenders
	// - We pass nothing

	//  3 When the component is rendered for the first time and
	//  whenever it rerenders and some piece of data has changed
	// - We pass an Array with data inside

	// We cannot use async directly on "useEffect", but we can inside of ti
	useEffect(() => {
		const search = async () => {
			const { data } = await axios.get(
				'https://en.wikipedia.org/w/api.php',
				{
					params: {
						action: 'query',
						list: 'search',
						origin: '*',
						format: 'json',
						srsearch: term,
					},
				}
			);

			setResults(data.query.search);
		};

		if (term) {
			search();
		}
	}, [term]);

	return (
		<div>
			<div className="ui form">
				<div className="field">
					<label>Enter Search Term</label>
					<input
						className="input"
						onChange={(e) => setTerm(e.target.value)}
					/>
				</div>
			</div>
		</div>
	);
};

export default Search;
