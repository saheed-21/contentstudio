import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Gaming() {
  return (
    <Card sx={{ 
        marginTop: '80px',
        marginLeft: '490px',
        maxWidth: 345, 
        maxHeight :445,
        border: '2px solid white',
        }}>
      <CardMedia
        component="img"
        
        height="200"
        image={require('../assets/images/g1.webp')}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          GAMING
        </Typography>
        <Typography variant="body2" color="black">
        Interactive digital entertainment, spanning genres, fostering creativity, skill development, and global community connections.
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button size="small">Discover More</Button>
      </CardActions>
    </Card>
  );
}
