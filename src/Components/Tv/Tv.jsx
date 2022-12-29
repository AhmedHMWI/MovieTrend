import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Tv = () => {
    const [allTv, setAllTv] = useState(null);
    async function getTvShows() {
        let { data } = await axios.get('https://api.themoviedb.org/3/trending/tv/week?api_key=a63ebf0b06e98126d89a8be319cdda31');
        setAllTv(data.results);
    }

    useEffect(function () {
        getTvShows();
    }, [])

    return <>
        {allTv == null ? <div className="vh-100 d-flex justify-content-center align-items-center">
            <i className='fa-solid fa-spinner fa-spin fa-7x text-white'></i>
        </div> : <div className='container py-5'>
            <div className="row align-items-center g-3 pb-5 text-center">
                <div className="col-md-12">
                    <div className='titles'>
                        <h3 className='fs-1 border-bottom border-2 border-primary w-50 m-auto pb-2 mb-4'>Trending TV to watch</h3>
                    </div>
                </div>
                {allTv.map((tv, idx) => <div key={idx} className="col-md-3 col-lg-2 col-sm-4">
                <Link to={`/moviedetails/tv/${ tv.id }`}>
                        <div className="tv text-center">
                            <img src={"https://image.tmdb.org/t/p/w500/" + tv.poster_path} className='w-100' alt="tv" />
                            <h6 className='nameLayer rounded'>{tv.name}</h6>
                        </div>
                    </Link>
                </div>)}
            </div>
        </div>
        }
    </>;
}
export default Tv;
