import React from 'react'

import Card from './Card'

export default function CardList({ monsters}) {
    return (
        <div>
            {monsters.map((monster) => (
          <Card key={monster.id} monster={monster}></Card>
        ))}
        </div>
    )
}
