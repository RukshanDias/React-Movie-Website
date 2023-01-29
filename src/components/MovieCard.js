import React from 'react'
import './MovieCard.css'
import noImgFound_img from '../no_img_found.png'

const MovieCard = (props) => {
    const API_IMG = `${process.env.REACT_APP_API_IMG}`

    return (
        <div className='card'>
            <div className='poster'>
                <img src={props.poster_path ? API_IMG + props.poster_path : noImgFound_img} alt={props.title} />
            </div>

            <div className='info'>
                <p className='title'>{props.title}</p>
                <p className='vote'>{props.vote_average}</p>
            </div>

            <div className='overview'>
                <h2 className='overview_title'>Overview</h2>
                <h4 className='overview_info'>{props.overview}</h4>
            </div>
        </div>
    )
}

export default MovieCard
