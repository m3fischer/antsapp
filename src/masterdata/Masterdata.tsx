import { Box, Button, Checkbox, Container, FormControlLabel, Grid, TextField, Tooltip } from "@mui/material";
import React from "react";
import AntBox from "../AntForms/AntBox/AntBox";
import './Masterdata.css';
import axios from "axios";

export default class MasterData extends React.Component{
    getMasterDataFromServer() {
        
        axios.get('http://localhost:3030/masterdata').then ((resp) => {console.log(resp.data)})
    }

    view = (

        <Container maxWidth="sm" className="Masterdata" sx={{ flexGrow: 1, mt:"3em" }}>
            <Grid container spacing={2} rowSpacing={5}>
                <Grid xs={4}>
                    <h1>Stammdaten</h1>
                </Grid>
                <Grid xs={12} >
                    <Box component="form"  noValidate autoComplete="off" sx={{'& > :not(style)': { m: 1 },}} >
                        <TextField className="textfield" fullWidth id="masterdata-1" label="Anlage" variant="filled" />
                        <FormControlLabel  className="textfield"  id="masterdata-2"  control={<Checkbox />} label="Misst du die Temperatur?"  />


                       
                        
                        <AntBox tooltip="Misst du die Luftfeuchtigkeit?" className="textfield" id="masterdata3" label="Luftfeuchtigkeit" name="egal"></AntBox>
                        <AntBox tooltip="Hast Du durch Klimasteuerung konstanten Werte?" className="textfield" id="masterdata4" label="Klimasteuerung" name="egal"></AntBox>
                    
                        <Tooltip title="Misst du die Luftfeuchtigkeit?">
                            <FormControlLabel  className="textfield"  id="masterdata-3"  control={<Checkbox />} label="Luftfeuchtigkeit"  />
                        </Tooltip>
                        <FormControlLabel  className="textfield"  id="masterdata-4"  control={<Checkbox />} label="Hast Du durch Klimasteuerung konstanten Werte?"  />
                        <FormControlLabel  className="textfield"  id="masterdata-5"  control={<Checkbox />} label="Fütterst Du auch am Wochenende täglich?"  />
                        <TextField className="textfield" fullWidth id="masterdata-4" label="Outlined" variant="filled" />
                        <Button variant="contained" onClick={this.getMasterDataFromServer}>Speichern</Button>
                    </Box>
                </Grid>
                <Grid xs={4}>
                </Grid>
                <Grid xs={8}>
                </Grid>
            </Grid>
        </Container>
        
    )
    render(): React.ReactNode {
        return this.view
    }
}