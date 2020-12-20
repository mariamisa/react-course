import React from 'react'

export default function SearchBox({searchChange}) {
    return (
        <input 
            type='search'
            onChange={searchChange} 
            placeholder='enter username'
        />
    )
}
