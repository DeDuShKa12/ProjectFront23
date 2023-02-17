import React from 'react';
import css from './Film.module.css'


const Film = ({film}) => {

    const {original_title, poster_path} = film

    return (
        <div className={css.filmBox}>
            <div className={css.imgBox}>

                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={original_title}/>
            </div>
            <div className={css.titleBox}>{original_title}</div>
        </div>
    );
};

export {Film};