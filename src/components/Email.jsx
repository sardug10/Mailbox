import React, {useEffect, useState} from 'react'
import EmailDetail from './EmailDetail'
import EmailList from './EmailList'
import { useHistory, useParams } from 'react-router-dom';

const Email = ({data:emails}) => {

    const history = useHistory()
    const params = useParams()
    const [emailsData, setEmailsData] = useState(null)
    const [email, setEmail] = useState(null)

    const emailId = params.id

    useEffect(()=>{
        const tag = params.tag
        if(tag === 'all'){
            setEmailsData(emails)
        } else{
            const emailsData = []
            emails.forEach((el)=>{
                if(el.tag === tag){
                    emailsData.push(el)
                }
            })
            setEmailsData(emailsData)
        }
    },[emails, params])

    useEffect(()=>{
        const emailId = params.id
        const email = emailsData && emailsData.find(el => el.id === emailId*1)
        setEmail(email)
    },[params,email, emailsData])

    const handleClickOnEmail = (id)=>{
        const email = emails.find(el => el.id === id)
        setEmail(email)
        history.push(`/${params.tag}/mail/${id}`)
    }

    if(emailId && email){
        return(
            <EmailDetail data={email} />
        )
    } else{
        return (
            <div className="emailList__div">
                {
                    emailsData && emailsData.map((email)=>(
                        <EmailList key={email.id} email={email} handleOnClick={handleClickOnEmail} />
                    ))
                }
            </div>
        )
    }
}

export default Email
