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

    const [query, setQuery] = useSearchParams({ page: '1' });

    useEffect(() => {
        dispatch(filmActions.getAll({ page: query.get('page') }));
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }, [dispatch, query]);

    const handleChangePage = (event, newPage) => {
        setQuery({ page: newPage });
    };

    return (
        <div>
            <div className={css.MainBox}>
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





