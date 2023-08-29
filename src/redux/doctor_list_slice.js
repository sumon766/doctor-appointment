import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  error: null,
};
export const getDoctorList = createAsyncThunk('doctorLists/getDoctorList', async () => {
  try {
    const response = await fetch('http://localhost:3000/api/v1/doctors/').then((response) => response.json());
    return response;
  } catch (error) {
    return error.message;
  }
});

const doctorListSlice = createSlice({
  name: 'doctorLists',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getDoctorList.fulfilled,
      (state, action) => {
        // eslint-disable-next-line no-param-reassign
        state.list = action.payload;
      },
    );
    builder.addCase(
      getDoctorList.rejected,
      (state, action) => {
        // eslint-disable-next-line no-param-reassign
        state.error = action.error.message;
      },
    );
  },
});

export const { setDoctorLists } = doctorListSlice.actions;
export default doctorListSlice.reducer;
