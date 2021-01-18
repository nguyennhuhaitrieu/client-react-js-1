// @flow
import AxiosService from './axiosService';

class Comment extends AxiosService {
  getComment = (data: any) => {
    const { page, id } = data;
    return this.get({ url: `http://localhost:3001/api/v1/films/${id}/comments?page=${page}`, data });
  }

  addComment = (data: any) => {
    const { values } = data;
    const { token, movieId, currentUserId, content } = values;

    const commentValues = { user_id: currentUserId, content };
    return this.postWithToken({ url: `http://localhost:3001/api/v1/films/${movieId}/comments`, values: commentValues, token });
  }

  editComment = (data: any) => {
    const { values } = data;
    const { token, movieId, currentUserId, content, commentId } = values;

    const commentValues = { user_id: currentUserId, content };
    return this.putWithToken({ url: `http://localhost:3001/api/v1/films/${movieId}/comments/${commentId}`, values: commentValues, token });
  }

  deleteComment = (data: any) => {
    const { commentId, movieId, token, user_id: currentUserId } = data;
    const values = { user_id: currentUserId };
    return this.deleteWithToken({ url: `http://localhost:3001/api/v1/films/${movieId}/comments/${commentId}`, values, token });
  }
}

const CommentApi = new Comment();

export default CommentApi;
