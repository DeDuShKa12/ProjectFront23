import React from 'react';
import {useNavigate} from "react-router-dom";
import {Search} from "../Search/Search";
import css from './Header.module.css'
import {useDispatch, useSelector} from "react-redux";
import {themeActions} from "../../redux/slices/themeSlice";

const Header = () => {
    let navigate = useNavigate();
    let dispatch = useDispatch();

    const {darkMode} = useSelector(state => state.theme)

    return (
        <div className={darkMode ? css.light : css.dark}>
            <div className={css.box}>
                <button className={darkMode ? css.buttonLight : css.buttonDark} onClick={()=> navigate('home')}>Home</button>
                <button className={darkMode ? css.buttonLight : css.buttonDark} onClick={()=> navigate('films')}>Films</button>
                <button className={darkMode ? css.buttonLight : css.buttonDark} onClick={()=> navigate('serials')}>Серіали</button>
            </div>
            <Search/>
            <button className={darkMode ? css.buttonThemeLight : css.buttonThemeDark} onClick={()=>dispatch(themeActions.toggleTheme())}>{darkMode ? "Dark" : "Light"} Theme</button>
            <div>User</div>
        </div>
    );
};

export {Header};