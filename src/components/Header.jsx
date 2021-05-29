import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import SearchResults from './SearchResults';
import MenuIcon from '@material-ui/icons/Menu';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {IconButton} from '@material-ui/core'

const Header = ({emails}) => {
    const params = useParams()
    const [searchInput, setSearchInput] = useState('')
    const [emailsData, setEmailsData] = useState(null)
    const [filteredEmails, setFilteredEmails] = useState(null)
   
    useEffect(()=>{
        window.addEventListener('click', function(e){
            const elementClassName = JSON.stringify(e.target.className)
            if(elementClassName.includes('header')){
                return
            } else{
                setSearchInput('')
            }
        })
    })

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
    },[emails, params, searchInput])

    function filterByValue(array, string) {
        return array.filter(o =>
            Object.keys(o).some(k => o[k].toString().toLowerCase().includes(string.toLowerCase())));
    }

    const showSearchResults = (e)=>{
        const keyword = e.target.value
        setSearchInput(keyword)
        const filteredEmails = filterByValue(emailsData, keyword)
        setFilteredEmails(filteredEmails)
        console.log(filteredEmails)
    }

    const handleSearchClick = ()=>{
        setSearchInput('')
    }

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
                <div className="header__middle--secondary">
                    <input type="text" className="header__input" value={searchInput} placeholder='Search Email' onChange={(e)=>showSearchResults(e)} />
                    <div className={`header__suggestions ${searchInput === '' && 'header__suggestions--hide'}`}>
                        {
                            filteredEmails && filteredEmails.length > 0 
                                ? 
                                (
                                    filteredEmails && filteredEmails.map((email)=>(
                                        <SearchResults email={email} key={email.id} handleOnClick={handleSearchClick} />
                                    ))
                                )
                                :
                                (
                                    <p className="header__message">No Matching results</p>
                                )
                        }
                    </div>
                </div>
            </div>
            <div className="header__right">
                <AccountCircleIcon className='header__icons header__icons--avatar'/>
            </div>
        </div>
    )
}

export default Header
