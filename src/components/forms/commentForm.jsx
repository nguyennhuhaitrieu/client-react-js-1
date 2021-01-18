// @flow
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import AddCommentForm from '../button/addCommentButton';
import CommentContentForm from './commentContentForm';
import { getCommentData } from '../../actions/vimActions';
import { commentSelector } from '../../selectors/commentSelector';
import { useComment } from '../provider/commentProvider';
import '../../styles/comment.css';

type Props = {
  getCommentData: Function;
  listComments: Object;
  id: Number;
}

const CommentForm = (props: Props) => {
  const { getCommentData: getComment, id, listComments } = props;
  const { commentContent, setCommentContent } = useComment();

  useEffect(() => {
    getComment({ id, page: 1 });
  }, []);

  return (
    <>
      <div className="col-12">
        <div className="comments">
          <ul className="comments__list">
            {
              listComments.comments && listComments.comments.map(comment => <CommentContentForm key={comment.id} {...{ comment, setCommentContent, id }} />)
            }
          </ul>

          <AddCommentForm {...{ commentContent, id }} />
        </div>
      </div>
    </>
  );
};

export default connect(commentSelector, { getCommentData })(CommentForm);
