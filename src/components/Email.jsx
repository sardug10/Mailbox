import React from 'react'
import EmailDetail from './EmailDetail'
import EmailList from './EmailList'

const Email = ({match}) => {

    const tempEmail = {
        userId: 1,
        id: 1,
        subject: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        tag: "inbox"
    }

    const emailId = match.params.id

    return (
        <div>
            {
                emailId ? <EmailDetail/> : <EmailList tempEmail={tempEmail} />
            }
        </div>
    )
}

export default Email
