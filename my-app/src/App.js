import './App.scss';
import Header from "./components/Header";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Search from "./components/Search";
import React, {useState} from "react";

function App() {

    const [items, setItems] = useState([])
    const [cartItems, setcartItems] = useState([])

    React.useEffect(() => {
        fetch('https://614a2f5207549f001755a841.mockapi.io/items')
            .then(res => {
                return res.json()
            })
            .then(json => {
                setItems(json)
            })
    }, [])

    const [openCart, setOpenCart] = useState(false)
    const cartOpened = () => {
        setOpenCart(!openCart)
    }
    const addToCart = (obj) => {
        setcartItems([...cartItems, obj])
        console.log(obj)
    }

    return (
        <section className='wrapper clear'>
            {openCart ? <Drawer items={cartItems} cartOpened={cartOpened}/> : null}
            <Header cartOpened={cartOpened}/>
            <section className='content p-40'>
                <div className='d-flex justify-between align-center mb-30'>
                    <h1> Все кроссовки </h1>
                    <Search/>
                </div>
                <div className='cards d-flex justify-between flex-wrap'>
                    {items.map(element => <Card title={element.title}
                                                price={element.price}
                                                imageUrl={element.imageUrl}
                                                addToCart={(obj) => addToCart(obj)}/>)}
                </div>
            </section>
        </section>
    );
}

export default App;
