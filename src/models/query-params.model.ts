export interface IMarvelQueryParams {
  name: string;
  nameStartsWith: string;
  modifiedSince: string; //fecha de ultima modificacion
  comics: number[]; //lista de ids de comics
  series: number[]; //lista de ids de series
  events: number[]; //lista de ids de events
  stories: number[]; //lista de ids de stories
  orderBy: Order[];
  limit: number;
  offset: number;
}

export type Order = 'name' | 'modified' | '-name' | '-modified';
