import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({ text, language }) => {
	const [translatedText, setTranslatedText] = useState('');
	const [debouncedText, setDebouncedText] = useState(translatedText);

	// API calls throttler
	useEffect(() => {
		const timerId = setTimeout(() => {
			setDebouncedText(text);
		}, 1000);

		return () => {
			clearTimeout(timerId);
		};
	}, [text]);

	useEffect(() => {
		// Helper function since we cannot use async await on a request inside of useEffect
		const doTranslation = async () => {
			// If text or language selection change the useEffect
			// is fired up, making an API call

			// Axios second parameter is to send information on our body, we don't want to use
			// that so we leave it empty

			// The third parameter is to send query parameters
			const { data } = await axios.post(
				'https://translation.googleapis.com/language/translate/v2',
				{},
				{
					params: {
						q: debouncedText,
						target: language.value,
						key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
					},
				}
			);

			setTranslatedText(data.data.translations[0].translatedText);
		};

		doTranslation();
	}, [debouncedText, language]);

	return (
		<div>
			<h1 className="ui header">{translatedText}</h1>
		</div>
	);
};

export default Convert;
