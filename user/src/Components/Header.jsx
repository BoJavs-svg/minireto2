import React from "react";
import { Box, Typography} from "@mui/material";
import { makeStyles } from "@mui/styles";

function Header () {
    const classes = useStyles(); 
    return (
        <Box>
            <Typography variant="h1">
                Kueski Challenge
            </Typography>
        </Box>    
    );
};
const useStyles = makeStyles({

});

export default Header;