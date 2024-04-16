import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import axiosInstance from '../../configs/axiosInstance';

interface LoginData {
  email: string;
  password: string;
}

export const login = createAsyncThunk('/auth/login', async (data: LoginData) => {
  try {
    const response = await axiosInstance.post('/auth/signin', data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

interface UserState {
  role: string,
  data: object,
  token: string,
  isLoggedIn: boolean
}

const storedData = localStorage.getItem('data');
const initialState: UserState = {
  role: localStorage.getItem('role') || '',
  data: storedData ? JSON.parse(storedData) : undefined, // Parse the stored data as an object
  token: localStorage.getItem('token') || '',
  isLoggedIn: localStorage.getItem('isLoggedIn') == 'true' // Parse as boolean
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoggedIn = (action.payload.token != undefined);
      state.data = action.payload.userData;
      state.token = action.payload.token;
      state.role = action.payload.userData?.userType;

      localStorage.setItem('role', action.payload.userData?.userType || '');
      localStorage.setItem('isLoggedIn', (action.payload.token != undefined).toString());
      localStorage.setItem('data', JSON.stringify(action.payload.userData));
      localStorage.setItem('token', action.payload.token || '');
    });
  }
});

export default authSlice.reducer;