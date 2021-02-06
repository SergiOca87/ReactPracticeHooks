import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
	const [open, setOpen] = useState(false);

	// ref is used to create a direct reference to any of the JSX elements returned by this Component
	const ref = useRef();

	useEffect(() => {
		document.body.addEventListener('click', (event) => {
			// We check if ref.current exists because if we were to remove that dynamically
			// for whatever reason it could cause an error since it would evaluate to
			// null.current
			if (ref.current && ref.current.contains(event.target)) {
				return;
			}

			setOpen(false);
		});
	}, []);

	const renderedOptions = options.map((option) => {
		// We do not want to list the selected item, it would repeat
		if (selected.value !== option.value) {
			return (
				<div
					key={option.value}
					className="item"
					onClick={() => onSelectedChange(option)}
				>
					{option.label}
				</div>
			);
		}
	});

	return (
		<>
			<div ref={ref} className="ui form">
				<div className="field">
					<label className="label">{label}</label>
					<div
						onClick={() => setOpen(!open)}
						className={`ui selection dropdown ${
							open ? 'visible active' : ''
						}`}
					>
						<i className="dropdown icon"></i>
						<div className="text">{selected.label}</div>
						<div
							className={`menu ${
								open ? 'visible transition' : ''
							} `}
						>
							{renderedOptions}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Dropdown;
