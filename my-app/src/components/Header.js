import {Link} from "react-router-dom";

function Header(props) {

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
                    <img onClick={props.cartOpened} className='iconCart' width={15} height={15} src='/icons/cart.svg'/>
                    <span>1205 руб.</span>
                </li>
                <li>
                    <Link to="/favorites">
                        <img className="mr-20 cu-p" width={15} height={15} src='/icons/heart.svg'/>
                    </Link>
                </li>
                <li>
                    <img className="cu-p" width={15} height={15} src='/icons/user.svg'/>
                </li>
            </ul>
        </header>
    )
}

export default Header;