getData();

async function getMovieGenres(){
    try{
        const data = await fetch (apiUrl);
        const genres = await response.json();
        movieGenres(genres.genres)
        
    } catch (err){
        console.log('err')    
    }}

function movieGenres() {
    itemlist = document.getElementById('genreMovies');
    data.forEach(item => {
        itemlist.innerHTML += `<li>Genre naam: ${item.name}, id: ${item.id}</li>`;
    })}

document.addEventListener("DOMContentLoaded", getMovieGenres());
