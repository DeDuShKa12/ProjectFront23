import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {filmActions} from "../../redux/slices/filmSlice";
import {useSearchParams} from "react-router-dom";
import {Film} from "../Film/Film";

import css from './Films.module.css'

const Films = () => {

    const dispatch = useDispatch();

    const {films} = useSelector(state => state.film);


    const [query, setQuery] = useSearchParams({page:'1'});

    useEffect(()=>{
        dispatch(filmActions.getAll({page:query.get('page')}))
    },[dispatch, query])


    return (
        <div className={css.mainBox}>
            <div className={css.filmsBox}>
                <div className={css.films}>

                    {films.map(film=> <Film key={film.id} film={film}/>)}
                </div>
                <div className={css.pageDiv}>
                    <button onClick={()=>setQuery(query=>({page:+query.get('page')-1}))}>prev</button>
                    <button onClick={()=>setQuery(query=>({page:+query.get('page')+1}))}>next</button>
                </div>
            </div>
        </div>

    );
};


export {Films};