import React from 'react';
import {NavLink} from "react-router-dom";
import css from './GenreInDetails.module.css'

const GenreInDetails = ({genre}) => {
    const {id, name} = genre
    return (
        <div className={css.box}>
            <NavLink to={`/search`} state={id.toString()}>{ name }</NavLink>
        </div>
    );
};

export {GenreInDetails};