import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Art() {
  return (
    <Card sx={{ 
        marginTop: '-381px',
        marginLeft: '490px',
        maxWidth: 345, 
        maxHeight :445,
        border: '2px solid white',
        }}>
      <CardMedia
        component="img"
        
        height="200"
        image={require('../assets/images/SPORTS.jpg')}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        SPORTS
        </Typography>
        <Typography variant="body2" color="black">
        Sports unite nations, fostering pride, camaraderie, and cultural exchange, showcasing diverse talents on the global stage.
       </Typography>
      </CardContent>
      <CardActions>
        
        <Button size="small">Discover More</Button>
      </CardActions>
    </Card>
  );
}
