import React, {useContext} from "react";
import {AppContext} from "../App";
import Card from "./Card";


function Orders() {

    const {cartItems, addToFavorite} = useContext(AppContext)

    return (
        <section className='content p-40'>
            <div className='d-flex justify-between align-center mb-30'>
                <h1> Мои заказы </h1>
            </div>
            <div className='cards d-flex justify-between flex-wrap mt-20'>
                {cartItems.map(element =>
                    <Card
                        id={element.id}
                        title={element.title}
                        price={element.price}
                        imageUrl={element.imageUrl}
                        loading={false}
                    />)
                }

            </div>
        </section>
    )
}

export default Orders;