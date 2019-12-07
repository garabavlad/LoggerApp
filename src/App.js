import React, { useEffect } from 'react';
import { Provider } from 'react-redux';

import SearchBar from './components/layout/SearchBar';
import Logs from './components/Logs/Logs';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/Logs/AddLogModal';
import EditLogModal from './components/Logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';
import store from './store';

import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

function App() {
	useEffect(() => {
		M.AutoInit();
	}, []);

	return (
		<Provider store={store}>
			<SearchBar />

			<div className='container'>
				<AddBtn />
				<TechListModal />
				<AddTechModal />
				<AddLogModal />
				<EditLogModal />
				<Logs />
			</div>
		</Provider>
	);
}

export default App;
