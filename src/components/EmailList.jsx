import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import LabelIcon from '@material-ui/icons/Label';

const EmailList = ({tempEmail}) => {

    const history = useHistory()
    const params = useParams()
    console.log(history, params)

    const {id, userId, tag, subject, body} = tempEmail

    return (
        <div className='emailList' onClick={()=>history.push(`/${params.tag}/mail/${id}`)}>
            <span className="emailList__user">
               User {userId}
            </span>
            <h3 className="emailList__tag">
                <LabelIcon fontSize='small' style={{marginRight:5}}/>
                {tag}
            </h3>
            <div className="emailList__message">
                <span className="emailList__subject">{subject} - </span>
                <span className="emailList__body">{body}</span>
            </div>
        </div>
    )
}

export default EmailList
