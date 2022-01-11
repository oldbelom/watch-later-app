import React, { useContext } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "../index";
import FilmCard from "../components/FilmCard/FilmCard";
import Loader from "../components/Loader/Loader";

const Playlist = () => {
  const { auth, firestore } = useContext(Context);
  const [user] = useAuthState(auth);
  const [films, loading] = useCollectionData(firestore.collection(user.uid));

  const deleteFilm = async (filmId: string) => {
    const ref = await firestore.collection(user.uid).doc(filmId);
    ref.delete();
  };

  if (loading) {
    return (
      <div className="absolute-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="page-indent">
      <h2>Список фильмов, которые вы добавили:</h2>
      <div className="search-page__result">
        {films &&
          films.map((film: any, index: number) => (
            <div key={`${index}_${film.year}`}>
              <FilmCard
                nameRu={film.nameRu}
                year={film.year}
                posterUrlPreview={film.posterUrlPreview}
                genres={film.genres}
                film={film}
              />
              {/* <button onClick={() => deleteFilm(String(film.filmId))}>удалить</button> */}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Playlist;
