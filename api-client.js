const API_Key = '90fe6213ca00e7c19b576b393e7a44c1'

async function getData(){
    try{
        const apiUrl = 'https://api.themoviedb.org/3/genre/movie/list'
    
        const res =  await fetch(apiUrl, {method:'GET'})
        const processRes = await response.json()
        return processRes;
    } catch (error){
        console.log('error')
      }
 
}
