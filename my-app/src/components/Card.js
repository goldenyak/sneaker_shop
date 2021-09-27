import {useState} from "react";

function Card({title, price, imageUrl, addToCart}) {

    const [isAdded, setIsAdded] = useState(false) // нажат или не нажат плюсик
    const [favorites, setFavorites] = useState(false) // нажато или не нажато сердечко
    const onPlus = () => {
        addToCart({title, price, imageUrl})
        setIsAdded(!isAdded)
    } // нажимаем на плюсик, чтобы добавить в корзину
    const addTofavorite = () => {
        setFavorites(!favorites)
    } // нажимаем на сердечко, чтобы добавить в мои закладки


    return (
        <div className='items d-flex flex-column justify-between mb-40'>
            <img onClick={addTofavorite} className='cards_liked' width={26} height={26}
                 src={favorites ? '/icons/liked.svg' : '/icons/unliked.svg'}/>
            <img width={133} height={112} src={imageUrl}/>
            <div className='items_descr'>{title}</div>
            <div className='d-flex align-center'>
                <div className='d-flex flex-column'>
                    <span className='opacity-5 text-uppercase'>Цена:</span>
                    <span className='price'> {price} руб.</span>
                </div>
                <div className='plus ml-30'>
                    <img onClick={onPlus} width={32} height={32}
                         src={isAdded ? '/icons/checked.svg' : '/icons/plus.svg'}/>
                </div>
            </div>
        </div>
    )
}

export default Card;