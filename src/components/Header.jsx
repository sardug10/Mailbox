import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {IconButton} from '@material-ui/core'

const Header = () => {
    return (
        <div className='header'>
            <div className="header__left">
                <IconButton>
                    <MenuIcon className='header__icons'/>
                </IconButton>
                <MailOutlineOutlinedIcon className='header__icons header__icons--mail' />
                <span className="header__text">Mailbox</span>
            </div>
            <div className="header__middle">
                <IconButton>
                    <SearchIcon className='header__icons'/>
                </IconButton>
                <input type="text" className="header__input" placeholder='Search Email' />
            </div>
            <div className="header__right">
                <AccountCircleIcon className='header__icons header__icons--avatar'/>
            </div>
        </div>
    )
}

export default Header
