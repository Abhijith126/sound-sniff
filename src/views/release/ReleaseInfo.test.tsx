import { Provider } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { MemoryRouter, Route, Routes } from 'react-router';
import { beforeEach, describe, expect, it, Mock, vi } from 'vitest';
import releaseInfoReducer, {
  getReleaseInfo,
  ReleaseState,
  resetRelease,
} from '@/store/slices/releaseInfoSlice';
import { TSpotifyAlbumInfo } from '@/types';
import { configureStore } from '@reduxjs/toolkit';
import { render, screen, waitFor } from '@testing-library/react';
import ReleaseInfo from './index';

const releaseInfoMock: TSpotifyAlbumInfo = {
  album_type: 'album',
  artists: [
    {
      name: 'Artist Name',
      id: 'artist_id',
      external_urls: { spotify: 'https://spotify.com/artist/artist_id' },
      href: 'https://api.spotify.com/v1/artists/artist_id',
    },
  ],
  available_markets: ['US', 'CA'],
  tracks: {
    href: 'https://api.spotify.com/v1/albums/album_id/tracks',
    items: [
      {
        name: 'Track 1',
        id: 'track_id_1',
        track_number: 1,
        duration_ms: 200000,
        explicit: false,
        external_urls: { spotify: 'https://spotify.com/track/track_id_1' },
        artists: [
          {
            name: 'Artist Name',
            id: 'artist_id',
            external_urls: { spotify: 'https://spotify.com/artist/artist_id' },
            href: 'https://api.spotify.com/v1/artists/artist_id',
          },
        ],
        href: 'https://api.spotify.com/v1/tracks/track_id_1',
        type: 'track',
        uri: 'spotify:track:track_id_1',
      },
    ],
    limit: 1,
    next: null,
    offset: 0,
    previous: null,
    total: 1,
  },
  release_date: '2024-01-01',
  release_date_precision: 'day',
  images: [{ url: 'https://image.url/album_cover', height: 640, width: 640 }],
  href: 'https://api.spotify.com/v1/albums/album_id',
  type: 'album',
  external_urls: { spotify: 'https://spotify.com/album/album_id' },
  uri: 'spotify:album:album_id',
  label: 'Album Label',
  popularity: 80,
  id: 'album_id',
  total_tracks: 1,
  name: 'Test Album',
};

vi.mock('react-i18next', async (importOriginal) => {
  const actual = await importOriginal<typeof import('react-i18next')>();
  return {
    ...actual,
    useTranslation: vi.fn().mockReturnValue({
      t: (key: string) => key,
    }),
  };
});

vi.mock('react-redux', async (importOriginal) => {
  const actual = await importOriginal<typeof import('react-redux')>();
  return {
    ...actual,
    useSelector: vi.fn(),
    useDispatch: vi.fn(),
  };
});

vi.mock('@/store/slices/releaseInfoSlice', async (importOriginal) => {
  const actual =
    await importOriginal<typeof import('@/store/slices/releaseInfoSlice')>();
  return {
    ...actual,
    getReleaseInfo: vi.fn(() => ({ type: 'mock/getReleaseInfo' })),
    resetRelease: vi.fn(() => ({ type: 'mock/resetRelease' })),
  };
});

const initialState: ReleaseState = {
  release: null,
  loading: false,
  error: null,
  hasError: false,
};

const createMockStore = (preloadedState: Partial<ReleaseState> = {}) => {
  return configureStore({
    reducer: {
      releaseInfo: releaseInfoReducer,
    },
    preloadedState: {
      releaseInfo: {
        ...initialState,
        ...preloadedState,
      },
    },
  });
};

const mockUseSelector = useSelector as unknown as Mock;
const mockUseDispatch = useDispatch as unknown as Mock;
const mockDispatch = vi.fn();

describe('ReleaseInfo component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockUseDispatch.mockReturnValue(mockDispatch);
  });

  const renderWithRoute = (
    state: Partial<ReleaseState>,
    route = '/release/123'
  ) => {
    const store = createMockStore(state);
    mockUseSelector.mockImplementation((selector) =>
      selector(store.getState())
    );

    return render(
      <MemoryRouter initialEntries={[route]}>
        <Provider store={store}>
          <Routes>
            <Route path="/release/:id" element={<ReleaseInfo />} />
          </Routes>
        </Provider>
      </MemoryRouter>
    );
  };

  it('should dispatch getReleaseInfo and resetRelease on mount/unmount', async () => {
    const { unmount } = renderWithRoute({});
    expect(getReleaseInfo).toHaveBeenCalledWith('123');
    unmount();
    await waitFor(() => {
      expect(resetRelease).toHaveBeenCalled();
    });
  });

  it('should show loading spinner', () => {
    renderWithRoute({ loading: true });
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });

  it('should show NotFound when no release data and not loading', () => {
    renderWithRoute({ loading: false, release: null });
    expect(screen.getByTestId('not-found')).toBeInTheDocument();
  });

  it('should render release content correctly', () => {
    renderWithRoute({ release: releaseInfoMock });

    expect(screen.getByTestId('release-name')).toHaveTextContent('Test Album');
    expect(screen.getByTestId('release-card')).toBeInTheDocument();
    expect(screen.getByTestId('tracks')).toBeInTheDocument();
  });
});
