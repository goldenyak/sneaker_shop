function EmptyCart() {
    return (
        <div className="empty_cart d-flex flex-column align-center ">

            <img width={120} height={120} src='/img/empty-cart.png' alt='Empty'/>
            <h2>Корзина пустая</h2>
            <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>

        </div>
    )
}

export default EmptyCart;