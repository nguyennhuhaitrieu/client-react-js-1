// @flow
import AxiosService from './axiosService';

class Vocabulary extends AxiosService {
  markVocabulary = (data: any) => {
    const { movie_id, currentUserId, token } = data;
    const word_en = data.vocabulary.translateText;
    const word_vi = data.vocabulary.text;
    const sub_text = data.subText;
    const values = { word_en, word_vi, sub_text };
    return this.postWithToken({ url: `http://localhost:3001/api/v1/users/${currentUserId}/user_vocabularies/${movie_id}`, values, token });
  }

  getUserVocabulary =(data: any) => {
    const { currentUserID, token, page } = data;
    return this.getWithToken({ url: `http://localhost:3001/api/v1/users/${currentUserID}/user_vocabularies?page=${page}`, data, token });
  }

  getVocabularyTest =(data: any) => {
    const { currentUserID, token, page } = data;
    return this.getWithToken({ url: `http://localhost:3001/api/v1/users/${currentUserID}/user_vocabularies/test?page=${page}`, data, token });
  }
}

const VocabularyApi = new Vocabulary();

export default VocabularyApi;
