import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const EditLogModal = () => {
	const [ message, setMessage ] = useState('');
	const [ attention, setAttention ] = useState(false);
	const [ tech, setTech ] = useState('');

	const onSubmit = () => {
		if (message === '' || tech === '') {
			M.toast({ html: 'Please add a message and a tech' });
		}
		else {
			console.log(message, tech, attention);

			//clear fields
			setAttention(false);
			setMessage('');
			setTech('');
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
						<label htmlFor='message' className='active'>
							Log Message
						</label>
					</div>
				</div>
				<div className='row'>
					<div className='input-field'>
						<select
							name='tech'
							value='tech'
							className='browser-default'
							onChange={(e) => setTech(e.target.value)}>
							<option value='' disabled>
								Select Technician
							</option>
							<option value='john'>John Doe</option>
							<option value='johny'>Johny Doe</option>
							<option value='johnyy'>Johnyy Doe</option>
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

const modalStyle = {
	width  : '75%',
	height : '50%'
};

export default EditLogModal;
