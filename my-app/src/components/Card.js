import {useState} from "react";

function Card({id, title, price, imageUrl, addToCart, addToFavorite, isFavorite = true, added = false}) {

    const [isAdded, setIsAdded] = useState(added) // нажат или не нажат плюсик
    const [favorites, setFavorites] = useState(isFavorite) // нажато или не нажато сердечко
    const onPlus = () => {
        addToCart({id, title, price, imageUrl})
        setIsAdded(!isAdded)
    } // нажимаем на плюсик, чтобы добавить в корзину
    const onClickFavorite = () => {
        addToFavorite({id, title, price, imageUrl})
        setFavorites(!favorites)
    } // нажимаем на сердечко, чтобы добавить в мои закладки


    return (
        <div className='items d-flex flex-column justify-between mb-40'>
            <img onClick={onClickFavorite} className='cards_liked' width={26} height={26}
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