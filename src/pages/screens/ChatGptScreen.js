/* eslint-disable prettier/prettier */
import axios from 'axios';
// import { OPENAI_KEY } from '@env';
const OPENAI_KEY= "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"
const instance = axios.create({
  baseURL: 'https://api.openai.com/v1/engines/gpt-3.5-turbo-instruct/completions',
//   baseURL: 'https://api.openai.com/v1/engines/davinci-codex/completions',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer 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`
    // 'Authorization': `Bearer ${OPENAI_KEY}`
  }
});

// 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   final api key 

export const generateResponse = async (message) => {
  try {
    const response = await instance.post('', {
      prompt: message,
    //   max_tokens: 60
    });
    return response.data.choices[0].text;
  } catch (error) {
    console.error(error);
    console.log("comes here")
    return '';
  }
};