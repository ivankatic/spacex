import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Launches from './components/Launches';
import './App.css';
import logo from './logo.png';

const client = new ApolloClient({
	uri: 'http://localhost:5000/graphql',
});

function App() {
	return (
		<ApolloProvider client={client}>
			<div className='container'>
				<img
					src={logo}
					alt='SpaceX'
					style={{ display: 'block', margin: '-250px auto' }}
				/>
				<Launches />
			</div>
		</ApolloProvider>
	);
}

export default App;