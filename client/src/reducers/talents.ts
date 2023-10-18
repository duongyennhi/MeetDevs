export const talentReducer = (
	state = { isLoading: false, talents: [], talent: null },
	action
) => {
	switch (action.type) {
		case 'START_LOADING':
			return { ...state, isLoading: true };
		case 'END_LOADING':
			return { ...state, isLoading: false };
		case 'FETCH_ALL':
			return { ...state, talents: action.payload };

		case 'FETCH_TALENT':
			return { ...state, talent: action.payload };

		case 'PATCH_TALENT':
			return { ...state, talent: action.payload };

		default:
			return state;
	}
};
