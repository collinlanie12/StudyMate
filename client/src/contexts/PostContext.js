import React from 'react';

const PostContext = React.createContext({
    submitted: undefined,
    onPostSubmit: () => undefined
});

export default PostContext;
