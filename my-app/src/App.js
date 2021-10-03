import './App.scss';
import Header from "./components/Header";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import React, {useState} from "react";
import axios from "axios";
import {Route} from "react-router-dom";
import Favorites from "./components/Favorites";

const AppContext = React.createContext({})

function App() {

    const [items, setItems] = useState([]) // Товары - берем с сервера mockapi
    const [openCart, setOpenCart] = useState(false) // Показ/скрытие корзины
    const [cartItems, setCartItems] = useState([]) // Товары в корзине
    const [favoriteItems, setFavoriteItems] = useState([])
    const [searchValue, setSearchValue] = useState('') // Работаем с инпутом ПОИСК
    const [isLoading, setIsLoading] = useState(true)

    React.useEffect(() => {
        async function fetchData() {
            const cartResponse = await axios.get('https://614a2f5207549f001755a841.mockapi.io/cart')
            const favoriteResponse = await axios.get('https://614a2f5207549f001755a841.mockapi.io/favorites')
            const itemsResponse = await axios.get('https://614a2f5207549f001755a841.mockapi.io/items')

            setIsLoading(false)

            setCartItems(cartResponse.data)
            setFavoriteItems(favoriteResponse.data)
            setItems(itemsResponse.data)
        }

        fetchData()

    }, []) // Запросы на сервак = Получаем данные с сервера.

    const cartOpened = () => {
        setOpenCart(!openCart)
    } // Показ/скрытие корзины
    const addToCart = (obj) => {
        if (cartItems.find(item => Number(item.id) === Number(obj.id))) {
            axios.delete(`https://614a2f5207549f001755a841.mockapi.io/cart/${obj.id}`)
            setCartItems([...cartItems].filter(fItem => Number(fItem.id) !== Number(obj.id)))
        } else {
            axios.post('https://614a2f5207549f001755a841.mockapi.io/cart', obj)
            setCartItems([...cartItems, obj])
        }

    } // Добавление товаров в корзину
    const addToFavorite = async (obj) => {
        console.log(obj)
        if (favoriteItems.find(favObj => favObj.id === obj.id)) {
            axios.delete(`https://614a2f5207549f001755a841.mockapi.io/favorites/${obj.id}`)
            setFavoriteItems([...favoriteItems].filter(element => element.id !== obj.id))
        } else {
            const {data} = await axios.post('https://614a2f5207549f001755a841.mockapi.io/favorites', obj)
            setFavoriteItems([...favoriteItems, data])
        }
    } // Добавление в мои закладки
    const removeToCart = (id) => {
        console.log(id)
        axios.delete(`https://614a2f5207549f001755a841.mockapi.io/cart/${id}`)
        setCartItems([...cartItems].filter(element => element.id !== id))
    } // Удаление товаров из корзины
    const onChangeSearchInput = (event) => {
        setSearchValue(event.currentTarget.value)
    } // Работаем с инпутом ПОИСК
    const renderItems = () => {
        const filteredItems = items.filter(element => element.title.toLowerCase().includes(searchValue.toLowerCase()))
        return (isLoading ? [...Array(8)].map(element => <Card loading={isLoading}/>)
            : filteredItems).map(element =>
            <Card
                id={element.id}
                title={element.title}
                price={element.price}
                imageUrl={element.imageUrl}
                addToCart={(obj) => addToCart(obj)}
                addToFavorite={addToFavorite}
                isFavorite={false}
                added={cartItems.some(obj => Number(obj.id) === Number(element.id))}
                loading={isLoading}
            />)

    } // Через функцию рендерим товары на главной странице в зависимости от того, произошла ли полная загрузка

    return (
        <AppContext.Provider value={{items, cartItems, favoriteItems}}>
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
                            {renderItems()}
                        </div>
                    </section>
                </Route>
                <Route path="/favorites">
                    <Header cartOpened={cartOpened}/>
                    <Favorites items={favoriteItems}
                               addToFavorite={addToFavorite}
                               addToCart={(obj) => addToCart(obj)
                               }/>
                </Route>
            </section>
        </AppContext.Provider>

    );
}

export default App;
