import React, { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Button from "../Button/Button";
import { Context } from "../../index";
import "./FilmCard.scss";

const FilmCard: React.FC<FilmCardProps> = ({ film, isDeleteButton }) => {
  const { auth, firestore } = useContext(Context);
  const [user] = useAuthState(auth);

  const addFilmToBase = async () => {
    await firestore.collection(user.uid).doc(String(film.filmId)).set(film);
  };

  const deleteFilm = async (filmId: string) => {
    const ref = await firestore.collection(user.uid).doc(filmId);
    ref.delete();
  };

  return (
    <div className="film-card" data-testid="film-card">
      <div className="film-card__img">
        <img src={film.posterUrlPreview} alt={film.nameRu} />
      </div>
      <p data-testid="film-name">
        {film.nameRu ? film.nameRu : "Название отсутствует"}
      </p>
      <p>{film.year}</p>
      <p>{film.genres.map((genre: Genre) => genre.genre).join(" ")}</p>
      {isDeleteButton ? (
        <Button
          onClick={() => deleteFilm(String(film.filmId))}
          text="удалить"
        />
      ) : (
        <Button onClick={addFilmToBase} text="добавить" />
      )}
    </div>
  );
};

export default FilmCard;
