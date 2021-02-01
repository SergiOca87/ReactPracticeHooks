import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Filter from './components/Filter';

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

export default () => {
	return (
		<div>
			{/* <Accordion items={items} /> */}
			<Search />
			{/* <Filter options={['Vue', 'React', 'Javascript']} /> */}
		</div>
	);
};
