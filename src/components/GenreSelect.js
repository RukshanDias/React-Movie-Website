import React from 'react'

const menuItems = [
    {
        title : 'Adventure',
        id : 12
    },
    {
        title : 'Adventure',
        id : 12
    },
    {
        title : 'Adventure',
        id : 12
    },
    {
        title : 'Adventure',
        id : 12
    },
]

function GenreSelect() {
    return (
        <div className='genre'>
            <ul>
                {menuItems.map (item => (
                    <li> {item.title} </li>
                ))}
            </ul>
        </div>
    )
}

export default GenreSelect
