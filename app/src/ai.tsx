import config from "./config";
import { smoothStream, streamText } from 'ai';
import { google } from '@ai-sdk/google';

async function Google() {
  try {
    const GEMINI_MODEL = google(`${config.gemini_model}`);
    const GEMINI_SYSTEM = config.gemini_system;
    const GEMINI_USER = config.gemini_user;
    const GEMINI_PROMPT = config.gemini_prompt;
    const { text } = await streamText({
      model: GEMINI_MODEL,
      system:
        GEMINI_SYSTEM +
        GEMINI_USER,
      prompt: GEMINI_PROMPT,
      experimental_transform: smoothStream(),
    });
    const GEMINI: string = (await text).replace(/[`*“”"']/g, '');
    return GEMINI;
  } catch (error) {
    console.error('Error generating ai:', error);
    throw error;
  }
}

export default Google;