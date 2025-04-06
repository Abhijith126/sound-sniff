type TSpotifyExternalUrls = {
  spotify: string;
};

type TSpotifyImage = {
  url: string;
  height: number;
  width: number;
};

type TSpotifyArtist = {
  name: string;
  id: string;
  href: string;
  external_urls: TSpotifyExternalUrls;
};

type TSpotifyAlbum = {
  album_type: string;
  name: string;
  id: string;
  release_date: string;
  release_date_precision: string;
  images: TSpotifyImage[];
  artists: TSpotifyArtist[];
  href: string;
  type: string;
  total_tracks: number;
  available_markets: Array<string>;
  external_urls: TSpotifyExternalUrls;
  uri: string;
  label: string;
  popularity: number;
};

type TSpotifyAlbums = {
  href: string;
  items: TSpotifyAlbum[];
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
};

type TSpotifyResponse = {
  albums: TSpotifyAlbums;
};

type TSpotifyAlbumInfo = {
  album_type: string;
  artists: TSpotifyArtist[];
  available_markets: string[];
  tracks: {
    href: string;
    items: Array<{
      name: string;
      id: string;
      track_number: number;
      duration_ms: number;
      explicit: boolean;
      external_urls: TSpotifyExternalUrls;
      artists: TSpotifyArtist[];
      href: string;
      type: string;
      uri: string;
    }>;
    limit: number;
    next: string | null;
    offset: number;
    previous: string | null;
    total: number;
  };
  release_date: string;
  release_date_precision: string;
  images: TSpotifyImage[];
  href: string;
  type: string;
  external_urls: TSpotifyExternalUrls;
  uri: string;
  label: string;
  popularity: number;
  id: string;
  total_tracks: number;
  name: string;
};

export type {
  TSpotifyExternalUrls,
  TSpotifyImage,
  TSpotifyArtist,
  TSpotifyAlbum,
  TSpotifyResponse,
  TSpotifyAlbums,
  TSpotifyAlbumInfo,
};
