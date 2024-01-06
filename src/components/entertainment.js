import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Entertainment() {
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
        image={require('../assets/images/entertainment.jpg')}
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          ENTERTAINMENT
        </Typography>
        <Typography variant="body2" color="black">
        Entertainment captivates, delights, and inspires, offering joy, escape, and cultural enrichment across diverse forms and mediums
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Discover More</Button>
      </CardActions>
    </Card>
    
  );
}