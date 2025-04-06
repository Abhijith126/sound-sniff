import { TSpotifyAlbumInfo } from '@/types';

const calculateMinsAndSecs = (duration_ms: number) => {
  const minutes = Math.floor(duration_ms / 60000);
  const seconds = Math.floor((duration_ms % 60000) / 1000);
  return {
    minutes,
    seconds,
  };
};

const calculateTrackDuration = (duration_ms: number) => {
  const { minutes, seconds } = calculateMinsAndSecs(duration_ms);
  return `${minutes}:${seconds}`;
};

const totalTrackDuration = (tracks: TSpotifyAlbumInfo['tracks']) => {
  const totalDurationMs =
    tracks?.items.reduce((acc, track) => acc + track.duration_ms, 0) ?? 0;
  const { minutes, seconds } = calculateMinsAndSecs(totalDurationMs);
  return `${minutes} min ${seconds} sec`;
};

export { calculateTrackDuration, totalTrackDuration, calculateMinsAndSecs };
