import {useState,useEffect} from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
// 90244e59 http://www.omdbapi.com?apikey=90244e59
const API_URL='https://www.omdbapi.com/?i=tt3896198&apikey=90244e59';
// const movie1 = {
//   "Title": "Spiderman",
//   "Year": "2010",
//   "imdbID": "tt1785572",
//   "Type": "movie",
//   "Poster": "N/A"
// };
const App =()=> {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title)=>{
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = response.json();
      setMovies(data);
     console.log(data); 
  }
  // async function searchMovies(title) {
  //   try {
  //     const response = await fetch('https://www.omdbapi.com/?i=tt3896198&apikey=90244e59');
  //     const data = await response.json();
  //       setMovies();
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // }
  
  useEffect(()=>{
    searchMovies('spiderman');
  },[])
  return (
    <div className="app">
      <h1> Movie Land</h1>
      <div className="search">
        <input
        placeholder='search for movies'
        value={searchTerm} 
        onChange={(e)=>{setSearchTerm(e.target)} }/>
        <img
        src='SearchIcon'
        alt='search'
        onClick={()=>{ searchMovies(searchTerm)}}
        />
      </div>
      {
        movies?.length > 0 ? (<div className='container'>
              {movies.map((movie)=>(<MovieCard movie={ movie }/>))}
              </div>) : (
                <div className='empty'>
                  <h2>No Movies not found</h2>
                </div>
                 )
      }
      
    </div>
  );
}

export default App;
