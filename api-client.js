const API_Key = '?api_key=90fe6213ca00e7c19b576b393e7a44c1';

async function getData(){
    try{
        const apiUrl = `https://api.themoviedb.org/3/genre/movie/list${API_KEY}`;
        const res =  await fetch(apiUrl );
        const processRes = await response.json();
        console.log(getData);
        return processRes;
    } catch (error){
        console.log('error');
      } }

