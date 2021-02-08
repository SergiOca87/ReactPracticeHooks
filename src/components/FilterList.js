import React from 'react';

// Icons
import CardList from './CardList';

// Data
const Cards = [
	{
		type: 'React',
		name: 'A React based card',
		icon: 'FaReact',
		id: 1,
	},
	{
		type: 'React',
		name: 'A React based card',
		icon: 'FaReact',
		id: 2,
	},
	{
		type: 'React',
		name: 'A React based card',
		icon: 'FaReact',
		id: 3,
	},
	{
		type: 'Vue',
		name: 'A Vue based card',
		icon: 'FaVuejs',
		id: 4,
	},
	{
		type: 'Javascript',
		name: 'A Javascript based card',
		icon: 'DiJavascript1',
		id: 5,
	},
];

// Pass down the activeOptions to this list Component
const FilterList = ({ activeOptions }) => {
	return <CardList cards={Cards} toDisplay={activeOptions} />;
};

export default FilterList;
