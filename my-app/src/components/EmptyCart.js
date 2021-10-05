import {useContext} from "react";
import {AppContext} from "../App";

const EmptyCart= ({title, img, description}) => {

    const {cartOpened} = useContext(AppContext)

    return (
        <div className="empty_cart d-flex flex-column align-center justify-between ">
            <img width={120}  src={img} alt='Empty'/>
            <h2>{title}</h2>
            <p>{description}</p>
            <div onClick={cartOpened} className="backspase_button d-flex align-center justify-between mt-30">
                <img width={14} height={12} src='/icons/arrow.svg' alt='Arrow'/>
                <p className="backspase_button_text">Вернуться назад</p>
            </div>
        </div>
    )
}

export default EmptyCart;