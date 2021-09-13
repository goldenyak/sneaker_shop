import logo from './img/logo.png';
import './App.scss';

function App() {
    return (
        <div className="wrapper">
            <header>
                <div className='headerLeft'>
                    <img className='logo' src='/img/logo.png'/>
                    <div className='headerInfo'>
                        <h3 className='headerTitle'>REACT SNEAKERS</h3>
                        <p className='headerDescr'>Магазин лучших кроссовок</p>
                    </div>
                </div>
                <ul className='headerRight'>
                    <li>
                        <img width={18} height={18} src='/icons/cart.svg'/>
                        <span>1205 руб.</span>
                    </li>
                    <li>
                        <img width={18} height={18} src='/icons/user.svg'/>
                    </li>
                </ul>
            </header>
            <div className='content'>
                <h1> Все кроссовки </h1>
                .....
            </div>
        </div>
    );
}

export default App;
