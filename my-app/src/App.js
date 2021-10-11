import './App.scss';
import Header from "./components/Header";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import React, {useState} from "react";
import axios from "axios";
import {Route} from "react-router-dom";
import Favorites from "./components/Favorites";
import Orders from "./components/Orders";

export const AppContext = React.createContext({}) // Создаем контекст, чтобы можно было брать данные в любом компоненте и не прокидывать через пропсы

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
    const addToCart = async (obj) => {
        try {
            const findItem = cartItems.find(item => Number(item.parentID) === Number(obj.id))
            if (findItem) {
                setCartItems([...cartItems].filter(item => Number(item.parentID) !== Number(obj.id)))
                axios.delete(`https://614a2f5207549f001755a841.mockapi.io/cart/${findItem.id}`)

            } else {
                setCartItems([...cartItems, obj])
                const {data} = await axios.post('https://614a2f5207549f001755a841.mockapi.io/cart', obj)
                setCartItems((prev) => prev.map(item => {
                    if (item.parentID === data.parentID) {
                        return {
                            ...item,
                            id: data.id
                        }
                    }
                    return item
                }))
            }
        } catch (error) {
            alert('Ошибка при запросе!')
        }


    } // Добавление товаров в корзину
    const addToFavorite = async (obj) => {
        if (favoriteItems.find(favObj => Number(favObj.id) === Number(obj.id))) {
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
        setCartItems([...cartItems].filter(element => Number(element.id) !== Number(id)))
    } // Удаление товаров из корзины
    const onChangeSearchInput = (event) => {
        setSearchValue(event.currentTarget.value)
    } // Работаем с инпутом ПОИСК
    const isItemAdded = (id) => {
        console.log(cartItems)
        return cartItems.some(obj => Number(obj.parentID) === Number(id))
    } // Нажат плюсик или нет
    const renderItems = () => {
        const filteredItems = items.filter(element => element.title.toLowerCase().includes(searchValue.toLowerCase()))
        return (isLoading ? [...Array(8)].map(element => <Card/>)
            : filteredItems).map(element =>
            <Card
                id={element.id}
                title={element.title}
                price={element.price}
                imageUrl={element.imageUrl}
                addToCart={(obj) => addToCart(obj)}
                addToFavorite={addToFavorite}
                isFavorite={false}
                // added={isItemAdded(element && element.id)}
                loading={isLoading}
            />)

    } // Через функцию рендерим товары на главной странице в зависимости от того, произошла ли полная загрузка

    return (
        // необходимо все (или только нужные компоненты) обернуть в Provider, чтобы работал useContext
        <AppContext.Provider value={{items, cartItems, favoriteItems, addToFavorite, isItemAdded, cartOpened}}>
            <section className='wrapper clear'>
                {openCart ? <Drawer items={cartItems} cartOpened={cartOpened} removeToCart={removeToCart}/> : null}
                <Route exact path="/sneaker_shop">
                    <Header cartOpened={cartOpened}/>
                    <section className='content p-40'>
                        <div className='d-flex justify-between align-center mb-30'>
                            <h1> {searchValue ? `Поиск по слову: "${searchValue}"` : 'Все кроссовки'} </h1>
                            <div className='search_block d-flex'>
                                <img src='icons/search.svg' alt='Search'/>
                                <input onChange={onChangeSearchInput}
                                       value={searchValue}
                                       placeholder='Поиск...'/>
                                {searchValue && <img className='cu-p'
                                                     onClick={() => setSearchValue('')}
                                                     src='icons/close_search.svg'
                                                     alt='Close'/>}
                            </div>
                        </div>
                        <div className='cards d-flex justify-between flex-wrap mt-20'>
                            {renderItems()}
                        </div>
                    </section>
                </Route>
                <Route path="favorites">
                    <Header/>
                    <Favorites
                        addToFavorite={addToFavorite}
                        addToCart={(obj) => addToCart(obj)}
                    />
                </Route>
                <Route path="orders">
                    <Header/>
                    <Orders/>
                </Route>
            </section>
        </AppContext.Provider>

    );
}

export default App;
