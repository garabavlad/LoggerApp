import { TECHS_ERROR, ADD_TECH, DELETE_TECH, SET_LOADING, GET_TECHS } from '../actions/types';

const initialState = {
	techs   : null,
	loading : false,
	error   : null
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_TECHS:
			return {
				...state,
				techs : action.payload
			};

		case ADD_TECH:
			return {
				...state,
				techs : [ ...state.techs, action.payload ]
			};

		case DELETE_TECH:
			return {
				...state,
				techs : state.techs.filter((tech) => tech.id !== action.payload)
			};

		case SET_LOADING:
			return {
				...state,
				loading : true
			};

		case TECHS_ERROR:
			return {
				...state,
				error : action.payload
			};
		default:
			return state;
	}
};
