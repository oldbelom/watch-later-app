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

  if (loading) {
    return (
      <div className="absolute-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="page-indent">
      <h2>Фильмы, которые вы добавили:</h2>
      <div className="search-page__result">
        {films &&
          films.map((film: any) => (
            <FilmCard key={film.filmId} film={film} isDeleteButton />
          ))}
      </div>
    </div>
  );
};

export default Playlist;
