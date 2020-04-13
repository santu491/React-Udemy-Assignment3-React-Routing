import React from 'react'
import classes from './ToolBar.css'
import { Link } from 'react-router-dom'

const ToolBar = (props) => {
    return (
        <div className="ToolBar">
            <p>tool bar</p>
            <ul>
            <li><Link to="/courses">Course</Link></li>
                <li><Link to="/">Users</Link></li>


            </ul>
        </div>
    )
}

export default ToolBar