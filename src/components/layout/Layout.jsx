import React from 'react'

import './Layout.css';

export default function Layout({children}) {
    return (
        <div>
            <h1> MonsterS</h1>
             <div>{children}</div>
        </div>
    )
}
