function EmptyCart({cartOpened}) {
    return (
        <div className="empty_cart d-flex flex-column align-center justify-between ">

            <img width={120} height={120} src='/img/empty-cart.png' alt='Empty'/>
            <h2>Корзина пустая</h2>
            <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
            <div onClick={cartOpened} className="backspase_button d-flex align-center justify-between mt-30">
                <img width={14} height={12} src='/icons/arrow.svg' alt='Arrow'/>
                <p className="backspase_button_text">Вернуться назад</p>
            </div>

        </div>
    )
}

export default EmptyCart;