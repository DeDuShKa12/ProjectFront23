import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { Pagination } from '@mui/material';

import { Film } from '../Film/Film';
import { filmActions } from '../../redux/slices/filmSlice';
import css from './Films.module.css';

const Films = () => {
    const dispatch = useDispatch();

    const { films, totalPages } = useSelector((state) => state.film);
    const { darkMode } = useSelector((state) => state.theme);

    const [query, setQuery] = useSearchParams({ page: '1' });

    useEffect(() => {
        dispatch(filmActions.getAll({ page: query.get('page') }));
    }, [dispatch, query]);

    const handleChangePage = (event, newPage) => {
        setQuery({ page: newPage });
    };

    return (
        <div>
            <div className={darkMode ? css.lightMainBox : css.darkMainBox}>
                <div className={css.filmsBox}>
                    <div className={css.films}>
                        {films.map((film) => (
                            <Film key={film.id} film={film} />
                        ))}
                    </div>
                    <div className={css.pageDiv}>
                        <Pagination
                            count={totalPages}
                            page={+query.get('page')}
                            onChange={handleChangePage}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export { Films };





