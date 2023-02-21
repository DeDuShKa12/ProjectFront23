import React from 'react';
import {useNavigate} from "react-router-dom";
import css from './Header.module.css'
import {useDispatch, useSelector} from "react-redux";
import {themeActions} from "../../redux/slices/themeSlice";
import {FormSearch} from "../FormSearch/FormSearch";
import {filmActions} from "../../redux/slices/filmSlice";

const Header = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const {darkMode} = useSelector(state => state.theme)

    const mod = darkMode ? css.buttonLight : css.buttonDark

    const films = () => {
        dispatch(filmActions.delSelectedGenre())
        navigate('films')
    };

    return (
        <div className={darkMode ? css.light : css.dark}>
            <div className={css.box}>
                <button className={mod} onClick={()=> navigate('home')}>Home</button>
                <button className={mod} onClick={()=> films()}>Films</button>
                <button className={mod}>Серіали</button>
            </div>
            <FormSearch/>
            <button className={darkMode ? css.buttonThemeLight : css.buttonThemeDark} onClick={()=>dispatch(themeActions.toggleTheme())}>{darkMode ? "Dark" : "Light"} Theme</button>
            <div className={css.userDiv}>P</div>
        </div>
    );
};

export {Header};