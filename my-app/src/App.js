import './App.scss';
import Header from "./components/Header";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import React, {useState} from "react";
import axios from "axios";
import {Route} from "react-router-dom";
import Favorites from "./components/Favorites";


function App() {

    const [items, setItems] = useState([]) // Товары
    const [openCart, setOpenCart] = useState(false) // Показ/скрытие корзины
    const [cartItems, setCartItems] = useState([]) // Товары в корзине
    const [favoritItems, setFavoritItems] = useState([])
    const [searchValue, setSearchValue] = useState('') // Работаем с инпутом ПОИСК

    React.useEffect(() => {
        // fetch('https://614a2f5207549f001755a841.mockapi.io/items')
        //     .then(res => {
        //         return res.json()
        //     })
        //     .then(json => {
        //         setItems(json)
        //     });
        axios.get('https://614a2f5207549f001755a841.mockapi.io/items').then(res => {
            setItems(res.data)
        });
        axios.get('https://614a2f5207549f001755a841.mockapi.io/cart').then(res => {
            setCartItems(res.data)
        });
        axios.get('https://614a2f5207549f001755a841.mockapi.io/favorites').then(res => {
            setFavoritItems(res.data)
        });
    }, []) // Запросы на сервак = Получаем данные с сервера.

    const cartOpened = () => {
        setOpenCart(!openCart)
    } // Показ/скрытие корзины
    const addToCart = (obj) => {
        axios.post('https://614a2f5207549f001755a841.mockapi.io/cart', obj)
        setCartItems([...cartItems, obj])
    } // Добавление товаров в корзину
    const addToFavorite = (obj) => {
        axios.post('https://614a2f5207549f001755a841.mockapi.io/favorites', obj)
        setFavoritItems([...favoritItems, obj])

    } // Добавление в мои закладки
    const removeToCart = (id) => {
        console.log(id)
        axios.delete(`https://614a2f5207549f001755a841.mockapi.io/cart/${id}`)
        setCartItems([...cartItems].filter(element => element.id !== id))
    } // Удаление товаров из корзины
    const onChangeSearchInput = (event) => {
        setSearchValue(event.currentTarget.value)
    } // Работаем с инпутом ПОИСК

    return (

        <section className='wrapper clear'>
            {openCart ? <Drawer items={cartItems} cartOpened={cartOpened} removeToCart={removeToCart}/> : null}

            <Route exact path="/">
                <Header cartOpened={cartOpened}/>
                <section className='content p-40'>
                    <div className='d-flex justify-between align-center mb-30'>
                        <h1> {searchValue ? `Поиск по слову: "${searchValue}"` : 'Все кроссовки'} </h1>
                        <div className='search_block d-flex'>
                            <img src='/icons/search.svg' alt='Search'/>
                            <input onChange={onChangeSearchInput}
                                   value={searchValue}
                                   placeholder='Поиск...'/>
                            {searchValue && <img className='cu-p'
                                                 onClick={() => setSearchValue('')}
                                                 src='/icons/close_search.svg'
                                                 alt='Close'/>}
                        </div>
                    </div>
                    <div className='cards d-flex justify-between flex-wrap mt-20'>
                        {items.filter(element => element.title.toLowerCase().includes(searchValue.toLowerCase())).map(element =>
                            <Card
                                title={element.title}
                                price={element.price}
                                imageUrl={element.imageUrl}
                                addToCart={(obj) => addToCart(obj)}
                                addToFavorite={addToFavorite}
                                isFavorite={false}/>)}
                    </div>
                </section>
            </Route>
            <Route path="/favorites">
                <Header cartOpened={cartOpened}/>
                <Favorites items={favoritItems}/>
            </Route>


        </section>
    );
}

export default App;
