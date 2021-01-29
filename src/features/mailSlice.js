import { createSlice } from "@reduxjs/toolkit";

export const mailSlice = createSlice({
	name: "mail",
	initialState: {
		sendMessageisOpen: false,
		selectedMail: null,
	},
	reducers: {
		selectMail: (state, action) => {
			state.selectedMail = action.payload;
		},
		openSendMessage: (state) => {
			state.sendMessageisOpen = true;
		},
		closeSendMessage: (state) => {
			state.sendMessageisOpen = false;
		},
	},
});

export const {
	selectMail,
	openSendMessage,
	closeSendMessage,
} = mailSlice.actions;

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageisOpen;
export const selectOpenMail = (state) => state.mail.selectedMail;

export default mailSlice.reducer;
