import React from 'react'

import './layout.css';

export default function layout({children}) {
    return (
        <div>
            <h1> MonsterS</h1>
             <div>{children}</div>
        </div>
    )
}
