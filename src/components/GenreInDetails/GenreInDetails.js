import React from 'react';
import {useNavigate} from "react-router-dom";

import css from './GenreInDetails.module.css'


const GenreInDetails = ({genre}) => {
    const {id, name} = genre

    const navigate = useNavigate();

    const goToGenre = () => {
        navigate(`/genre/${id}`)
    };

    return (
        <div className={css.box}>
                <button className={css.buttonClose} onClick={() => goToGenre()}>{ name }</button>
        </div>
    );
};

export {GenreInDetails};