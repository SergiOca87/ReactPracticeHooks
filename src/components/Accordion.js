import React, { useState, useEffect } from 'react';

const Accordion = ({ items }) => {
	const [activeIndex, setActiveIndex] = useState(null);

	const itemClicked = (index) => {
		setActiveIndex(index);
	};

	return (
		<div>
			{items.map((item, index) => {
				const active = activeIndex === index ? 'active' : '';

				return (
					<div
						key={item.question}
						onClick={() => itemClicked(index)}
						className={`title ${active}`}
					>
						<h3>{item.question}</h3>
						<p>{item.answer}</p>
					</div>
				);
			})}

			<p>Active Index {activeIndex}</p>
		</div>
	);
};

export default Accordion;
