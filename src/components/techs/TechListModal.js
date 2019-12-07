import React, { useState, useEffect } from 'react';
import TechItem from './TechItem';

const TechListModal = () => {
	const [ loading, setLoading ] = useState(false);
	const [ techs, setTechs ] = useState([]);

	useEffect(
		() => {
			getTechs();
		},
		// eslint-disable-next-line
		[]
	);

	const getTechs = async () => {
		setLoading(true);
		const res = await fetch('/techs');
		const data = await res.json();

		setTechs(data);
		setLoading(false);
	};

	return (
		<div id='tech-list-modal' className='modal'>
			<div className='modal-contect'>
				<h4>Technicians List</h4>
				<ul className='collection'>
					{!loading && techs.map((tech) => <TechItem tech={tech} key={tech.id} />)}
				</ul>
			</div>
		</div>
	);
};

export default TechListModal;
