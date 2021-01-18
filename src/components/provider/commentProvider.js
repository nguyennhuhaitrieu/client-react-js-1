import React, { useState, useContext } from 'react';

const MyContext = React.createContext();

const CommentProvider = props => {
  const [selected, setSelected] = useState({
    content: '',
  });

  return (
    <MyContext.Provider
      value={[selected, setSelected]}
      {...props}
    />
  );
};

const useComment = () => {
  const context = useContext(MyContext);
  if (!context) { throw new Error('An error has occured in Context'); }
  const [commentContent, setCommentContent] = useState(context);
  return (
    {
      commentContent,
      setCommentContent,
    }
  );
};

export { CommentProvider, useComment };
