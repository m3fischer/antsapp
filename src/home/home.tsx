import { Box, Button, Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import * as React from 'react'
import { Link } from 'react-router-dom';
import DocumentScannerOutlinedIcon from '@mui/icons-material/DocumentScannerOutlined';
import SourceOutlinedIcon from '@mui/icons-material/SourceOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';

export class Home extends React.Component{
    homeStructure = (
        <>
            <Container maxWidth="sm">



            <Grid container spacing={2} sx={{mt:3, ml:1}}>
                <Grid xs={4} >
                    <SourceOutlinedIcon sx={{ fontSize: 80 }} color="secondary"/>                
                </Grid>
                <Grid xs={8} display="flex" justifyContent="left" alignItems="center">
                    <Link to={"/setting"}>Stammdaten</Link>
                </Grid>



                <Grid xs={4}>
                    <DocumentScannerOutlinedIcon sx={{ fontSize: 80 }} color="secondary"/>
                </Grid>
                <Grid xs={8} display="flex" justifyContent="left" alignItems="center">
                    <Link to={"/qrreader"}>Scannen</Link>
                </Grid>



                <Grid xs={4}>
                    <TimelineOutlinedIcon sx={{ fontSize: 80 }} color="secondary"></TimelineOutlinedIcon>
                </Grid>
                <Grid xs={8} display="flex" justifyContent="left" alignItems="center">
                    <Link to={"/analytics"}>Auswertung</Link>

                </Grid>




                <Grid xs={4}>
                    <AlternateEmailOutlinedIcon sx={{ fontSize: 80 }} color="secondary"></AlternateEmailOutlinedIcon>
                </Grid>
                <Grid xs={8} display="flex" justifyContent="left" alignItems="center">
                    <Link to={"/contact"}>Kontakt</Link>

                </Grid>


                
            </Grid>
            
            </Container>
        </>
    )

    render(): React.ReactNode {
        return (this.homeStructure);
    }

    //<button onClick={doSomthingOnClick}> QR Reader</button>  
}