
import './App.scss';

function App() {
    return (
        <div className='wrapper clear'>
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
            <div className='content p-40'>
                <h1> Все кроссовки </h1>
                .....
            </div>
        </div>
    );
}

export default App;
