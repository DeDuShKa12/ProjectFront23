import React from 'react';
import {useNavigate} from "react-router-dom";
import css from './GenreInDetails.module.css'
import {useDispatch} from "react-redux";
import {filmActions} from "../../redux/slices/filmSlice";


const GenreInDetails = ({genre}) => {
    const {id, name} = genre

    const dispatch = useDispatch();

    const navigate = useNavigate();


    const goToGenre = () => {
        dispatch(filmActions.setSelectedGenre(id))
        navigate('/films')
    };

    return (
        <div className={css.box}>
                <button className={css.buttonClose} onClick={() => goToGenre()}>{ name }</button>
        </div>
    );
};

export {GenreInDetails};