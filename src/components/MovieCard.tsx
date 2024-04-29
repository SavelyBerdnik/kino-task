import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const MovieCard = ({moviePoster, rating="", name, date=""}: {moviePoster: string, rating: string, name: string, date: string, }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={moviePoster}
          alt="Movie poster"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {rating}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {date}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default MovieCard;