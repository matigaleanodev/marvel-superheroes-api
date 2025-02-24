export interface MarvelApiResponse<T> {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: T;
}

export interface MarvelCharacterData {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: MarvelCharacter[];
}

export interface MarvelCharacter {
  readonly id: number;
  readonly name: string;
  readonly description: string;
  readonly modified: string;
  readonly thumbnail: CharacterThumbnail;
  readonly resourceURI: string;
  readonly comics: CharacterList<Comic>;
  readonly series: CharacterList<Serie>;
  readonly stories: CharacterList<Story>;
  readonly events: CharacterList<MarvelEvent>;
  readonly urls: MarvelCharacterUrl[];
}

interface CharacterThumbnail {
  path: string;
  extension: string;
}

interface CharacterList<T> {
  available: number;
  collectionURI: string;
  items: T[];
  returned: number;
}

type Comic = MarvelDataItem;

type Serie = MarvelDataItem;

type MarvelEvent = MarvelDataItem;

interface Story extends MarvelDataItem {
  resourceURI: string;
}

interface MarvelDataItem {
  resourceURI: string;
  name: string;
}

interface MarvelCharacterUrl {
  type: UrlType;
  url: string;
}

type UrlType = 'detail' | 'wiki' | 'comiclink';
