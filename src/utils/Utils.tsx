import { Box, Button } from "@mui/material";
import * as React from 'react'
import { Link } from 'react-router-dom';

// Ein Bild laden
<>
<Box component="img" sx={{ width: "100%"}}
                        alt="The house from the offer."
                        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
                    />

<Button size="large" component= "a" color="inherit" href="/" sx={{ flexGrow: 1, justifyContent: "flex-start" }}>HOME
              
                      </Button>


                    <Button variant="contained">Hallo</Button>
                    <Button component={Link} to="/setting" variant="contained" color="primary">
                        SETTING
                    </Button>
                    <Button component={Link} to="/qrreader" variant="contained" color="primary">
                        QR READER
                    </Button>
                    <Button variant="contained">Hallo</Button>
        

                    </>