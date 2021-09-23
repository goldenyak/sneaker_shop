import {useState} from "react";

function Search() {

    const [searchValue, setSearchValue] = useState('1')
    return (
        <div className='search_block d-flex'>
            <img src='/icons/search.svg' alt='Search'/>
            <input placeholder='Поиск...'/>
            <img src='/icons/close_search.svg' alt='Search'/>
        </div>
    )
}

export default Search;