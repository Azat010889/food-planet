import React from 'react';
import logo from "../../media/logo/LOgo.svg"
import phone from "../../media/logo/phone 1.svg"
import vector from "../../media/logo/Vector.svg"
import style from "./Header.module.css"

const Header = () => {
    return (
        <div className={style.header}>
                <div className="">
                    <img src={logo} alt=""/></div>
                <ul className={style.list}>
                    <li><a href="#">Главная</a></li>
                    <li>
                        <select name="" id="">
                            <option value=""><a href="#">Меню</a></option>
                            <option value=""><a href="#">Напитки</a></option>
                            <option value=""><a href="#">Пицца</a></option>
                        </select></li>
                    <li><a href="#">Доставка</a></li>
                    <li><a href="#">Контакты</a></li>
                </ul>
            <div className={style.phone}>
                <img src={phone} alt=""/>
                <span>+996500405988</span>
            </div>
            <div className={style.vector}>
                <img src={vector} alt=""/>
                <span>1</span>
            </div>
        </div>
    );
};

export default Header;