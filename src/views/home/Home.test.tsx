import { Provider } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { MemoryRouter } from 'react-router';
import { beforeEach, describe, expect, it, Mock, vi } from 'vitest';
import musicReducer, {
  getNewReleases,
  MusicState,
} from '@/store/slices/musicSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import Home from './index';

const observeMock = vi.fn();
const disconnectMock = vi.fn();

beforeEach(() => {
  vi.clearAllMocks();

  window.IntersectionObserver = vi.fn().mockImplementation((callback) => ({
    observe: observeMock,
    disconnect: disconnectMock,
    callback,
  }));
});

vi.mock('react-redux', async (importOriginal) => {
  const actual = await importOriginal<typeof import('react-redux')>();
  return {
    ...actual,
    useSelector: vi.fn(),
    useDispatch: vi.fn(),
  };
});

vi.mock('react-i18next', async (importOriginal) => {
  const actual = await importOriginal<typeof import('react-i18next')>();
  return {
    ...actual,
    useTranslation: vi.fn().mockReturnValue({
      t: (key: string) => key,
    }),
  };
});

interface RootState {
  music: MusicState;
}

const createMockStore = (preloadedState: RootState) =>
  configureStore({
    reducer: combineReducers({
      music: musicReducer,
    }),
    preloadedState,
  });

describe('Home Component', () => {
  const mockDispatch = vi.fn();
  const mockUseSelector = useSelector as unknown as Mock;
  const mockUseDispatch = useDispatch as unknown as Mock;

  const mockState: RootState = {
    music: {
      releases: [],
      loading: false,
      error: '',
      offset: 0,
      total: 0,
      hasMore: true,
      hasError: false,
    },
  };

  beforeEach(() => {
    mockUseDispatch.mockImplementation(() => mockDispatch);
    mockUseSelector.mockImplementation((selector) => selector(mockState));
  });

  const renderComponent = () => {
    const store = createMockStore(mockState);
    return {
      store,
      renderResult: render(
        <MemoryRouter>
          <Provider store={store}>
            <Home />
          </Provider>
        </MemoryRouter>
      ),
    };
  };

  beforeEach(() => {
    mockState.music = {
      releases: [],
      error: null,
      loading: false,
      offset: 0,
      total: 0,
      hasMore: true,
      hasError: false,
    };
  });

  it('should display "title" translation key', () => {
    renderComponent();
    expect(screen.getByText('title')).toBeInTheDocument();
  });

  it('should show skeleton loader when loading', () => {
    mockState.music.loading = true;
    renderComponent();
    expect(screen.getAllByTestId('skeleton-loader').length).toBeGreaterThan(0);
  });

  it('should display error message when present', () => {
    mockState.music.error = 'API Error';
    mockState.music.loading = false;
    renderComponent();
    expect(screen.getByText('API Error')).toBeInTheDocument();
  });

  it('should show "noRecords" translation when empty', () => {
    mockState.music.loading = false;
    mockState.music.releases = [];
    renderComponent();
    expect(screen.getByText('noRecords')).toBeInTheDocument();
  });

  it('should not fetch when hasMore is false', () => {
    mockState.music.hasMore = false;
    renderComponent();
    const observerCallback = (window.IntersectionObserver as Mock).mock
      .calls[0]?.[0];
    observerCallback?.([{ isIntersecting: true }]);
    expect(mockDispatch).not.toHaveBeenCalledWith(getNewReleases.pending);
  });

  it('should not fetch when already loading', () => {
    mockState.music.loading = true;
    renderComponent();
    const observerCallback = (window.IntersectionObserver as Mock).mock
      .calls[0]?.[0];
    observerCallback?.([{ isIntersecting: true }]);
    expect(mockDispatch).not.toHaveBeenCalledWith(getNewReleases.pending);
  });
});
