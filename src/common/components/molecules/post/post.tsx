import React from 'react';
import {StyledPost} from './post.style';

interface PostProps {
    title: string
}

const Post: React.FC<PostProps> = ({title = ''}) => {
    return (
        <StyledPost title={title} />
    )
};

export default Post;