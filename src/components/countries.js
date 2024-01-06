import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard() {
  return (
    
    <Card sx={{ 
        marginTop: '-382px',
        marginLeft: '900px',
        maxWidth: 345, 
        maxHeight :445,
        border: '2px solid white',
        }}>
      <CardMedia
        component="img"
        
        height="200"
        image={require('../assets/images/download.jpeg')}
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          COUNTRIES
        </Typography>
        <Typography variant="body2" color="black">
        Countries are distinct geographic areas with defined borders, unique cultures, governments, and often diverse populations.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Discover More</Button>
      </CardActions>
    </Card>
    
  );
}