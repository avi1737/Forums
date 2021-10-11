import React from 'react'
import Navbar from './Navbar'

function HomeLayout(props) {
    return (
        <div>
            <Navbar/>
            {props.children}
        </div>
    )
}

export default HomeLayout;
