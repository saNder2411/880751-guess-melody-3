export enum GameType {
  ARTIST = `artist`,
  GENRE = `genre`,
};

export interface AnswerArtist {
  artist: string,
  picture: string,
};

export interface AnswerGenre {
  genre: string,
  src: string,
};

export interface QuestionArtist {
  answer: AnswerArtist[],
  song: {
    artist: string,
    src: string,
  },
  type: GameType.ARTIST,
};

export interface QuestionGenre {
  answer: AnswerGenre[],
  genre: string,
  type: GameType.GENRE,
};
