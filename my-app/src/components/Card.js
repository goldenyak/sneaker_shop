import {useState} from "react";

function Card(props) {

    const [isAdded, setIsAdded] = useState(false)
    const onPlus = () => {
        setIsAdded(true)
        console.log('hello')
    }

    return (
        <div className='items d-flex flex-column justify-between mb-40'>
            <img className='cards_liked' width={26} height={26} src='/icons/unliked.svg'/>
            <img width={133} height={112} src={props.imageUrl}/>
            <div className='items_descr'>{props.title}</div>
            <div className='d-flex align-center'>
                <div className='d-flex flex-column'>
                    <span className='opacity-5 text-uppercase'>Цена:</span>
                    <span className='price'> {props.price} руб.</span>
                </div>
                <div className='plus ml-30'>
                    <img onClick={onPlus} width={32} height={32} src={isAdded ? '/icons/checked.svg' : '/icons/plus.svg'}/>
                </div>
            </div>
        </div>
    )
}

export default Card;