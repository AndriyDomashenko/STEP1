    "use strick";

   let numberOfFilms ;

   function start(){
     numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?','');

     while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)  ){
        numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?','');
     }
   }

   start();

const personalmovieDB ={
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false

};

   function rememberMyfilms(){
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
}

//rememberMyfilms();

function detectPersonalLevel(){
if(personalmovieDB.count < 10){
    console.log('Просмотрено довольно мало фильмов');
}else if(personalmovieDB.count >= 10 && personalmovieDB.count < 30){
    console.log('Вы класичесский зритель');
}else if(personalmovieDB.count >= 30 ){
    console.log('Вы киноман');
}else{
    console.log('ERROR');
}
}

//detectPersonalLevel();

function showMyDB(hidden){
    if(!hidden ){
        console.log(personalmovieDB);
    }


}

showMyDB(personalmovieDB.privat);

function writeYourGenres(){
    for(let i = 1; i <= 3;i++){
      
        personalmovieDB.genres[i-1] =  prompt(`Ваш любимий жанр под номером ${i}`) ;
    }
}
writeYourGenres();   