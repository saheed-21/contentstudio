import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Technology() {
  return (
    <Card sx={{ 
      marginTop: '-381px',
      marginLeft: '75px',
      maxWidth: 345, 
      maxHeight :445,
      border: '2px solid white',
      }}>
      <CardMedia
        component="img"
        
        height="200"
        image={require('../assets/images/technology.jpg')}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          TECHNOLOGY
        </Typography>
        <Typography variant="body2" color="black">
        Evolving innovations shaping modern life, from AI breakthroughs to smart devices, driving global connectivity and progress.
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button size="small">dISCOVER More</Button>
      </CardActions>
    </Card>
  );
}
