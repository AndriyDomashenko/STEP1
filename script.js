    "use strick";

   const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?','');

const personalmovieDB ={
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false

};

const a = prompt('Один из последних просмотреных фильмов?',''),
      b = prompt('На сколько  оцените его?',''),
      c = prompt('Один из последних просмотреных фильмов?',''),
      d = prompt('На сколько  оцените его?','');           
     
      personalmovieDB.movies[a] = b;
      personalmovieDB.movies[c] = d;
      console.log(personalmovieDB);