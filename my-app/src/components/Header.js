import {Link} from "react-router-dom";
import {useContext} from "react";
import {AppContext} from "../App";

function Header() {

    const {cartItems, cartOpened} = useContext(AppContext)

    const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0) // с помощью reduce пробегаемся по корзине и вытаскиваем сумму всех товаров

    return (
        <header className='d-flex justify-between align-center p-40'>
            <Link to="/">
                <div className='headerLeft'>
                    <img className='logo' src='/img/logo.png'/>
                    <div className='headerInfo'>
                        <h3 className='headerTitle text-uppercase'>REACT SNEAKERS</h3>
                        <p className='headerDescr'>Магазин лучших кроссовок</p>
                    </div>
                </div>
            </Link>
            <ul className='d-flex align-center justify-between'>
                <li className='align-center mr-20'>
                    <img onClick={cartOpened} className='iconCart' width={15} height={15} src='/icons/cart.svg'/>
                    <span>{totalPrice} руб.</span>
                </li>
                <li>
                    <Link to="/favorites">
                        <img className="mr-20 cu-p" width={15} height={15} src='/icons/heart.svg'/>
                    </Link>
                </li>
                <li>
                    <Link to="/orders">
                        <img className="cu-p" width={15} height={15} src='/icons/user.svg'/>
                    </Link>

                </li>
            </ul>
        </header>
    )
}

export default Header;