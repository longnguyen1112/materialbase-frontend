import { configureStore } from "@reduxjs/toolkit";
import compoundReducer from './Reducer/compoundReducer';


// const middleware = [thunk];

export const Store = configureStore({
	reducer : {
		todos: compoundReducer
	}
});

