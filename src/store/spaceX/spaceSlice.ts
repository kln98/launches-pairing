import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';
import { ICoreDto, ILaunchDto, IPayloadDto } from '../../dto/spaceX.dto';
import { getCoreApi, getLaunchesApi, getPayloadApi } from './api';

export interface SpaceState {
  launchState: ILaunchDto[] | undefined;
  coreState: ICoreDto | undefined;
  payloadState: IPayloadDto | undefined;
  loading: boolean;
}

const initialState: SpaceState = {
  launchState: undefined,
  coreState: undefined,
  payloadState: undefined,
  loading: false,
};

export const getLaunches = createAsyncThunk('getLaunches', async () => {
  const response = await getLaunchesApi();
  if (!!response) {
    return response;
  }
});

export const getCore = createAsyncThunk('getCore', async (coreId: string) => {
  const response = await getCoreApi(coreId);
  if (!!response) {
    return response;
  }
});

export const getPayload = createAsyncThunk('getPayload', async (payloadId: string) => {
  const response = await getPayloadApi(payloadId);
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
      })
      .addCase(getCore.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getCore.fulfilled, (state, action) => {
        state.coreState = action.payload;
        state.loading = false;
      })
      .addCase(getPayload.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getPayload.fulfilled, (state, action) => {
        state.payloadState = action.payload;
        state.loading = false;
      });
  },
});

export const { loading } = spaceSlice.actions;

export const selectLaunches = (state: RootState) => state?.space.launchState;
export const selectCore = (state: RootState) => state?.space.launchState;
export const selectPayload = (state: RootState) => state?.space.payloadState;

export default spaceSlice.reducer;
