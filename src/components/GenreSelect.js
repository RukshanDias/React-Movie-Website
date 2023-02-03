import React from 'react'
import { useState } from 'react';
import { AiFillCaretDown } from "react-icons/ai";


const menuItems = [
    { title: 'Adventure', id: 12 },
    { title: 'Action', id: 28 },
    { title: 'Comedy', id: 35 },
    { title: 'Family', id: 10751 },
    { title: 'Science Fiction', id: 878 },
    { title: 'Animation', id: 16 },
]



const GenreSelect = (props) => {
    const [isGenreOpen, setIsGenreOpen] = useState(false)
    const API_GENRE = `${process.env.REACT_APP_API_GENRE}`
    const handleGenre = (item) => {
        console.log(item)
        props.changeGenre(item.title)
        props.changeLoading(true)
        fetch(API_GENRE + item.id)
            .then(res => res.json())
            .then(data => props.changeMovies(data.results))
            .then(() => props.changeLoading(false))
        setIsGenreOpen(false)
        console.log(API_GENRE + item.id)
    }


    return (
        <React.Fragment>
            <div className='genre' onClick={() => setIsGenreOpen(!isGenreOpen)} onTouchStart={() => setIsGenreOpen(!isGenreOpen)}>
                {props.movieGenre} <AiFillCaretDown />
            </div>
            {isGenreOpen &&
                <div className='GenreSelect'>
                    <ul>
                        {menuItems.map(item => (
                            <li key={item.id} onClick={() => handleGenre(item)}> {item.title} </li>
                        ))}
                    </ul>
                </div>}
        </React.Fragment>
    )
}

export default GenreSelect
