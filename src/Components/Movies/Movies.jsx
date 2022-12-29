import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Movies = () => {
    const [allMovies, setAllMovies] = useState(null);
    async function getTrendingMovies() {
        let { data } = await axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=a63ebf0b06e98126d89a8be319cdda31');
        setAllMovies(data.results);
    }

    useEffect(function () {
        getTrendingMovies();
    }, [])
    
    return <>
        {allMovies == null ? <div className="vh-100 d-flex justify-content-center align-items-center">
            <i className='fa-solid fa-spinner fa-spin fa-7x text-white'></i>
        </div> : <div className='container py-5'>
            <div className="row align-items-center g-3 pb-5 text-center">
                <div className="col-md-12">
                    <div className='titles'>
                        <h3 className='fs-1 border-bottom border-2 border-primary w-50 m-auto pb-2 mb-4'>Trending movies to watch</h3>
                    </div>
                </div>
                {allMovies.map((movie, idx) => <div key={idx} className="col-md-2">
                    <Link to={`/moviedetails/movie/${movie.id}`}>
                        <div className="movie text-center">
                            <img src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} className='w-100 rounded' alt="movie" />
                            <h6 className='nameLayer rounded'>{movie.title}</h6>
                        </div>
                    </Link>
                </div>)}
            </div>
        </div>}
    </>;
}
export default Movies;
