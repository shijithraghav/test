import React from 'react';
import {Button, Card} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {TextField} from '@material-ui/core';
class ButtonNew extends React.Component{
    render(){
        return(
            <>
            <Card className="button-primary">
                <span className="span-class">Sign In</span>
                <div className="fields">
                    <label className="label-style">Name:</label>
                    <TextField className="input-text-field" label="Username" placeholder="" multiline variant="outlined" />
                </div>
            </Card>
            <Link to="/button">fasdfsdafasdfsdfsdf</Link>
            </>
        )
    }
} 

export default ButtonNew;