import { createSlice } from '@reduxjs/toolkit';

const initialState = { isLoading: false, token: '', error: '' };

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		signIn: (state, action) => {},
		signUp: (state, action) => {},
		signOut: (state) => {
			state.token = '';
		},
		authStarted: (state) => {
			state.isLoading = true;
		},
		authSucceeded: (state, { payload }) => {
			state.token = payload.token || '';
			state.isLoading = false;
			state.error = '';
		},
		authFailed: (state, { payload }) => {
			state.error = payload.error || '';
			state.isLoading = false;
		},
		clearAuthError: (state) => {
			state.error = '';
		},
	},
});

export const {
	authStarted,
	signIn,
	signUp,
	signOut,
	authFailed,
	authSucceeded,
	clearAuthError,
} = authSlice.actions;

export default authSlice.reducer;
