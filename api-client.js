const API_Key = '?api_key=90fe6213ca00e7c19b576b393e7a44c1';

// async function getData(){
//     try{
//         const apiUrl = `https://api.themoviedb.org/3/genre/movie/list${API_Key}`;
//         const res =  await fetch(apiUrl);
//         const processRes = await response.json();
//         console.log(getData);
//         return processRes;
//     } catch (error){
//         console.log('dit error komt door' + error);
//       } }

const API_KEY = '?api_key=90fe6213ca00e7c19b576b393e7a44c1';
async function getMovieGenres(){
    try{
        const apiUrl = `https://api.themoviedb.org/3/genre/movie/list${API_KEY}`;
<<<<<<< HEAD
        const data = await fetch (apiUrl);
        const genres = await data.json()
     movieGenres(genres.genres);
        console.log(genres)
    } catch (err){
        console.log(err)
    }}
function movieGenres(genres) {
    itemlist = document.getElementById('genreMovies')
    genres.forEach(item => {
        itemlist.innerHTML += `<li>Genre naam: ${item.name}, id: ${item.id}</li>`;
    })}




async function getFavorite() {
    const apiUrl = `https://api.themoviedb.org/3/find/tt0111161${API_KEY}&language=en-US&external_source=imdb_id`;
    try {
        const response = await fetch(apiUrl);
        const movie = await response.json();
        const movie_results = movie.movie_results;
        myFavorite(movie_results[0].title);
    } catch (error) {
        console.log(error);
    }}

    function myFavorite(favorite) {
        movie1 = document.getElementById('favorite');
        movie1.innerHTML += favorite;}




async function getTop10() {
    const apiUrl = `https://api.themoviedb.org/3/discover/movie${API_KEY}&sort_by=popularity.desc&include_adult=false&page=1`;
      try {
        const response = await fetch(apiUrl);
        const movies = await response.json();
        const top10 = movies.results;
        mytop10(top10)
            } catch (error) {
                console.log(error);
            }}
        function mytop10(movies) {
        itemlist = document.getElementById('top10');
        for (i = 0; i < 10; i++) {
            itemlist.innerHTML += `<li>${movies[i].title}</li>`;
        }}
    


        
        
async function getTop1975() {
        const apiUrl = `https://api.themoviedb.org/3/discover/movie${API_KEY}&sort_by=popularity.desc&include_adult=false&page=1&primary_release_year=1975`;
        try {
        const response = await fetch(apiUrl);
        const movies = await response.json();
        myTop1975(movies.results)
            } catch (error) {
                console.log(error);
            }}      
        
    function myTop1975(movies) {
            itemlist = document.getElementById('top1975');
            for (i = 0; i < 10; i++) {
                itemlist.innerHTML += `<li>${movies[i].title}</li>`;
            }}
           
           
           
           
           
           
           
           
           
           
           
 document.addEventListener("DOMContentLoaded", getMovieGenres(), getFavorite(), getTop10(), getTop1975());
=======
        const res =  await fetch(apiUrl );
        const processRes = await response.json();
        console.log(getData);
        return processRes;
    } catch (error){
        console.log('error');
      } }

>>>>>>> 94aa4b53dd9c5127d852c70a09c18d6cd86ab3e0
