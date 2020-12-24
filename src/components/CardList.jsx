import React from 'react'

import Card from './Card'

import './card-list.css'

export default function CardList({ monsters}) {
    return (
        <div className="card-list">
            {monsters.map((monster) => (
          <Card key={monster.id} monster={monster}></Card>
        ))}
        </div>
    )
}
