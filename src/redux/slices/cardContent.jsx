import { createSlice } from '@reduxjs/toolkit';

export const cardContent = createSlice({
	name: 'cardContent',
	initialState: {
		startDate: '',
    endDate: '',
    kilometers: '',
    owners: '',
    modelId: '',
    brandName: '',
    brandModel: '',
	},
  reducers: {
    sendStartDate: (state, action) => {
			state.startDate = action.payload;
		},
		sendEndDate: (state, action) => {
			state.endDate = action.payload;
		},
		sendKilometers: (state, action) => {
			state.kilometers = action.payload;
		},
		sendOwners: (state, action) => {
			state.owners = action.payload;
    },
    sendModelId: (state, action) => {
      state.modelId = action.payload;
    },
    sendBrandName: (state, action) => {
      state.brandName = action.payload;
    },
    sendBrandModel: (state, action) => {
      state.brandModel = action.payload;
    }
	},
});

export const { sendEndDate, sendStartDate, sendKilometers, sendOwners, sendModelId, sendBrandModel, sendBrandName } = cardContent.actions;

export default cardContent.reducer;
