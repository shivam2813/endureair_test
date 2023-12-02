import {Container, Paper, Typography, Grid} from "@mui/material"

const CustomCard=({itemname,uniprice, quantity, ispurchased})=>{
    return(
        <Paper>
            <Grid Container spacing={2}>
            
            <Typography>Item Name:</Typography>
            <Typography>Unit Price:</Typography>
            <Typography>Quantity: </Typography> 
            </Grid>
        </Paper>
    );
}

export default CustomCard;