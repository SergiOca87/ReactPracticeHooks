import React from 'react';

const Link = ({ className, href, children }) => {
	const onClick = (event) => {
		// Update the URL without actually reloading the page
		event.preventDefault();
		window.history.pushState({}, '', href);

		// Communicate to the Route Components that the route has changed
		const navEvent = new PopStateEvent('popstate');
		window.dispatchEvent(navEvent);
	};
	return (
		<a className={className} href={href} onClick={onClick}>
			{children}
		</a>
	);
};

export default Link;
