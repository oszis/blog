import React from 'react';

interface PostProps {
    title: string
}

const Post: React.FC<PostProps> = ({title = ''}) => {

}

export default Post;