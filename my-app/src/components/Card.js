import {useState} from "react";
import ContentLoader from "react-content-loader"

function Card({
                  id,
                  title,
                  price,
                  imageUrl,
                  addToCart,
                  addToFavorite,
                  isFavorite = true,
                  added = false,
                  loading = false // React sceleton
              }) {

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
            {loading // React sceleton
                ?
                <ContentLoader
                    speed={2}
                    width={150}
                    height={300}
                    viewBox="0 0 150 220"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                >
                    <rect x="0" y="0" rx="10" ry="10" width="150" height="91" />
                    <rect x="0" y="118" rx="5" ry="5" width="150" height="15" />
                    <rect x="0" y="141" rx="5" ry="5" width="93" height="15" />
                    <rect x="0" y="189" rx="5" ry="5" width="80" height="24" />
                    <rect x="118" y="185" rx="5" ry="5" width="32" height="32" />
                </ContentLoader>
                :
                <>
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
                </>
            }

        </div>
    )
}

export default Card;

// <img onClick={onClickFavorite} className='cards_liked' width={26} height={26}
//      src={favorites ? '/icons/liked.svg' : '/icons/unliked.svg'}/>
// <img width={133} height={112} src={imageUrl}/>
// <div className='items_descr'>{title}</div>
// <div className='d-flex align-center'>
//     <div className='d-flex flex-column'>
//         <span className='opacity-5 text-uppercase'>Цена:</span>
//         <span className='price'> {price} руб.</span>
//     </div>
//     <div className='plus ml-30'>
//         <img onClick={onPlus} width={32} height={32}
//              src={isAdded ? '/icons/checked.svg' : '/icons/plus.svg'}/>
//     </div>
// </div>





