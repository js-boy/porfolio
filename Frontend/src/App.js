/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable no-unused-vars */
import React, { Suspense, lazy, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import '@fontsource/poppins';
import '@fontsource/poppins/400.css';
import Loader from './common/components/loader';
import { Footer } from './common/components/footer';
import { Navbar } from './common/components/navbar';
import {fetchPorfolioMessage} from "./services/Api";


const App = () => {
	const [message, setMessage] = useState('');

	const Home = lazy(() => import('./MainLayout'));
	const NoMatch = lazy(() => import('./common/components/noMatch'));

	const ElementSuspense = (Children) => (
		<Suspense fallback={<Loader />}>{Children}</Suspense>
	);

	useEffect(() => {
		const getMessage = async () => {
			try {
				const data = await fetchPorfolioMessage();
				setMessage(data.message);
			} catch (error) {
				console.error('Failed to fetch message:', error);
			}
		};
		getMessage();
	}, []);

	return (
		<>
			<Navbar />
			<Routes>
				<Route element={ElementSuspense(<Home/>)}
							  index  />
				<Route path="*" element={ElementSuspense(<NoMatch />)} />
			</Routes>
			<Footer />
		</>
	);
};

export default App;
