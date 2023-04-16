import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Box, Button } from "@mui/material";
import useBlogCall from "../hooks/useBlogCalls";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Details = () => {
  // console.log(item);
  const { postLikes } = useBlogCall();
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const { getDetail } = useBlogCall();
  const { details } = useSelector((state) => state.blog);
  const { currentUser } = useSelector((state) => state.auth);
  // console.log(currentUser);

  useEffect(() => {
    getDetail(id);
  }, []);

  console.log(details);
  const handleFav = () => {
    currentUser ? postLikes(id) : navigate("/login");
  };

  let date = String(new Date(`${details.publish_date}`))
    .split("GMT+0300 (GMT+03:00)")
    .join("")
    .split(" ")
    .slice(1)
    .join(" ");
  // console.log(date);
  return (
    <Card sx={{ maxWidth: 500, minWidth: 500, margin: "30px" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {details.author[0].toUpperCase()}
          </Avatar>
        }
        title={details.author}
        subheader={date}
      />
      <CardMedia
        component="img"
        height="194"
        sx={{ objectFit: "fill" }}
        image={details.image}
        alt="Paella dish"
      />
      <CardContent sx={{ height: "155px", overflow: "hidden" }}>
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          {details.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {details.content}
        </Typography>
      </CardContent>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites" onClick={handleFav}>
              <FavoriteIcon />
              <Typography>{details.likes}</Typography>
            </IconButton>
            <IconButton aria-label="add to favorites">
              <ChatBubbleOutlineIcon />
              <Typography>{details.comment_count}</Typography>
            </IconButton>
            <IconButton aria-label="add to favorites">
              <VisibilityIcon />
              <Typography>{details.post_views}</Typography>
            </IconButton>
          </CardActions>
        </Box>
        <Button
          sx={{
            border: "1px solid red",
            backgroundColor: "red",
            color: "black",
            width: "120px",
            height: "30px",
            marginRight: "5px",
            fontSize: "12px",
          }}
        >
          Read More
        </Button>
      </Box>
    </Card>
  );
};

export default Details;
