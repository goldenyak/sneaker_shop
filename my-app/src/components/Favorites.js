import React, {useState} from "react";
import Card from "./Card";
import {AppContext} from "../App";

function Favorites({addToFavorite, addToCart, id, loading = true}) {

    const state = React.useContext(AppContext)

    return (
        <section className='content p-40'>
            <div className='d-flex justify-between align-center mb-30'>
                <h1> Мои закладки </h1>
            </div>
            <div className='cards d-flex justify-between flex-wrap mt-20'>
                {state.favoriteItems.map(element =>
                    <Card
                        id={element.id}
                        title={element.title}
                        price={element.price}
                        imageUrl={element.imageUrl}
                        addToCart={(obj) => addToCart(obj)}
                        addToFavorite={addToFavorite}
                    />)
                }
            </div>
        </section>
    )
}

export default Favorites;