import React from 'react'

import './SearchBox.css'

export default function SearchBox({placeHolder,searchChange}) {
    return (
        <input 
            className='search'
            type='search'
            onChange={searchChange} 
            placeholder={placeHolder}
        />
    )
}
