import React from 'react';
import { Card,CardContent,Typography,CardActions,Button,Grid } from '@material-ui/core';

const MyCard = ({game})=> {

    const getGameCart=()=>{
        return (
            <Card style={{marginTop:'20px'}}>
                <CardContent>
                    <Grid container justify='center' alignItems='center' spacing={4}>
                        <Grid item>
                            <Typography variant = 'h5'> First Team</Typography>

                        </Grid>
                        <Grid item>
                            <img style={{width:'85px'}} src = {require('../images/versus-4.png')} alt='vs.img couldnt load'></img>
                        </Grid>
                        <Grid item>
                            <Typography variant = 'h5'>Second Team</Typography>
                        </Grid>

                    </Grid>
                </CardContent>
                <CardActions>
                    <Grid container justify = 'center'>
                    <Button item variant = 'contained' color = 'primary'>Show Detail</Button>
                    <Button item variant = 'contained' color = 'primary' style={{marginLeft:'5px'}}>{new Date().toString()}</Button>
                    </Grid>

                </CardActions>

            </Card>
        );
    }
  
    return getGameCart();


}

export default MyCard;