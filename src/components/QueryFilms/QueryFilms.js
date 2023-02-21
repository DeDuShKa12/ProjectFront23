import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {filmActions} from "../../redux/slices/filmSlice";
import {useSearchParams} from "react-router-dom";
import css from "./QueryFilms.module.css";
import {Film} from "../Film/Film";


const QueryFilms = () => {

    const dispatch = useDispatch();

    const {searchFilms, selectedQuery} = useSelector(state1 => state1.film);

    const [pageQuery, setPageQuery] = useSearchParams({page: '1'});

    const {darkMode} = useSelector(state => state.theme);


    useEffect(() => {
        dispatch(filmActions.search({
            query: selectedQuery,
            page: pageQuery.get('page')
        }));
    }, [dispatch, pageQuery, selectedQuery])

    return (
        <div className={darkMode ? css.lightMainBox : css.darkMainBox}>
            <div className={css.filmsBox}>
                <div className={css.films}>
                    {searchFilms.map(film => <Film key={film.id} film={film}/>)}
                </div>
                <div className={css.pageDiv}>
                    <button onClick={() => setPageQuery(query => ({page: +query.get('page') - 1}))}>prev</button>
                    <button onClick={() => setPageQuery(query => ({page: +query.get('page') + 1}))}>next</button>
                </div>
            </div>
        </div>
    );
};

export {QueryFilms};