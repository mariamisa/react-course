import React from 'react'

export default function Card({monster}) {
    return (
        <div key={monster.id}>
            <p>{monster.name}</p>
            <p>{monster.email}</p>
        </div>
    )
}
