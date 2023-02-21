import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { Box, Pagination } from '@mui/material';

import { filmActions } from '../../redux/slices/filmSlice';
import { Film } from '../Film/Film';
import css from './QueryFilms.module.css'

const QueryFilms = () => {
    const dispatch = useDispatch();
    const { searchFilms, selectedQuery, totalPages } = useSelector(
        (state) => state.film
    );
    const [pageQuery, setPageQuery] = useSearchParams({ page: '1' });
    const { darkMode } = useSelector((state) => state.theme);

    useEffect(() => {
        dispatch(
            filmActions.search({
                query: selectedQuery,
                page: pageQuery.get('page'),
            })
        );
    }, [dispatch, pageQuery, selectedQuery]);

    const handleChange = (event, value) => {
        setPageQuery({ page: value });
    };

    return (
        <Box className={darkMode ? css.lightMainBox : css.darkMainBox}>
            <Box className={css.filmsBox}>
                <Box className={css.films}>
                    {searchFilms.map((film) => (
                        <Film key={film.id} film={film} />
                    ))}
                </Box>
                <Box className={css.pageDiv}>
                    <Pagination
                        count={totalPages}
                        page={+pageQuery.get('page')}
                        onChange={handleChange}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export { QueryFilms };

