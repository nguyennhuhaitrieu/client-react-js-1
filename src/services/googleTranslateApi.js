// @flow
import TranslateService from './translateService';

class GoogleTranslate extends TranslateService {
  getTextTranslate = (data: any) => this.post({ url: 'https://translation.googleapis.com/language/translate/v2', data })
}

const GoogleTranslateApi = new GoogleTranslate();

export default GoogleTranslateApi;
