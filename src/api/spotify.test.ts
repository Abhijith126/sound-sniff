import axios from 'axios';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import { fetchNewReleases, fetchReleaseInfo } from './spotify';

vi.mock('axios');
const mockedAxios = vi.mocked(axios, true);

vi.stubEnv('VITE_SPOTIFY_CLIENT_ID', 'test_client_id');
vi.stubEnv('VITE_SPOTIFY_CLIENT_SECRET', 'test_client_secret');

describe('Spotify API', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.useRealTimers();
  });

  describe('fetchNewReleases', () => {
    test('should fetch new releases with valid token', async () => {
      mockedAxios.post.mockResolvedValueOnce({
        data: { access_token: 'test_token', expires_in: 3600 },
      });

      mockedAxios.get.mockResolvedValueOnce({
        data: { albums: { items: [], limit: 20 } },
      });

      const result = await fetchNewReleases(20, 0);

      expect(mockedAxios.post).toHaveBeenCalledWith(
        'https://accounts.spotify.com/api/token',
        'grant_type=client_credentials',
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: 'Basic dGVzdF9jbGllbnRfaWQ6dGVzdF9jbGllbnRfc2VjcmV0',
          },
        }
      );

      expect(mockedAxios.get).toHaveBeenCalledWith(
        'https://api.spotify.com/v1/browse/new-releases?limit=20&offset=0',
        { headers: { Authorization: 'Bearer test_token' } }
      );

      expect(result).toEqual({ items: [], limit: 20 });
    });

    test('should return null if token fetch fails', async () => {
      mockedAxios.post.mockRejectedValueOnce(new Error('Auth error'));

      const result = await fetchNewReleases(5, 0);
      expect(result).toBeUndefined();
    });

    test('should throw error when API request fails', async () => {
      mockedAxios.post.mockResolvedValueOnce({
        data: { access_token: 'test_token', expires_in: 3600 },
      });

      mockedAxios.get.mockRejectedValueOnce(new Error('API error'));

      const consoleSpy = vi
        .spyOn(console, 'error')
        .mockImplementation(() => {});

      await expect(fetchNewReleases(10, 0)).rejects.toThrow('API error');
      expect(consoleSpy).toHaveBeenCalledWith(
        'Error fetching new releases:',
        expect.any(Error)
      );

      consoleSpy.mockRestore();
    });
  });

  describe('fetchReleaseInfo', () => {
    test('should fetch album info with valid token', async () => {
      mockedAxios.post.mockResolvedValueOnce({
        data: { access_token: 'test_token', expires_in: 3600 },
      });
      mockedAxios.get.mockResolvedValueOnce({
        data: { id: 'test_album', name: 'Test Album' },
      });

      const result = await fetchReleaseInfo('test_album');

      expect(mockedAxios.get).toHaveBeenCalledWith(
        'https://api.spotify.com/v1/albums/test_album',
        { headers: { Authorization: 'Bearer test_token' } }
      );

      expect(result).toEqual({ id: 'test_album', name: 'Test Album' });
    });

    test('should return null when token fetch fails', async () => {
      mockedAxios.post.mockRejectedValueOnce(new Error('Auth failed'));

      const result = await fetchReleaseInfo('test_album');
      expect(result).toBeUndefined();
    });

    test('should throw error when API request fails', async () => {
      mockedAxios.post.mockResolvedValueOnce({
        data: { access_token: 'test_token', expires_in: 3600 },
      });

      mockedAxios.get.mockRejectedValueOnce(new Error('API error'));

      const consoleSpy = vi
        .spyOn(console, 'error')
        .mockImplementation(() => {});

      await expect(fetchReleaseInfo('test_album')).rejects.toThrow('API error');

      expect(consoleSpy).toHaveBeenCalledWith(
        'Error fetching release info:',
        expect.any(Error)
      );

      consoleSpy.mockRestore();
    });
  });
});
