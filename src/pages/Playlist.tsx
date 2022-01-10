import React, { useContext } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "../index";
import FilmCard from "../components/FilmsList/FilmCard";

const Playlist = () => {
  const { auth, firestore } = useContext(Context);
  const [user] = useAuthState(auth);
  const [films, loading] = useCollectionData(firestore.collection(user.uid));

  const deleteFilm = async (filmId: string) => {
    const ref = await firestore.collection(user.uid).doc(filmId);
    ref.delete();
  };

  console.log(films);

  if (loading) {
    return <p>подождите немного ....</p>;
  }

  return (
    <div>
      <h1>Это Ваш плейлист, наслаждайтесь ...</h1>
      <hr />
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
            <button onClick={() => deleteFilm(String(film.filmId))}>
              удалить
            </button>
          </div>
        ))}
    </div>
  );
};

export default Playlist;
