    "use strick";

   const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?','');

const personalmovieDB ={
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false

};

          
     
    
     
for(let i = 0; i < 2; i++){
    const a = prompt('Один из последних просмотреных фильмов?',''),
      b = prompt('На сколько  оцените его?','');

      if(a != null && b != null && a != '' && b != '' && a.length <50 ){
        personalmovieDB.movies[a] = b;
        console.log('done');
      }else{
    console.log('eror');
        i--;

}
}
if(personalmovieDB.count < 10){
    console.log('Просмотрено довольно мало фильмов');
}else if(personalmovieDB.count >= 10 && personalmovieDB.count < 30){
    console.log('Вы класичесский зритель');
}else if(personalmovieDB.count >= 30 ){
    console.log('Вы киноман');
}else{
    console.log('ERROR');
}

console.log( personalmovieDB);


      