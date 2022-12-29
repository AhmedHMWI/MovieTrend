import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [allMovies, setAllMovies] = useState(null);
    const [allTv, setAllTv] = useState(null);

    async function getTrendingMovies() {
        let { data } = await axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=a63ebf0b06e98126d89a8be319cdda31');
        setAllMovies(data.results);
    }

    async function getTvShows() {
        let { data } = await axios.get('https://api.themoviedb.org/3/trending/tv/week?api_key=a63ebf0b06e98126d89a8be319cdda31');
        setAllTv(data.results);
    }

    useEffect(function () {
        getTrendingMovies();
        getTvShows();
    }, [])

    return <>
        {allMovies && allTv ? <div className='container py-5'>
            <div className="row align-items-center g-3 pb-5">
                <div className="col-md-6 col-lg-4 col-sm-8">
                    <div className='title'>
                        <h3>Trending movies to watch</h3>
                        <p>Watch your favourate movies.</p>
                    </div>
                </div>
                {allMovies.slice(0, 16).map((movie, idx) => <div key={idx} className="col-md-3 col-lg-2 col-sm-4">
                    <Link to={`/moviedetails/movie/${movie.id}`}>
                        <div className="movie text-center">
                            <img src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} className='w-100 rounded' alt="movie" />
                            <h6 className='nameLayer rounded'>{movie.title}</h6>
                        </div>
                    </Link>
                </div>)}
            </div>
            <div className="row align-items-center g-3">
                <div className="col-md-6 col-lg-4 col-sm-8">
                    <div className='title'>
                        <h3>Trending TV to watch</h3>
                        <p>The most trending tv shows. </p>
                    </div>
                </div>
                {allTv.slice(0, 16).map((tv, idx) => <div key={idx} className="col-md-3 col-lg-2 col-sm-4">
                    <Link to={`/moviedetails/tv/${tv.id}`}>
                        <div className="tv text-center">
                            <img src={"https://image.tmdb.org/t/p/w500/" + tv.poster_path} className='w-100' alt="tv" />
                            <h6 className='nameLayer rounded'>{tv.name}</h6>
                        </div>
                    </Link>
                </div>)}
            </div>
        </div> : <div className="vh-100 d-flex justify-content-center align-items-center">
            <i className='fa-solid fa-spinner fa-spin fa-7x text-white'></i>
        </div>
        }
    </>;
}
export default Home;
