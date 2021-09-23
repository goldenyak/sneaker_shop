import './App.scss';
import Header from "./components/Header";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import React, {useState} from "react";
import axios from "axios";

function App() {

    const [items, setItems] = useState([])
    const [cartItems, setcartItems] = useState([])
    const [searchValue, setSearchValue] = useState('')

    React.useEffect(() => {
            fetch('https://614a2f5207549f001755a841.mockapi.io/items')
                .then(res => {
                    return res.json()
                })
                .then(json => {
                    setItems(json)
                });

        axios.get('https://614a2f5207549f001755a841.mockapi.io/items').then(res => {
            console.log(res.data)

        });
        }, [])

    const [openCart, setOpenCart] = useState(false)
    const cartOpened = () => {
        setOpenCart(!openCart)
    }
    const addToCart = (obj) => {
        setcartItems([...cartItems, obj])
        console.log(obj)
    }
    const onChangeSearchInput = (event) => {
        setSearchValue(event.currentTarget.value)
    }

    return (
        <section className='wrapper clear'>
            {openCart ? <Drawer items={cartItems} cartOpened={cartOpened}/> : null}
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
                <div className='cards d-flex justify-between flex-wrap'>
                    {items.filter(element => element.title.toLowerCase().includes(searchValue.toLowerCase())).map(element =>
                        <Card
                            title={element.title}
                            price={element.price}
                            imageUrl={element.imageUrl}
                            addToCart={(obj) => addToCart(obj)}/>)}
                </div>
            </section>
        </section>
    );
}

export default App;
