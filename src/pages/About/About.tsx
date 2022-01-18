import React from "react";
import "./About.scss";

export default function About() {
  return (
    <div className="about page-indent" data-testid="about">
      <h2>Добро пожаловать в &quot;Watch later&quot;</h2>
      <p>Это приложение поможет вам сохранить драгоценные время и нервы.</p>
      <p>
        Наткнулись на интересный трейлер? Не смотрели что-нибудь из классики
        кинематографа? Ваши друзья при каждой встрече засыпают вас кучей
        названий новых классных сериалов?
      </p>
      <p>Тогда &quot;Watch later&quot; - это то что вам нужно!</p>
      <p>
        Составьте свой плейлист и в следующий раз, когда вы захотите отдохнуть
        за просмотром чего-нибудь интересного, вам больше не придётся мучительно
        вспоминать &quot;тот самый&quot; фильм или сериал.
      </p>
      <p>
        Также, для вашего удобства, &quot;Watch later&quot; адаптировано под
        мобильные устройства.
      </p>
      <p>
        Кстати, начать искать фильм можно не переходя на сайт, просто добавьте в
        адресной строке вашего браузера &quot;/film/<span>название</span>&quot;
        к адресу сайта и переходите по ссылке.
      </p>
    </div>
  );
}
