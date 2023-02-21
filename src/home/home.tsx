import { Button } from '@mui/material';
import * as React from 'react'
import { Link } from 'react-router-dom';

export class Home extends React.Component{
    homeStructure = (
        <>
            <h1>Hello von Home</h1>
            
            <Button variant="contained">Hallo</Button>
            <Link to={"/setting"}>Hallo</Link>
            <Button component={Link} to="/setting" variant="contained" color="primary">
                SETTING
            </Button>
            <Button component={Link} to="/qrreader" variant="contained" color="primary">
                QR READER
            </Button>
        </>
    )

    render(): React.ReactNode {
        return (this.homeStructure);
    }

    //<button onClick={doSomthingOnClick}> QR Reader</button>  
}