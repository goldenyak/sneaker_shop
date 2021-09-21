import './App.scss';
import Header from "./components/Header";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Search from "./components/Search";
import {useState} from "react";

function App() {

    const sneakersCards = [
        {title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12299, imageUrl: '/img/sneakers1.png'},
        {title: 'Мужские Кроссовки Nike Air Max 270', price: 15600, imageUrl: '/img/sneakers2.png'},
        {title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 8499, imageUrl: '/img/sneakers3.png'},
        {title: 'Кроссовки Puma X Aka Boku Future Rider', price: 8999, imageUrl: '/img/sneakers4.png'},
        {title: 'Мужские Кроссовки Under Armour Curry', price: 15199, imageUrl: '/img/sneakers5.png'},
        {title: 'Мужские Кроссовки Nike Kyrie 7', price: 11299, imageUrl: '/img/sneakers6.png'},
        {title: 'Мужские Кроссовки Jordan Air Jordan 11', price: 10799, imageUrl: '/img/sneakers7.png'},
        {title: 'Мужские Кроссовки Nike LeBron XVIII', price: 16499, imageUrl: '/img/sneakers8.png'},
    ]

    const [openCart, setOpenCart] = useState(false)
    const cart = () => {
        setOpenCart(!openCart)
     }

    return (
        <section className='wrapper clear'>
            {openCart ? <Drawer/> : null}
            <Header cart={cart}/>
            <section className='content p-40'>
                <div className='d-flex justify-between align-center mb-30'>
                    <h1> Все кроссовки </h1>
                    <Search/>
                </div>
                <div className='cards d-flex justify-between flex-wrap'>
                    {sneakersCards.map(element => <Card title={element.title}
                                                        price={element.price}
                                                        imageUrl={element.imageUrl}/>)}
                </div>
            </section>
        </section>
    );
}

export default App;
