import Card from "./Card";

function Favorites({items = []}) {
    return (
        <section className='content p-40'>
            <div className='d-flex justify-between align-center mb-30'>
                <h1> Мои закладки </h1>
            </div>
            <div className='cards d-flex justify-between flex-wrap mt-20'>
                {items.map(element => <Card
                    title={element.title}
                    price={element.price}
                    imageUrl={element.imageUrl}
                    isFavorite={true}/>)
                }
            </div>
        </section>
    )
}

export default Favorites;