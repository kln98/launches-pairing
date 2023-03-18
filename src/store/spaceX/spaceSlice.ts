import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IQueryDto } from '../../dto/spaceX.dto';
import { postLaunchesApi } from './api';

export interface SpaceState {
  launchState: IQueryDto | undefined;
  loading: boolean;
}

const initialState: SpaceState = {
  launchState: undefined,
  loading: false,
};

export const getLaunches = createAsyncThunk('getLaunches', async () => {
  const response = await postLaunchesApi();
  if (!!response) {
    return response;
  }
});

export const spaceSlice = createSlice({
  name: 'space',
  initialState,
  reducers: {
    loading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getLaunches.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getLaunches.fulfilled, (state, action) => {
        state.launchState = action.payload;
        state.loading = false;
      });
  },
});

export const { loading } = spaceSlice.actions;

export default spaceSlice.reducer;
