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

const Stats=({ stat })=> {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;


  const getStatCart=()=>{
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        Stats ID: {stat['id']}
        </Typography>
        <Typography variant="h5" component="h2">
        Turnover: {stat['turnover']}
        </Typography><br/>
        <Typography className={classes.pos} color="textSecondary">
        Home Team Score: {stat.game['home_team_score']}<br/>
        VS <br />
        Visitor Team Score: {stat.game['visitor_team_score']}


        </Typography>
        <Typography variant="body2" component="p">
            <h3>Team: {stat.team['full_name']}</h3>
        </Typography>
        <Typography variant="body2" component="p">
            <h3>Player: {stat.player['first_name'] +' '+ stat.player['last_name']}</h3>
        </Typography>
        <Typography variant='h6'>
            Points Scored: {stat['pts']}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color='primary' variant='outlined'>{stat.team['abbreviation']}</Button>
      </CardActions>
    </Card>
  );
}
return getStatCart();
}


export default Stats;