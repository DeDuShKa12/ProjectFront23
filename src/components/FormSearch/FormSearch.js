import React from 'react';
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {filmActions} from "../../redux/slices/filmSlice";
import css from './FormSearch.module.css'
import {BiSearchAlt} from "react-icons/bi";


const FormSearch = () => {

    const {reset, register, handleSubmit} = useForm();

    const navigate = useNavigate();

    const dispatch = useDispatch();


    const searchMovie = async (query) => {
        dispatch(filmActions.setSelectedQuery(query))
        await navigate('search')
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