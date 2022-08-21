import React, {useEffect, useState} from 'react';
import s from './Cart.module.css'

const Cart = () => {

    const [goods, setGoods] = useState([]);
    const getProducts = () => {
        const goods = JSON.parse(localStorage.getItem('cart'))
        setGoods(Object.value(goods));
    }


    useEffect(getProducts, []);

    return (
        <div className={s.container}>
            <h1>Корзина</h1>
            <table className={s.table}>
                {
                    goods.map(item =>{
                        return(
                            <tr>
                                <td><img src={item.img} alt=""/></td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td><input type="number"/></td>
                                <td>{item.count * item.price}</td>
                            </tr>
                        )
                    })
                }

            </table>
        </div>
    );
};

export default Cart;