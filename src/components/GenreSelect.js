import React from 'react'
import { useState, useEffect } from 'react';


const menuItems = [
    {
        title: 'Adventure',
        id: 12
    },
    {
        title: 'Adventure',
        id: 12
    },
    {
        title: 'Adventure',
        id: 12
    },
    {
        title: 'Adventure',
        id: 12
    },
]

const toggleGenreSelect = () => {

}

const GenreSelect = (props) => {
    const [genre, setGenre] = useState('Select')
    const [isGenreOpen, setIsGenreOpen] = useState(false)

    return (
        <React.Fragment>
            <div className='genre' onClick={() => setIsGenreOpen(!isGenreOpen)}>{genre}</div>
            {isGenreOpen &&
                <div className='GenreSelect'>
                    <ul>
                        {menuItems.map(item => (
                            <li> {item.title} </li>
                        ))}
                    </ul>
                </div>}
        </React.Fragment>
    )
}

export default GenreSelect
