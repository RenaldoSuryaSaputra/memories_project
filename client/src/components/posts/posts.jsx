import React from "react";
import { Grid, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux"; // fetch data from global redux store

import Post from "./Post/Post";
import useStyles from "./styles";

const Posts = () => {
   // akses semua store dengan nama posts di index reducer
   const posts = useSelector((state) => state.posts);
   const classes = useStyles();

   console.log(posts);

   // return !posts.length ? (
   //    <CircularProgress />
   // ) : (
   //    <Grid sx={classes.container} container alignItems="stretch" spacing={3}>
   //       {posts.map((post) => (
   //          <Grid key={post._id} item xs={12} sm={6} md={6}>

   //          </Grid>
   //       ))}
   //    </Grid>
   // );
   return (
      <>
         <div>POSTTTT</div>
      </>
   );
};

export default Posts;
