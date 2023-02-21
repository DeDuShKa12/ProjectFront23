import React from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import css from './Header.module.css'
import {themeActions} from "../../redux/slices/themeSlice";
import {FormSearch} from "../FormSearch/FormSearch";

const Header = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const {darkMode} = useSelector(state => state.theme)

    const mod = darkMode ? css.buttonLight : css.buttonDark


    return (
        <div className={darkMode ? css.light : css.dark}>
            <div className={css.box}>
                <button className={mod}>Home</button>
                <button className={mod} onClick={()=> navigate('films')}>Films</button>
                <button className={mod}>Серіали</button>
            </div>
            <FormSearch/>
            <button className={darkMode ? css.buttonThemeLight : css.buttonThemeDark} onClick={()=>dispatch(themeActions.toggleTheme())}>{darkMode ? "Dark" : "Light"} Theme</button>
            <div className={css.userDiv}>P</div>
        </div>
    );
};

export {Header};