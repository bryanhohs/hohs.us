import config from "./config";
import { smoothStream, streamText } from 'ai';
import { google } from '@ai-sdk/google';

async function generateAiText(): Promise<string> {
  try {
    const { text } = await streamText({
      model: google(config.gemini_model),
      system: `${config.gemini_system}\n${config.gemini_user}`,
      prompt: config.gemini_prompt,
      experimental_transform: smoothStream({
        delayInMs: 10,
        chunking: 'word',
      }),
    });
    return (await text).replace(/[`*"']/g, '');
  } catch (error) {
    console.error('Error generating ai:', error);
    throw error;
  }
}

export default generateAiText;