import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
	const [term, setTerm] = useState('Programming');
	const [searchResults, setResults] = useState([]);

	console.log(searchResults);

	// UseEffect:
	// Second argument controls how useEffect is executed, it can be executed with 3 different scenarios:
	// 1 When the component is rendered for the first time only
	// - [] (we pass an empty Array)

	// 2 When the component is rendered for the first time AND whenever it rerenders
	// - We pass nothing, not used very often

	//  3 When the component is rendered for the first time and
	//  whenever it rerenders and some piece of data has changed
	// - We pass an Array with data inside

	// We cannot use async directly on "useEffect", but we can inside of it
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

		if (term && !searchResults.length) {
			// This means that we search right way on first render
			search();
		} else {
			const TimeoutId = setTimeout(() => {
				if (term) {
					search();
				}
			}, 1000);

			//Cleanup function, useEffect will return this function, it's the only allowed return
			// from a useEffect hook. The cleanup is returned, but it is only ran if this hook gets called
			// again, so it cleans up the previous execution.
			// 1 - useEffect is called, code is executed, returns cleanup Function
			// 2 - CleanUp function code runs, useEffect codes runs, cleanup Function is returned, etc.
			return () => clearTimeout(TimeoutId);
		}
	}, [term]);

	const renderedResults = searchResults.map((result) => {
		return (
			<div className="item ui celled grid" key={result.pageid}>
				<div className="row">
					<div className="content thirteen wide column">
						<div className="header">{result.title}</div>
						<span
							dangerouslySetInnerHTML={{
								__html: result.snippet,
							}}
						></span>
						<span>...</span>
					</div>
					<div className="three wide column">
						<a
							className="ui button"
							href={`https://en.wikipedia.org?curid=${result.pageid}`}
							target="_blank"
						>
							Read Article
						</a>
					</div>
				</div>
			</div>
		);
	});

	return (
		<div className="ui container">
			<div className="ui form">
				<div className="field">
					<label>Enter Search Term</label>
					<input
						className="input"
						onChange={(e) => setTerm(e.target.value)}
					/>
				</div>
			</div>
			<div className="ui celled list">{renderedResults}</div>
		</div>
	);
};

export default Search;
