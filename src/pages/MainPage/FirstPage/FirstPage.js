import React from 'react';
import arrow from "../../../media/logo/Vector 2.png"
import style from "./FirstPage.module.css"
import burger from "../../../media/images/burger.jpg"

const FirstPage = () => {

    return (
        <div className={style.burger}>
           <div className={style.first}>
                <div className={style.burger1}>
                    <h1>Доставка вкусной еды до 30 минут + напиток в подарок!</h1>
                </div>
                <div className={style.burger2} >
                    <p>Доставим заказ вовремя и можете рассчитывать, что еда будет доставлен всегда горячим и ароматным.</p>
                </div>

                   <button>ПЕРЕЙТИ В МЕНЮ <img src={arrow} alt=""/></button>

           </div>
            <div className={style.burger_img}>
                <img src={burger} alt=""/>
            </div>
        </div>
    );
};

export default FirstPage;
