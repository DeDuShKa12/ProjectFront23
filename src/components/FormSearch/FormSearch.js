import React from 'react';
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {BiSearchAlt} from "react-icons/bi";

import {filmActions} from "../../redux/slices/filmSlice";
import css from './FormSearch.module.css'


const FormSearch = () => {

    const {reset, register, handleSubmit} = useForm();

    const navigate = useNavigate();

    const dispatch = useDispatch();


    const searchMovie = (query) => {
        dispatch(filmActions.setSelectedQuery(query))
        navigate('search')
        reset()
    };

    return (
            <form className={css.formBox} onSubmit={handleSubmit(searchMovie)}>
                <input type={'text'} placeholder={'   Search'} {...register('name')}/>
                <button><BiSearchAlt className={css.biSearch}/></button>
            </form>
    );
};

export {FormSearch};