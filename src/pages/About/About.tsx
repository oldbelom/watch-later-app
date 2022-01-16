import React from "react";
import "./About.scss";

export default function About() {
  return (
    <div className="about page-indent" data-testid="about">
      <h1>О проекте</h1>
      <p>
        В проекте настроено использование параметризированного роутинга. Если на
        главной странице с поиском фильмов в url после двоеточя указать название
        фильма &quot;/:брат2&quot;, то название появится в инпуте для поиска.
      </p>
      <p>Есть обработка ошибок при регистрации/входе в приложение.</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad voluptate ab
        atque autem obcaecati fugiat magnam voluptatum doloremque natus
        quibusdam?
      </p>
    </div>
  );
}
