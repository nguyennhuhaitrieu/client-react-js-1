// @flow
import TextToSpeechService from './textToSpeechService';

class TextToSpeech extends TextToSpeechService {
  getTextToSpeech = (data: any) => this.post({ url: 'https://texttospeech.googleapis.com/v1/text:synthesize', data })
}

const TextToSpeechApi = new TextToSpeech();

export default TextToSpeechApi;
