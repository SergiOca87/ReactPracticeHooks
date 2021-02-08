import React from 'react';
import { FaReact } from 'react-icons/fa';
import { FaVuejs } from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di';

// Load icons with ternary or if elses?

import { Button, Card, Image } from 'semantic-ui-react';
import Filter from './Filter';

// THis list receives the toDisplay arr from Filter.js to conditionally render content
const CardList = ({ cards, toDisplay }) => {
	return (
		<Card.Group>
			{toDisplay.length
				? cards
						.filter((card) => toDisplay.includes(card.type))
						.map((card) => {
							return (
								<Card className={card.type} key={card.id}>
									<Card.Content>
										<Card.Header>{card.name}</Card.Header>
									</Card.Content>
									<Card.Content extra>
										{card.icon}
									</Card.Content>
								</Card>
							);
						})
				: cards.map((card) => {
						return (
							<Card className={card.type} key={card.id}>
								<Card.Content>
									<Card.Header>{card.name}</Card.Header>
								</Card.Content>
								<Card.Content extra>{card.icon}</Card.Content>
							</Card>
						);
				  })}
		</Card.Group>
	);
};

export default CardList;
