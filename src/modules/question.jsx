const SET_DATA = "question/SET_DATA";
const initialState = {
	data: {
		ownerName: "",
		answer1: "",
		answer2: "",
		answer3: "",
		answer4: "",
		answer5: "",
		answer6: "",
		content: "",
	},
};
export const setData = (key, data) => {
	return {
		type: SET_DATA,
		key,
		data,
	};
};
export default function question(state = initialState, action) {
	switch (action.type) {
		case SET_DATA:
			return {
				...state,
				data: { ...state.data, [action.key]: action.data },
			};
		default:
			return state;
	}
}
