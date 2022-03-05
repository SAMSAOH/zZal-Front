const SET_ID = "user/SET_ID";
const initialState = {
	userId: null,
};
export const setId = (userId) => {
	return {
		type: SET_ID,
		userId,
	};
};
export default function suer(state = initialState, action) {
	switch (action.type) {
		case SET_ID:
			return {
				...state,
				userId: action.userId,
			};
		default:
			return state;
	}
}
