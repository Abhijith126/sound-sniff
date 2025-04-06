import { fetchNewReleases } from '@/api/spotify';
import { RELEASES_LIMIT } from '@/constants';
import { TSpotifyAlbum } from '@/types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

export interface MusicState {
  releases: TSpotifyAlbum[];
  loading: boolean;
  error: string | null;
  offset: number;
  total: number;
  hasMore: boolean;
  hasError: boolean;
}

const initialState: MusicState = {
  releases: [] as TSpotifyAlbum[],
  loading: false,
  error: null as string | null,
  offset: 0,
  total: 0,
  hasMore: true,
  hasError: false,
};

export const getNewReleases = createAsyncThunk(
  'music/getNewReleases',
  async (offset: number = 0, { rejectWithValue }) => {
    try {
      return await fetchNewReleases(RELEASES_LIMIT, offset);
    } catch (error) {
      const err = error as AxiosError<{ error: string }>;
      return rejectWithValue(err.response?.data?.error || err.message);
    }
  }
);

const musicSlice = createSlice({
  name: 'music',
  initialState,
  reducers: {
    resetReleases: (state) => {
      state.releases = [];
      state.offset = 0;
      state.hasMore = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNewReleases.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.hasError = false;
      })
      .addCase(getNewReleases.fulfilled, (state, action) => {
        state.loading = false;
        state.releases = [...state.releases, ...(action?.payload?.items || [])];
        state.total = action.payload ? action.payload.total : 0;
        state.offset += RELEASES_LIMIT;
        state.hasMore = action.payload
          ? state.offset < action.payload.total
          : false;
      })
      .addCase(getNewReleases.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.hasError = true;
      });
  },
});

export const { resetReleases } = musicSlice.actions;
export default musicSlice.reducer;
