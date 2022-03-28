import { configureStore } from '@reduxjs/toolkit';
import cardContentReducer from './slices/cardContent';

export default configureStore({
	reducer: {
		cardContent: cardContentReducer,
	},
});
