import React from 'react'
import LabelIcon from '@material-ui/icons/Label';

const EmailList = ({email, handleOnClick}) => {

    return (
                <div className='emailList' onClick={()=>handleOnClick(email.id)} >
                    <span className="emailList__user">
                    User {email.userId}
                    </span>
                    <h3 className="emailList__tag">
                        <LabelIcon fontSize='small' style={{marginRight:5}}/>
                        {email.tag}
                    </h3>
                    <div className="emailList__message">
                        <span className="emailList__subject">{email.subject} - </span>
                        <span className="emailList__body">{email.body}</span>
                    </div>
                </div>
            )
    }

export default EmailList
