import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAltOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHorizOutlined";
import moment from "moment";
import { useDispatch } from "react-redux";

import { likePost, deletePost } from "../../../actions/posts";
import useStyles from "./styles";

const Post = ({ post, setCurrentId }) => {
   const dispatch = useDispatch();
   const classes = useStyles();

   return (
      <Card sx={classes.card}>
         {/* background card  */}
         <CardMedia
            sx={classes.media}
            image={
               post.selectedFile ||
               "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
            }
            title={post.title}
         />
         <div style={classes.overlay}>
            <Typography variant="h6">{post.creator}</Typography>
            <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
         </div>

         {/* edit button */}
         <div style={classes.overlay2}>
            {/* saat edit button ditekan maka akan setCurrentId yang akan dikembalikan ke
            app.jsx dan akan digunakan pada form */}
            <Button
               style={{
                  color: "white",
               }}
               size="small"
               onClick={() => setCurrentId(post._id)}
               >
               <MoreHorizIcon fontSize="default" />
            </Button>
         </div>
         <div style={classes.details}>
            <Typography variant="body2" color="textSecondary" component="h2">
               {post.tags.map((tag) => `#${tag} `)}
            </Typography>
         </div>
         <Typography sx={classes.title} gutterBottom variant="h5" component="h2">
            {post.title}
         </Typography>
         <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
               {post.message}
            </Typography>
         </CardContent>
         <CardActions sx={classes.cardActions}>
            <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}>
               <ThumbUpAltIcon fontSize="small" /> Like {post.likeCount}{" "}
            </Button>
            <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
               <DeleteIcon fontSize="small" /> Delete
            </Button>
         </CardActions>
      </Card>
   );
};

export default Post;
