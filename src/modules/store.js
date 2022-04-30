import { configureStore } from "@reduxjs/toolkit";
import questionSlice from "./questionSlice";
import userSlice from "./userSlice";

export const store = configureStore({
	reducer: {
		question: questionSlice,
		user:userSlice
	},
});

