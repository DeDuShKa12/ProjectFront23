import React from 'react';
import {Rating} from "@mui/material";
import {useNavigate} from "react-router-dom";

import css from './Film.module.css'



const Film = ({film}) => {

    const {title, poster_path,vote_average, id} = film

    const navigate = useNavigate();

    return (
        <div className={css.filmBox} onClick={()=>navigate(id.toString())}>
                <img className={css.imgPoster} src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title}/>

            <div className={css.infoBox}>
                <h4>{title}</h4>
                <Rating name="read-only" value={vote_average} max={10} precision={0.5} readOnly />
            </div>
        </div>
    );
};

export {Film};