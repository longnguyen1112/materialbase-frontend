import {
	CREATE_COMPOUND,
	RETRIEVE_COMPOUND,
    RETRIEVE_COMPOUNDS,
	UPDATE_COMPOUND,
	DELETE_COMPOUND,
	DELETE_ALL_COMPOUNDS,
} from "../Constant/compoundType";

const initialState = [];

function compoundReducer(compounds = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case CREATE_COMPOUND:
			return [...compounds, payload];

		case RETRIEVE_COMPOUND:
			return payload;

        case RETRIEVE_COMPOUNDS:
            return payload;

		case UPDATE_COMPOUND:
			return compounds.map((compound) => {
				if(compound.id === payload.id) {
					return {
						...compound,
						...payload,
					};
				} else {
					return compound;
				}
			});

		case DELETE_COMPOUND:
			return compounds.filter(({id}) => id !== payload.id);

		case DELETE_ALL_COMPOUNDS:
			return [];

		default:
			return compounds;
	}
};

export default compoundReducer;