import React from 'react'
import {Link} from 'react-router-dom'

const SidebarTags = ({Icon, title, number, active,path, handleOnClick}) => {
    return (
        <Link to={`/${path}`} className='sidebar__link'>
            <div className={`sidebar__tags ${active && 'sidebar__tags--active'}`} onClick={()=>handleOnClick(title)}>
                <Icon/>
                <h3 className="sidebar__text">{title}</h3>
                <p className="sidebar__number">{number}</p>
            </div>
        </Link>
    )
}

export default SidebarTags
 