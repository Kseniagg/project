'use strict';

/*if (4 == 9) {
    console.log('Ok!');
} else {
    console.log('Error');
}*/

//const num = 50;//

/*if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Beaucoup');
} else {//
    console.log('OK!');
}*/

//(num === 50) ? console.log('Ok!') : console.log('Error');//

/*const num = 50;

switch (num) {
    case 49:
        console.log('Neverno');
        break;
    case 100:
       console.log('Neverno');
        break;
    case 50:
        console.log('verno');
        break;
    default:
        console.log('Ne v etot raz'); //clg
        break;
} */


let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

//const a = prompt('Один из последних просмотренных фильмов?', ''),
// b = prompt('На сколько его оцените?', ''),
//c = prompt('Один из последних просмотренных фильмов?', ''),
// d = prompt('На сколько его оцените?', '');

//personalMovieDB.movies[a] = b;
//personalMovieDB.movies[c] = d;



function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько его оцените?', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;  // база данных
            console.log('done');
        } else {
            console.log('error');
            i--;  // вернуть на один цикл назад (если условие не выполнилось)
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка'); // если ни одно условие не выполнилось
    }
}

detectPersonalLevel();


function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}

writeYourGenres();



