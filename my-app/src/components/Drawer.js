function Drawer() {
    return (
        <div>
            <div className='drawer d-flex flex-column justify-between align-start'>
                <div>
                    <div className='d-flex justify-between align-center'>
                        <h2>Корзина товаров</h2>
                        <img width={20} height={20} className='close_icon' src='/icons/close.svg'/>
                    </div>
                    <div className='drawer_item d-flex justify-between align-center mb-20 '>
                        <img width={70} height={70} src='/img/sneakers2.png'/>
                        <div className='description d-flex flex-column'>
                            <h3> Мужские Кроссовки Nike Air Max 270 </h3>
                            <span className='price'>12 999 руб.</span>
                        </div>
                        <img className='close_icon' src='/icons/close.svg'/>
                    </div>
                    <div className='drawer_item d-flex justify-between align-center mb-20 '>
                        <img width={70} height={70} src='/img/sneakers4.png'/>
                        <div className='description d-flex flex-column'>
                            <h3> Мужские Кроссовки Nike Air Max 270 </h3>
                            <span className='price'>12 999 руб.</span>
                        </div>
                        <img className='close_icon' src='/icons/close.svg'/>
                    </div>
                </div>

                <div>
                    <ul>
                        <li className='d-flex mb-20'>
                            <span className='cost_descr'>Итого:</span>
                            <div className='cart_divider'></div>
                            <span className='cost_price'>12299 руб.</span>
                        </li>
                        <li className='d-flex'>
                            <span className='cost_descr'>Налог 5%:</span>
                            <div className='cart_divider'></div>
                            <span className='cost_price'>546 руб.</span>
                        </li>
                    </ul>
                    <div className='cart_button mt-20'>Оформить заказ</div>
                </div>
            </div>

        </div>
    )
}

export default Drawer;