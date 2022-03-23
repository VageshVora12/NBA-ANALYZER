import React from 'react';
import { Card,CardContent,Typography,CardActions,Button,Grid } from '@material-ui/core';

const MyCard = ({ game })=> {

    const getGameCart=()=>{
        return (
            <Card style={{marginTop:'20px'}}>
                <CardContent>
                <Grid container spacing={2}>
                   <Typography variant = 'h6'>Game ID: {game['id']}</Typography>
                </Grid>
                <Grid variant='h6' style={{float:'right',marginTop:'-23px'}}>
                   <Typography variant = 'h6'>Season: {game['season']}</Typography>
                </Grid>
                    <Grid container justify='center' alignItems='center' spacing={5}>
                        <Grid item>
                            <Typography variant = 'h5'>{game.home_team['full_name']}<br></br>Score:{game['home_team_score']}</Typography>

                        </Grid>
                        <Grid item>
                            <img style={{width:'85px'}} src = {require('../images/versus-4.png')} alt='vs.img couldnt load'></img>
                        </Grid>
                        <Grid item>
                            <Typography variant = 'h5'>{game.visitor_team['full_name']}<br></br>Score:{game['visitor_team_score']}</Typography>
                        </Grid>

                    </Grid>
                </CardContent>
                <CardActions>
                    <Grid container justify = 'center'>
                    <Button item variant = 'contained' color = 'primary'>Show Detail</Button>
                    <Button item variant = 'contained' color = 'primary' style={{marginLeft:'5px'}}>{game['date']}</Button>
                    </Grid>

                </CardActions>

            </Card>
        );
    }
  
    return getGameCart();


}

export default MyCard;