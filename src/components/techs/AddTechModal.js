import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTech } from '../../actions/techActions';

import M from 'materialize-css/dist/js/materialize.min.js';

const AddTechModal = ({ addTech }) => {
	const [ firstName, setFirstName ] = useState('');
	const [ lastName, setLastName ] = useState('');

	const onSubmit = () => {
		if (firstName === '' || lastName === '') {
			M.toast({ html: 'Please enter the first and last name' });
		}
		else {
			addTech({ firstName, lastName });
			M.toast({ html: 'Tech successfully added!' });

			//clear fields
			setFirstName('');
			setLastName('');
		}
	};

	return (
		<div id='add-tech-modal' className='modal' style={{ paddingBottom: '15px' }}>
			<div className='modal-content'>
				<h4>New Technician</h4>
				<div className='row'>
					<div className='input-field'>
						<input
							type='text'
							name='firstName'
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
						/>
						<label htmlFor='firstName' className='active'>
							First Name
						</label>
					</div>
				</div>
				<div className='row'>
					<div className='input-field'>
						<input
							type='text'
							name='lastName'
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
						/>
						<label htmlFor='lastName' className='active'>
							Last Name
						</label>
					</div>
				</div>
			</div>
			<div className='modal-footer '>
				<p className='center-align'>
					<a href='#!' onClick={onSubmit} className='modal-close waves-effect lime darken-2 waves-green btn'>
						Enter
					</a>
				</p>
			</div>
		</div>
	);
};

AddTechModal.propTypes = {
	addTech : PropTypes.func.isRequired
};

export default connect(null, { addTech })(AddTechModal);
