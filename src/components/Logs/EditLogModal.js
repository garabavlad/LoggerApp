import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateLog } from '../../actions/logActions';

import M from 'materialize-css/dist/js/materialize.min.js';
import TechsOptionsList from '../techs/TechsOptionsList';

const EditLogModal = ({ current, updateLog }) => {
	const [ message, setMessage ] = useState('');
	const [ attention, setAttention ] = useState(false);
	const [ tech, setTech ] = useState('');

	useEffect(
		() => {
			if (current) {
				setAttention(current.attention);
				setMessage(current.message);
				setTech(current.tech);
			}
		},
		[ current ]
	);

	const onSubmit = () => {
		if (message === '' || tech === '') {
			M.toast({ html: 'Please add a message and a tech' });
		}
		else {
			const updLog = {
				...current,
				message,
				attention,
				tech
			};

			updateLog(updLog);
			M.toast({ html: `Log successfully updated by ${tech}` });
		}
	};

	return (
		<div id='edit-log-modal' className='modal' style={modalStyle}>
			<div className='modal-content'>
				<h4>Edit System Log</h4>
				<div className='row'>
					<div className='input-field'>
						<input
							type='text'
							name='message'
							value={message}
							onChange={(e) => setMessage(e.target.value)}
						/>
					</div>
				</div>
				<div className='row'>
					<div className='input-field'>
						<select
							name='tech'
							value={tech}
							className='browser-default'
							onChange={(e) => setTech(e.target.value)}>
							<option value='' disabled>
								Select Technician
							</option>
							<TechsOptionsList />
						</select>
					</div>
				</div>
				<div className='row'>
					<div className='input-field'>
						<p>
							<label>
								<input
									type='checkbox'
									className='filled-in'
									checked={attention}
									value={attention}
									onChange={() => setAttention(!attention)}
								/>
								<span>Needs Attention</span>
							</label>
						</p>
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

EditLogModal.propTypes = {
	updateLog : PropTypes.func.isRequired,
	current   : PropTypes.object
};

const modalStyle = {
	width  : '75%',
	height : '50%'
};

const mapStateToProps = (state) => ({
	current : state.log.current
});

export default connect(mapStateToProps, { updateLog })(EditLogModal);
