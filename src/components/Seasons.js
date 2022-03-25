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

const Seasons=({ season })=> {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;


  const getSeasonCart=()=>{
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        ID: {season['id']}
        </Typography>
        <Typography variant="h5" component="h2">
        Season : {season.game['season']}
        </Typography><br/>
        <Typography className={classes.pos} color="textSecondary">
        Home Team Score: {season.game['home_team_score']}
         <br /> VS <br/> 
        Visitor Team Score: {season.game['visitor_team_score']}
        </Typography>
        <Typography variant="body2" component="p">
            <h3>Player Info: {season.player['first_name'] + ' ' + season.player['last_name'] } 
            <br/>
            {' Position: ' + season.player['position']  }</h3>
            <h3>Player(Height & Weight): {
            season.player['height_inches'] + ' in inches &'+ season.player['weight_pounds'] + ' in pounds'
            }</h3>
        </Typography>
        <Typography variant="body2" component="p">
            <h3>Team Info: Name:{season.team['full_name']}
            <br/>
            <h4>Division: {season.team['division']}<br/> City: {season.team['city']}</h4>
            </h3>
        </Typography>
        <Typography variant='h6'>
            Turnover: {season['turnover']}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color='primary' variant='outlined'>
            {/* {team['abbreviation']} */}
        </Button>
      </CardActions>
    </Card>
  );
}
return getSeasonCart();
}


export default Seasons;