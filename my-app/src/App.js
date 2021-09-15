import './App.scss';

function App() {
    return (
        <section className='wrapper clear'>
            {/*DRAWER - корзина товаров*/}
            <div className='drawer'>
                <div className='drawer_item d-flex justify-between align-center mb-20 '>
                    <img width={70} height={70} src='/img/sneakers2.png'/>
                    <div className='description d-flex flex-column'>
                        <h3> Мужские Кроссовки Nike Air Max 270 </h3>
                        <span className='price'>12 999 руб.</span>
                    </div>
                    <img src='/icons/plus.svg'/>
                </div>
                <div className='drawer_item d-flex justify-between align-center mb-20 '>
                    <img width={70} height={70} src='/img/sneakers4.png'/>
                    <div className='description d-flex flex-column'>
                        <h3> Мужские Кроссовки Nike Air Max 270 </h3>
                        <span className='price'>12 999 руб.</span>
                    </div>
                    <img src='/icons/plus.svg'/>
                </div>
            </div>
            <header className='d-flex justify-between align-center p-40'>
                <div className='headerLeft'>
                    <img className='logo' src='/img/logo.png'/>
                    <div className='headerInfo'>
                        <h3 className='headerTitle text-uppercase'>REACT SNEAKERS</h3>
                        <p className='headerDescr'>Магазин лучших кроссовок</p>
                    </div>
                </div>
                <ul className='d-flex align-center'>
                    <li className='align-center mr-30'>
                        <img className='iconCart' width={15} height={15} src='/icons/cart.svg'/>
                        <span>1205 руб.</span>
                    </li>
                    <li>
                        <img width={15} height={15} src='/icons/user.svg'/>
                    </li>
                </ul>
            </header>

            <section className='content p-40'>
                {/*Заголовок "Все кроссовки" и input*/}
                <div className='d-flex justify-between align-center mb-30'>
                    <h1> Все кроссовки </h1>
                    <div className='search_block d-flex'>
                        <img src='/icons/search.svg' alt='Search'/>
                        <input placeholder='Поиск...'/>
                    </div>
                </div>

                {/*Карточки товаров*/}
                <div className='cards d-flex justify-between flex-wrap'>
                    <div className='items d-flex flex-column justify-between mb-40'>
                        <img className='cards_liked' width={26} height={26} src='/icons/liked.svg'/>
                        <img width={133} height={112} src='/img/sneakers1.png'/>
                        <div className='items_descr'> Мужские Кроссовки Nike Air Max 270</div>
                        <div className='d-flex align-center'>
                            <div className='d-flex flex-column'>
                                <span className='opacity-5 text-uppercase'>Цена:</span>
                                <span className='price'> 12 299 руб.</span>
                            </div>
                            <div className='plus ml-30'>
                                <img width={32} height={32} src='/icons/plus.svg'/>
                            </div>
                        </div>
                    </div>
                    <div className='items d-flex flex-column justify-between'>
                        <img className='cards_liked' width={26} height={26} src='/icons/unliked.svg'/>
                        <img width={133} height={112} src='/img/sneakers2.png'/>
                        <div className='items_descr'> Мужские Кроссовки Nike Air Max 270</div>
                        <div className='d-flex align-center'>
                            <div className='d-flex flex-column'>
                                <span className='opacity-5 text-uppercase'>Цена:</span>
                                <span className='price'> 12 299 руб.</span>
                            </div>
                            <div className='plus ml-30'>
                                <img width={32} height={32} src='/icons/plus.svg'/>
                            </div>
                        </div>
                    </div>
                    <div className='items d-flex flex-column justify-between'>
                        <img width={133} height={112} src='/img/sneakers3.png'/>
                        <div className='items_descr'> Мужские Кроссовки Nike Air Max 270</div>
                        <div className='d-flex align-center'>
                            <div className='d-flex flex-column'>
                                <span className='opacity-5 text-uppercase'>Цена:</span>
                                <span className='price'> 12 299 руб.</span>
                            </div>
                            <div className='plus ml-30'>
                                <img width={32} height={32} src='/icons/plus.svg'/>
                            </div>
                        </div>
                    </div>
                    <div className='items d-flex flex-column justify-between'>
                        <img width={133} height={112} src='/img/sneakers4.png'/>
                        <div className='items_descr'> Мужские Кроссовки Nike Air Max 270</div>
                        <div className='d-flex align-center'>
                            <div className='d-flex flex-column'>
                                <span className='opacity-5 text-uppercase'>Цена:</span>
                                <span className='price'> 12 299 руб.</span>
                            </div>
                            <div className='plus ml-30'>
                                <img width={32} height={32} src='/icons/plus.svg'/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default App;
