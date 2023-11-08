import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

interface ItemCardProps {
  name: string;
  description: string;
  navigationURL: string;
}

const ItemCard: React.FC<ItemCardProps> = ({
  name,
  description,
  navigationURL
}: ItemCardProps) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image='https://source.unsplash.com/random?wallpapers'
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <Link to={navigationURL}>Check</Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default ItemCard;
