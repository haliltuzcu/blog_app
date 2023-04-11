import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';



const Cards = ({item}) => {
  console.log(item);
  let date = String(new Date(`${item.publish_date}`)).split("GMT+0300 (GMT+03:00)").join("").split(" ").slice(1).join(" ")
  console.log(date);
  return (
    <Card sx={{ maxWidth: 270, margin:"30px"}}> 
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {item.author[0].toUpperCase()}
          </Avatar>
        }
        title={item.author}
        subheader={date}

      />
      <CardMedia
        component="img"
        height="194"
        sx={{objectFit:"fill"}}
        image={item.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant='h5' sx={{textAlign:"center"}}>{item.title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {item.content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Cards;