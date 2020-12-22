import React from 'react'

export default function Card({monster}) {
    return (
        <div>
            <p>{monster.name}</p>
            <p>{monster.email}</p>
        </div>
    )
}
