import React, {useEffect, useState} from 'react'
import Email from '../components/Email';
import Header from './../components/Header';
import Sidebar from './../components/Sidebar';

const HomeScreen = ({history, match}) => {

    // useEffect(() => {
    //     console.log(history)
    //     console.log(match.params.tag)        
    // })

    return (
        <div>
            <Header/>
            <div className="main">
                <Sidebar match={match}/>
                <Email match={match}/>
            </div>
        </div>
    )
}

export default HomeScreen
