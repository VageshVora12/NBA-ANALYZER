import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Players=({ player })=> {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;


  const getPlayerCart=()=>{
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        Team Id: {player.team['id'] + ' Player Id:' + player['id']}
        </Typography>
        <Typography variant="h5" component="h2">
        Player Name: {player['first_name'] + ' ' + player['last_name']} 
        </Typography><br/>
        <Typography className={classes.pos} color="textSecondary">
        Position : {player['position']}<br/>


        </Typography>
        <Typography variant="body2" component="p">
            <h3>Division: {player.team['division']} </h3>
        </Typography>
        <Typography variant="body2" component="p">
            <h3>Player(Height & Weight): {
            player['height_inches'] + ' in inches &'+ player['weight_pounds'] + ' in pounds'
            }</h3>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color='primary' variant='outlined'>{player.team['abbreviation']}</Button>
      </CardActions>
    </Card>
  );
}
return getPlayerCart();
}


export default Players;