import { fetchReleaseInfo } from '@/api/spotify';
import { TSpotifyAlbumInfo } from '@/types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

export interface ReleaseState {
  release: TSpotifyAlbumInfo | null;
  loading: boolean;
  error: string | null;
  hasError: boolean;
}

const initialState: ReleaseState = {
  release: null,
  loading: false,
  error: null,
  hasError: false,
};

export const getReleaseInfo = createAsyncThunk(
  'release/getReleaseInfo',
  async (id: string, { rejectWithValue }) => {
    try {
      return await fetchReleaseInfo(id);
    } catch (error) {
      const err = error as AxiosError<{ error: string }>;
      return rejectWithValue(err.response?.data?.error || err.message);
    }
  }
);

const releaseInfoSlice = createSlice({
  name: 'release',
  initialState,
  reducers: {
    resetRelease: (state) => {
      state.release = null;
      state.loading = false;
      state.error = null;
      state.hasError = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getReleaseInfo.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.hasError = false;
      })
      .addCase(getReleaseInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.release = action.payload;
      })
      .addCase(getReleaseInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.hasError = true;
      });
  },
});

export const { resetRelease } = releaseInfoSlice.actions;
export default releaseInfoSlice.reducer;
