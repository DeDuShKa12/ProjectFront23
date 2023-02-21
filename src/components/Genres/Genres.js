import React, {useEffect} from 'react';
import {Genre} from "../Genre/Genre";
import {useDispatch, useSelector} from "react-redux";
import {genresActions} from "../../redux/slices/genreSlice";
import css from './Genres.module.css'

const Genres = () => {

    const dispatch = useDispatch();

    const {genres} = useSelector(state => state.genre);

    useEffect(() => {
        dispatch(genresActions.getAll())
    }, [dispatch])

    return (
        <div className={css.mainDiv}>
            <div className={css.genreBox}>
                {genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
            </div>
        </div>
    );
};

export {Genres};