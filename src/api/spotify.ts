import axios from 'axios';
import { TSpotifyAlbumInfo, TSpotifyAlbums } from '@/types';
import { SPOTIFY_API_URL, SPOTIFY_AUTH_URL } from '@/constants';

let cachedToken: string | null = null;
let tokenExpiry: number | null = null;

const getAccessToken = async (): Promise<string | null> => {
  const now = Date.now();

  if (cachedToken && tokenExpiry && now < tokenExpiry) {
    return cachedToken;
  }

  try {
    const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
    const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

    const response = await axios.post(
      SPOTIFY_AUTH_URL,
      'grant_type=client_credentials',
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
        },
      }
    );

    const { access_token, expires_in } = response.data;

    cachedToken = access_token;
    tokenExpiry = now + expires_in * 1000 - 5000;

    return access_token;
  } catch (error) {
    console.error('Error fetching Spotify access token:', error);
    throw error;
  }
};

export const fetchNewReleases = async (
  limit: number,
  offset: number
): Promise<TSpotifyAlbums | null> => {
  try {
    const token = await getAccessToken();
    if (!token) return null;

    const response = await axios.get(
      `${SPOTIFY_API_URL}/browse/new-releases?limit=${limit}&offset=${offset}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    return response?.data?.albums;
  } catch (error) {
    console.error('Error fetching new releases:', error);
    throw error;
  }
};

export const fetchReleaseInfo = async (
  id: string
): Promise<TSpotifyAlbumInfo | null> => {
  try {
    const token = await getAccessToken();
    if (!token) return null;

    const response = await axios.get(`${SPOTIFY_API_URL}/albums/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response?.data;
  } catch (error) {
    console.error('Error fetching release info:', error);
    throw error;
  }
};
