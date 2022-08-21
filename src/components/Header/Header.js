import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import styles from "./Header.module.css";
import headerLogo from "../../media/images/headerLogo.png"
import bundle from "../../media/logo/bundle.svg"
import tel from "../../media/logo/tel.svg"

const Header = () => {

    return (
            <div className={styles.headerWrapper}>
                <div className={styles.headerLogo} id="headerLogo">
                    <img src={headerLogo} alt="headerLogo"/>
                </div>
                <ul className={styles.headerMenu}>
                    <li><NavLink to="/" className={styles.headerItem}>Главная</NavLink></li>
                    <li><NavLink to="/menu" className={styles.headerItem}>Меню</NavLink></li>
                    <li><NavLink to="/order" className={styles.headerItem}>Доставка</NavLink></li>
                    <li><NavLink to="/contacts" className={styles.headerItem}>Контакты</NavLink></li>
                    <li className={styles.headerItemTel}>
                        <img src={tel} alt="" className={styles.headerTel}/>
                        +996500405988
                    </li>
                    <li className={styles.headerItemBundle}>
                        <NavLink to="/cart" className={styles.shopCartButton}><img src={bundle} alt="bundle" className={styles.bundleOne}/></NavLink>
                        1
                    </li>
                </ul>
            </div>
    );
};

export default Header;