export interface Show {
  id: number,
  name: string,
  url: string,
  type: string,
  language: string,
  genres: string[],
  status: string,
  runtime: number,
  averageRuntime: number,
  premiered: string,
  ended: string,
  officialSite: string,
  schedule: Schedule,
  rating: Rating,
  weight: number,
  network: Network,
  webChannel: string | null,
  dvdCountry: string | null,
  externals: Externals,
  image: Image,
  summary: string,
  updated: number,
  _links: {
    self: Self,
    previousepisode: Previousepisode
  }
};

export interface Genre {
  genre: string
}

export interface Schedule {
  time: string,
  days: string[]
};

export interface Rating {
  average: number
};

export interface Network {
  id: number,
  name: string,
  country: Country,
  officialSite: string
};

export interface Country {
  name: string,
  code: string,
  timezone: string
};

export interface Externals {
  tvrage: number,
  thetvdb: number,
  imdb: string
};

export interface Image {
  medium: string,
  original: string
};

export interface Self {
  href: string
};

export interface Previousepisode {
  href: string,
  name: string
};

export interface Route {
  params: Id
}

export interface Id {
  id: number
}