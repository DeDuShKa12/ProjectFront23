import React from 'react';
import css from './Genre.module.css'
import {useDispatch} from "react-redux";
import {filmActions} from "../../redux/slices/filmSlice";

const Genre = ({genre}) => {
    const {id, name} = genre

    const dispatch = useDispatch();


    const searchMovie = async () => {
        dispatch(filmActions.setSelectedGenre(id))
    };

    return (
        <button onClick={() => {searchMovie()}} className={css.buttonClose}>{name}</button>

    );
};

export {Genre};