import React from 'react'
import { Link } from 'react-router-dom';

class IndexApp extends React.Component {
    render(){
        return(
            <div>
                <Link to="/button">Click Me</Link>
                </div>
        )
    }
}

export default IndexApp;