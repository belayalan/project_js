/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adver = document.querySelectorAll('.promo__adv img');
     
adver[0].remove();
adver[1].remove();
adver[2].remove(); //но зачем когда есть цикл фор ич бро
//adver.forEach (item => {item.remove()}); //удаление рекламы с помощью функц

     const poster = document.querySelector('.promo__bg'); 
     const genre = poster.querySelector('.promo__genre'); // объяв постера и обращение к нему через класс

genre.innerHTML = 'Драма'; // замена жанра с комедии на драма

poster.style.backgroundImage = 'url("img/bg.jpg")'; // замена постера

const movieList = document.querySelector('.promo__interactive-list'); // обращение к классу списка без All

movieList.innerHTML = ''; // удаление списка

movieDB.movies.sort(); //сортировка 

movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
         <li class="promo__interactive-item"> ${i + 1}. ${film}
            <div class="delete"></div>
         </li>
    `;
});

// for (i = 0; i < movies.length; i++) {
//    movieList.innerHTML += `
//          <li class="promo__interactive-item"> ${i + 1}. ${movies}
//             <div class="delete"></div>
//          </li>
//     `;
// }