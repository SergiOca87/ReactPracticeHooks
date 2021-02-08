import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Filter from './components/Filter';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
	{
		question: 'Question 1',
		answer: 'Answer 1',
	},
	{
		question: 'Question 2',
		answer: 'Answer 2',
	},
	{
		question: 'Question 3',
		answer: 'Answer 3',
	},
];

const options = [
	{
		label: 'The Color Red',
		value: 'red',
	},
	{
		label: 'The Color Green',
		value: 'green',
	},
	{
		label: 'Shade of Blue',
		value: 'blue',
	},
];

const filterOptions = ['React', 'Vue', 'Javascript'];

export default () => {
	//useState can be defined on the App component and passed down (state and stateSetter func) to child Components as props
	//That way we could use this state on several Components on our APp if needed
	const [selected, setSelected] = useState(options[0]);
	return (
		<div>
			<Header />
			<Route path="/">
				<Accordion items={items} />
			</Route>
			<Route path="/list">
				<Search />
			</Route>
			<Route path="/filter">
				<Filter options={filterOptions} />
			</Route>
			<Route path="/translate">
				<Translate />
			</Route>
			<Route path="/dropdown">
				<Dropdown
					options={options}
					selected={selected}
					onSelectedChange={setSelected}
				/>
			</Route>
		</div>
	);
};
