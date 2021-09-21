function Drawer({items = [], cartOpened }) {
    return (
        <div className='drawer d-flex flex-column align-start'>

            <div className='cart_title d-flex justify-between align-center mb-30'>
                <h2>Корзина товаров</h2>
                <img onClick={cartOpened} width={20} height={20} className='close_icon' src='/icons/close.svg'/>
            </div>

            <div className='mb-50'>
                {items.map(element => (
                    <div className='drawer_item d-flex justify-between align-center mb-10 '>
                        <img width={70} height={70} src={element.imageUrl}/>
                        <div className='description d-flex flex-column'>
                            <h3> {element.title} </h3>
                            <span className='price'>{element.price} руб.</span>
                        </div>
                        <img className='close_icon' src='/icons/close.svg'/>
                    </div>
                ))}
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

    )
}

export default Drawer;