const Key="0933b526b90f6f6b4b5ab6679215f7c8";
const baseUrl="https://api.themoviedb.org/3";

const requests={
    trending:`${baseUrl}/trending/all/day?api_key=${Key}`,
    popular:`${baseUrl}/movie/popular?api_key=${Key}&language=en-US&page=1`,
    upcomming:`${baseUrl}/movie/upcoming?api_key=${Key}&language=en-US&page=1`,
    topRated:`${baseUrl}/movie/top_rated?api_key=${Key}&language=en-US&page=1`,
    nowPlaying:`${baseUrl}/movie/now_playing?api_key=${Key}&language=en-US&page=1`,
    latest:`${baseUrl}/movie/latest?api_key=${Key}&language=en-US`,

}

export default requests;