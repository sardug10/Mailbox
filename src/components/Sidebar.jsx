import React, {useState, useEffect} from 'react'
import SidebarTags from './SidebarTags';
import InboxIcon from '@material-ui/icons/Inbox';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import ErrorIcon from '@material-ui/icons/Error';
import DeleteIcon from '@material-ui/icons/Delete';
import EmailIcon from '@material-ui/icons/Email';

const Sidebar = ({match, emails}) => {

    const tags = [
        {
            name:'Inbox',
            icon:InboxIcon,
            active:true,
            path:'inbox'
        },
        {
            name:'Drafts',
            icon:InsertDriveFileIcon,
            active:false,
            path:'draft'
        },
        {
            name:'Spam',
            icon:ErrorIcon,
            active:false,
            path:'spam'
        },
        {
            name:'Trash',
            icon:DeleteIcon,
            active:false,
            path:'trash'
        },
        {
            name:'All Mail',
            icon:EmailIcon,
            active:false,
            path:'all'
        },
    ]

    const [tagsArray, setTagsArray] = useState(tags)

    useEffect(()=>{
        const newTagsArray = [...tags]
        const prevPath = match && match.params.tag
        newTagsArray.forEach((tag)=>{
            tag.active = tag.path === prevPath ? true :false
        })
        setTagsArray(newTagsArray)
        // eslint-disable-next-line
    },[match])


    const handleTagSelect = (name)=>{
        const newTagsArray = [...tags]
        newTagsArray.forEach((tag)=>{
            tag.active = tag.name === name ? true :false
        })
        setTagsArray(newTagsArray)
    }

    return (
        <div className='sidebar'>
            {
                tagsArray.map((tag)=>(
                    <SidebarTags key={tag.name} Icon={tag.icon} title={tag.name} active={tag.active} path={tag.path} handleOnClick={handleTagSelect}/>
                ))
            }
        </div>
    )
}

export default Sidebar
