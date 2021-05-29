import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Email from '../components/Email';
import Header from './../components/Header';
import Sidebar from './../components/Sidebar';
import { listEmails } from '../features/emailActions';
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';

const HomeScreen = ({history, match}) => {

    const dispatch = useDispatch()

    const emailList = useSelector((state)=>state.emailList)
    const { loading, emails, error } = emailList

    useEffect(() => {
        dispatch(listEmails())
    },[dispatch])

    return (
        <div>
            <Header emails={emails} />
            <div className="main">
                <Sidebar match={match} emails={emails} />
                {loading && <CircularProgress className='loader' />}
                {error && <Alert severity="error">Error: {error}</Alert> }
                <Email match={match} data={emails}/>
            </div>
        </div>
    )
}

export default HomeScreen
