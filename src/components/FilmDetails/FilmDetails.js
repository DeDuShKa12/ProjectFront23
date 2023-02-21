import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {filmActions} from "../../redux/slices/filmSlice";
import {useParams} from "react-router-dom";
import css from './FilmDetails.module.css'
import {GenreInDetails} from "../GenreInDetails/GenreInDetails";
import {Rating} from "@mui/material";

const FilmDetails = () => {

    const {id} = useParams();

    const dispatch = useDispatch();

    const {filmDetails} = useSelector(state => state.film);

    const {darkMode} = useSelector(state => state.theme);



    useEffect(()=>{

            dispatch(filmActions.getById({id}))

    }, [dispatch, id])

    return (
        <div className={darkMode ? css.lightMainBox:css.darkMainBox}>
            {filmDetails &&
                <div className={css.mainBox}>
                    <img className={css.imgBox} src={`https://image.tmdb.org/t/p/w500${filmDetails.poster_path}`} alt={filmDetails.title}/>

                    <div className={css.infoBox}>
                        <h2>{filmDetails.title}</h2>
                        <div className={css.genresDiv}>
                            <b>Жанри:</b> {filmDetails.genres.map(genre => <GenreInDetails key={genre.id} genre={genre}/> )}.
                        </div>
                        <div className={css.otherDiv}>
                            <b>Популярність:   </b>{filmDetails.popularity}
                        </div>
                        <div className={css.otherDiv}>
                            <b>Дата виходу: </b> {filmDetails.release_date}
                        </div>
                        <div className={css.otherDiv}>
                            <b>Рейтинг: </b> <Rating name="read-only" value={filmDetails.vote_average} max={10} precision={0.5} readOnly />
                        </div>
                        <div>
                            <b>Країна виробник: </b>{filmDetails.production_countries.map((countrie, index) => <div key={index}>{countrie.name}</div>)}
                        </div>
                        <div className={css.otherDiv}>
                            <b>Статус: </b> {filmDetails.status}
                        </div>
                        <div>
                            <b>Компанія виробник: </b> {filmDetails.production_companies.map(prodc=><div key={prodc.id}>{prodc.name}</div>)}
                        </div>
                        <h4>{filmDetails.overview}</h4>
                    </div>
                </div>

            }

        </div>
    );
};

export {FilmDetails};