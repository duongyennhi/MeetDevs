import { getAllTalents, getATalent, patchTalent } from '../api/talent';

export const getTalents = (setLoading) => async (dispatch) => {
	try {
		setLoading(true);
		const { data } = await getAllTalents();
		dispatch({ type: 'FETCH_ALL', payload: data });
		setLoading(false);
	} catch (error) {
		console.log(error.message);
	}
};

export const getTalent = (setLoading, id) => async (dispatch) => {
	try {
		setLoading(true);
		const { data } = await getATalent(id);
		dispatch({ type: 'FETCH_TALENT', payload: data });
		setLoading(false);
	} catch (error) {
		console.log(error);
	}
};

export const talentPatch = (id, talentData) => async (dispatch) => {
	try {
		// setLoading(true);
		const { data } = await patchTalent(id, talentData);
		dispatch({ type: 'PATCH_TALENT', payload: data });
		// setLoading(false);
	} catch (error) {
		console.log(error.message);
	}
};
