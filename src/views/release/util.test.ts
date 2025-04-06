import { describe, expect, it } from 'vitest';
import { TSpotifyAlbumInfo } from '@/types';
import {
  calculateMinsAndSecs,
  calculateTrackDuration,
  totalTrackDuration,
} from './util';

const tracksMock: TSpotifyAlbumInfo['tracks'] = {
  items: [
    {
      duration_ms: 130000,
      name: 'Track 1',
      id: '1',
      track_number: 1,
      explicit: false,
      external_urls: { spotify: 'https://spotify.com/track/1' },
      artists: [
        {
          name: 'Artist 1',
          id: 'artist1',
          href: '',
          external_urls: {
            spotify: '',
          },
        },
      ],
      href: 'https://api.spotify.com/v1/tracks/1',
      type: 'track',
      uri: 'spotify:track:1',
    },
    {
      duration_ms: 150000,
      name: 'Track 2',
      id: '2',
      track_number: 2,
      explicit: true,
      external_urls: { spotify: 'https://spotify.com/track/2' },
      artists: [
        {
          name: 'Artist 2',
          id: 'artist2',
          href: '',
          external_urls: {
            spotify: '',
          },
        },
      ],
      href: 'https://api.spotify.com/v1/tracks/2',
      type: 'track',
      uri: 'spotify:track:2',
    },
  ],
  href: '',
  limit: 0,
  next: '',
  offset: 0,
  previous: '',
  total: 0,
};

describe('Utility Functions', () => {
  describe('calculateMinsAndSecs', () => {
    it('should calculate minutes and seconds from duration_ms', () => {
      const result = calculateMinsAndSecs(130000); // 130000 ms = 2 min 10 sec
      expect(result).toEqual({ minutes: 2, seconds: 10 });
    });

    it('should return 0 minutes and seconds for duration 0', () => {
      const result = calculateMinsAndSecs(0);
      expect(result).toEqual({ minutes: 0, seconds: 0 });
    });

    it('should calculate seconds correctly for duration less than a minute', () => {
      const result = calculateMinsAndSecs(45000); // 45000 ms = 45 sec
      expect(result).toEqual({ minutes: 0, seconds: 45 });
    });

    it('should calculate minutes correctly for more than a minute', () => {
      const result = calculateMinsAndSecs(60000); // 60000 ms = 1 min 0 sec
      expect(result).toEqual({ minutes: 1, seconds: 0 });
    });
  });

  describe('calculateTrackDuration', () => {
    it('should format track duration as "minutes:seconds"', () => {
      const result = calculateTrackDuration(130000); // 130000 ms = 2 min 10 sec
      expect(result).toBe('2:10');
    });

    it('should return 0:00 for 0 ms', () => {
      const result = calculateTrackDuration(0); // 0 ms = 0 min 0 sec
      expect(result).toBe('0:0');
    });

    it('should return correct seconds for exact duration', () => {
      const result = calculateTrackDuration(60000); // 60000 ms = 1 min 0 sec
      expect(result).toBe('1:0');
    });
  });

  describe('totalTrackDuration', () => {
    it('should calculate total track duration for an array of tracks', () => {
      const result = totalTrackDuration(tracksMock);
      expect(result).toBe('4 min 40 sec');
    });

    it('should return "0 min 0 sec" for an empty track list', () => {
      const tracks: TSpotifyAlbumInfo['tracks'] = {
        items: [],
        href: '',
        limit: 0,
        next: '',
        offset: 0,
        previous: '',
        total: 0,
      };
      const result = totalTrackDuration(tracks);
      expect(result).toBe('0 min 0 sec');
    });

    it('should handle tracks with 0 duration correctly', () => {
      const tracks = {
        ...tracksMock,
        items: tracksMock.items.map((track) => ({
          ...track,
          duration_ms: 0,
        })),
      };

      const result = totalTrackDuration(tracks);
      expect(result).toBe('0 min 0 sec');
    });

    it('should sum durations correctly when tracks have zero duration and non-zero durations', () => {
      const tracks = tracksMock;
      tracks.items[0].duration_ms = 0;

      const result = totalTrackDuration(tracks);
      expect(result).toBe('2 min 30 sec');
    });
  });
});
