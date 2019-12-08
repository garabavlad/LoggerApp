import React from 'react';
import { connect } from 'react-redux';
import { getTechs } from '../../actions/techActions';
import PropTypes from 'prop-types';

const TechsOptionsList = ({ tech: { techs, loading }, getTechs }) => {
	return (
		!loading &&
		techs !== null &&
		techs.map((t) => (
			<option value={`${t.firstName} ${t.lastName}`} key={t.id}>
				{t.firstName + ' ' + t.lastName}
			</option>
		))
	);
};

TechsOptionsList.propTypes = {
	tech     : PropTypes.object.isRequired,
	getTechs : PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
	tech : state.tech
});

export default connect(mapStateToProps, { getTechs })(TechsOptionsList);
