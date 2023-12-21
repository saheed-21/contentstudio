import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
    <Card sx={{ 
      marginTop: '50px',
      marginLeft: '75px',
      maxWidth: 345, 
      maxHeight :445,
      border: '2px solid white',
      }}>
      <CardMedia
        component="img"
        
        height="200"
        image={require('../assets/images/art.jpg')}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Art & Creativity
        </Typography>
        <Typography variant="body2" color="black">
        Art and Creativity express boundless imagination, evoke emotions, and shape culture through diverse visual and conceptual forms.
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button size="small">dISCOVER More</Button>
      </CardActions>
    </Card>
  );
}
