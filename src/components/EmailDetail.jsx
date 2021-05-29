import React from 'react'
import LabelIcon from '@material-ui/icons/Label';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { IconButton } from '@material-ui/core'
import { useHistory } from 'react-router-dom';

const EmailDetail = ({data:email}) => {

    const {userId, tag, subject, body} = email
    const history = useHistory()

    return (
        <div className='emailDetail'>
            <div className="emailDetail__top">
                <IconButton onClick={()=>history.push(`/${tag}`)} >
                    <ArrowBackIosIcon/>
                </IconButton>
                <span className="emailDetail__subject">{subject}</span>
                <LabelIcon/>
                {tag}
            </div>
            <div className="emailDetail__middle">
                <AccountCircleIcon/>
                <span className="emailDetail__sender">User {userId}, to me</span>
            </div>
            <p className="emailDetail__bottom">
                {body}
            </p>
        </div>
    )
}

export default EmailDetail
