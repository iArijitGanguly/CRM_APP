import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    role: localStorage.getItem('role') || '',
    data: localStorage.getItem('data') || {},
    isLoggedIn: localStorage.getItem('isLoggedIn') || false
  },
  reducers: {}
});

export default authSlice.reducer;