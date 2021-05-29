import React from 'react'
import {Link} from 'react-router-dom'

const SearchResults = ({email, handleOnClick}) => {
    return (
        <Link className='header__link' to={`/${email.tag}/mail/${email.id}`} onClick={handleOnClick}>
            <p className="header__subject">{email.subject}</p>
            <p className="header__body">{email.body}</p>
        </Link>
    )
}

export default SearchResults
