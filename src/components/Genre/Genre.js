import React from 'react';
import {useNavigate} from "react-router-dom";

import css from './Genre.module.css'

const Genre = ({genre}) => {
    const {id, name} = genre

    const navigate = useNavigate();



    const searchMovie = async () => {
        navigate(`/genre/${id}`)
    };

    return (
        <button onClick={() => {searchMovie()}} className={css.buttonClose}>{name}</button>

    );
};

export {Genre};