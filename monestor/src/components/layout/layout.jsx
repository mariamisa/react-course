import React from 'react'

export default function layout({children}) {
    console.log(children)
    return (
        <div>
            <header> header</header>
             <div>{children}</div>
            <footer>footer</footer>
        </div>
    )
}
