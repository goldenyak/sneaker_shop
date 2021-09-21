function Header(props) {

    return (
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
                    <img onClick={props.cart} className='iconCart' width={15} height={15} src='/icons/cart.svg'/>
                    <span>1205 руб.</span>
                </li>
                <li>
                    <img width={15} height={15} src='/icons/user.svg'/>
                </li>
            </ul>
        </header>
    )
}

export default Header;