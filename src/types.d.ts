type ContextType = {
  firebase: { [key: string]: any };
  auth: { [key: string]: any };
  firestore: { [key: string]: any };
};

interface Film {
  nameRu: string;
  posterUrlPreview: string;
  year: string;
  genres: [];
  filmId: number;
}

interface SearchPageState {
  value: string;
  searchResult: Film[];
  isLoading: boolean;
}

interface Genre {
  genre: string;
}

interface FilmCardProps {
  film: Film;
  isDeleteButton?: boolean;
}

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  text?: string;
  onClick?: () => void;
}
