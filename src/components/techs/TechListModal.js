import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import TechItem from './TechItem';

import { getTechs } from '../../actions/techActions';

const TechListModal = ({ techs: { techs, loading }, getTechs }) => {
	useEffect(
		() => {
			getTechs();
		},
		// eslint-disable-next-line
		[]
	);

	return (
		<div id='tech-list-modal' className='modal' style={{ padding: '20px' }}>
			<div className='modal-contect'>
				<h4>Technicians List</h4>
				<ul className='collection'>
					{!loading && techs !== null && techs.map((tech) => <TechItem tech={tech} key={tech.id} />)}
				</ul>
			</div>
		</div>
	);
};

TechListModal.propTypes = {
	techs    : PropTypes.object.isRequired,
	getTechs : PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
	techs : state.tech
});

export default connect(mapStateToProps, { getTechs })(TechListModal);
