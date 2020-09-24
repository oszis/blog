import React from "react";

const Post = ({match: {params}}) => {
    return <div>Post {params.id}</div>;
}

export default Post;
