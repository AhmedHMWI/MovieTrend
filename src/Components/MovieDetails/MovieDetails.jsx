import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
    const [objDetails, setObjDetails] = useState(null);
    let { id, media } = useParams();
    async function getMovieDetails() {
        let { data } = await axios.get(`https://api.themoviedb.org/3/${media}/${id}?api_key=a63ebf0b06e98126d89a8be319cdda31&language=en-US`)
        setObjDetails(data);
    }

    useEffect(() => {
        getMovieDetails();
    }, []);

    return <>
        {objDetails ? <div className="container py-5">
            <div className="row">
                <div className="col-md-4 ">
                    <div className="poster">
                        <img src={"https://image.tmdb.org/t/p/w500/" + objDetails.poster_path} className='w-75 rounded-3' alt="Movie poster" />
                    </div>
                </div>
                <div className="col-md-8 ">
                    <div className="movieDetails">
                        {objDetails.name ? <h4 className='fs-1 pb-3 border-bottom border-primary border-2 w-50 text-danger mb-5'>{objDetails.name}</h4> : <h4 className='fs-1 pb-3 border-bottom border-primary border-2 w-50 text-danger mb-5'>{objDetails.title}</h4>}
                        <p className='pb-5  text-primary fs-3'>Overview: <span className='text-light fs-4'>{objDetails.overview}</span> </p>
                        <h6 className='pb-5 fs-4  text-primary'>Vote: <span className='fs-3 text-light'>{objDetails.vote_average}</span> </h6>
                        {objDetails.genres?.map((elem, idx) =>
                            <span key={idx} className='bg-primary m-3 p-3 rounded '>
                                {elem.name}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </div> : <div className="vh-100 d-flex justify-content-center align-items-center">

            <i className='fa-solid fa-spinner fa-spin fa-7x text-white'></i>
        </div>}
    </>;
}

export default MovieDetails;
