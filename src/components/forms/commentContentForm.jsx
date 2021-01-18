// @flow
import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faEdit, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

import { deleteCommentData } from '../../actions/vimActions';
import { currentUserIdSelector, accessTokenSelector } from '../../selectors/authSelector';
import '../../styles/comment.css';

type Props = {
  comment: Object;
  currentUserId: Number;
  deleteCommentData: Function;
  setCommentContent: Function;
  id: Number;
  token: String;
}

const CommentContentForm = (props: Props) => {
  const { comment, currentUserId, setCommentContent, deleteCommentData: deleteComment, id, token } = props;

  const edit = (content) => {
    setCommentContent([{ content, commentId: comment.id, token }]);
  };

  return (
    <>
      <li className="comments__item">
        <div className="comments__autor">
          <img className="comments__avatar" src="/images/user.png" alt="" />
          <span className="comments__name">{comment.commenter}</span>
          <span className="comments__time">{comment.updated_at}</span>
        </div>
        <p className="comments__text">{comment.content}</p>
        <div className="comments__actions">
          <div className="comments__rate">
            <button type="button"><FontAwesomeIcon className="icon ion-ios-star star-font fa-lg icon-like" icon={faThumbsUp} />12</button>

            <button type="button">7<FontAwesomeIcon className="icon ion-ios-star star-font fa-lg icon-dislike" icon={faThumbsDown} /></button>
          </div>

          {
            (comment.user_id === currentUserId) && (
            <>
              <button type="button" onClick={() => edit(comment.content)}><FontAwesomeIcon className="icon fa-truck ion-ios-star star-font fa-lg icon-default" icon={faEdit} />Edit</button>
              <button
                type="button" onClick={() => {
                  deleteComment({ commentId: comment.id, movieId: id, currentUserId, token });
                }}
              ><FontAwesomeIcon className="icon ion-ios-star star-font fa-lg icon-default" icon={faQuoteRight} />Delete
              </button>
            </>
            )
          }
        </div>
      </li>
    </>
  );
};

const mapStateToProps = (state) => ({
  currentUserId: currentUserIdSelector(state),
  token: accessTokenSelector(state),
});

export default connect(mapStateToProps, { deleteCommentData })(CommentContentForm);
