import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Automobiles() {
  return (
    <Card sx={{ 
        marginTop: '-382px',
        marginLeft: '490px',
        maxWidth: 345, 
        maxHeight :445,
        border: '2px solid white',
        }}>
      <CardMedia
        component="img"
        
        height="200"
        image={require('../assets/images/automobiles.jpg')}
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          AUTOMOBILES
        </Typography>
        <Typography variant="body2" color="black">
        Automobiles drive through diverse countries, connecting cultures with roads, enhancing mobility, and fostering economic development
        </Typography>
      </CardContent>
      <CardActions>
       
        <Button size="small">DISCOVER More</Button>
      </CardActions>
    </Card>
  );
}
