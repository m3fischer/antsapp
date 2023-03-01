import { Box, Container, Grid, TextField } from "@mui/material";
import React from "react";





export default class MasterData extends React.Component{
    

    view = (

        <Container maxWidth="sm" className="Masterdata" sx={{ flexGrow: 1, mt:"3em" }}>
            <Grid container spacing={2}>
                <Grid xs={4}>
                    <h1>Stammdaten</h1>
                </Grid>
                <Grid xs={12}>
                    <Box component="form"  noValidate autoComplete="off" sx={{'& > :not(style)': { m: 1 },}}>
                        <TextField fullWidth id="masterdata-1" label="Outlined" variant="filled" />
                        <TextField fullWidth id="masterdata-2" label="Outlined" variant="filled" />
                        <TextField fullWidth id="masterdata-3" label="Outlined" variant="filled" />
                        <TextField fullWidth id="masterdata-4" label="Outlined" variant="filled" />
                        <TextField fullWidth id="masterdata-5" label="Outlined" variant="filled" />
                        <TextField fullWidth id="masterdata-6" label="Outlined" variant="filled" />
                        <TextField fullWidth id="masterdata-7" label="Outlined" variant="filled" />
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