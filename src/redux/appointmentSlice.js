import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAppointment = createAsyncThunk('Appointment/fetchAppointment',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('http://localhost:3000/api/v1/appointments');

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ errorMessage: 'Failed to fetch appointments', error });
    }
  });

export const addAppointment = createAsyncThunk('Appointment/addAppointment',
  async (newAppointment) => {
    try {
      const response = await axios.post('http://localhost:3000/api/v1/appointments', newAppointment);

      return response.data;
    } catch (error) {
      return error;
    }
  }
);

const initialState = {
  appointmentlists: [],
  loading: false,
  error: null,
};

const appointmentSlice = createSlice({
  name: 'Appointment',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAppointment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAppointment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchAppointment.fulfilled, (state, action) => {
        state.loading = false;
        state.appointmentlists = action.payload;
      })
      .addCase(addAppointment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addAppointment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addAppointment.fulfilled, (state, action) => {
        state.loading = false;
        state.appointmentlists = action.payload;
      });
  }
});

export default appointmentSlice.reducer;
