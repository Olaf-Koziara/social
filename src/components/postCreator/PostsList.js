import React, { useState } from "react";
import { connect, useSelector } from "react-redux";
import { firestore } from "../../firebaseConfig";
import { StyledPostsList } from "../../styledComponents";
import PostListItem from "./PostListItem";

const PostsList = ({ posts, user, images }) => {
  const _postsRender = posts.map((post) => {
    return <PostListItem own={user.email === post.email} post={post} />;
  });
  return <StyledPostsList>{images ? _postsRender : null}</StyledPostsList>;
};
const mapStateToProps = (state) => ({
  // posts: state.posts,
  user: state.user,
  images: state.profileImagesUrl,
});
export default connect(mapStateToProps)(PostsList);