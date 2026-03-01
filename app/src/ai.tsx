import config from "./config";
import { google, GoogleLanguageModelOptions } from '@ai-sdk/google';
import { smoothStream, streamText } from 'ai';

async function generateAiText(): Promise<string> {
  try {
    const { text } = await streamText({
      model: google(config.gemini_model),
      maxOutputTokens: config.gemini_tokens,
      temperature: config.gemini_temp,
      maxRetries: config.gemini_retries,
      system: `${config.gemini_system}\n${config.gemini_user}`,
      prompt: config.gemini_prompt,
      providerOptions: {
        google: {
          thinkingConfig: {
            includeThoughts: config.gemini_thought,
            thinkingLevel: config.gemini_thinking as "high" | "medium" | "low" | "minimal"
          },
        } satisfies GoogleLanguageModelOptions,
      },
      experimental_transform: smoothStream({
        delayInMs: config.gemini_delay,
        chunking: config.gemini_chunks as "word" | "line"
      }),
    });
    return (await text).replace(/[*"']/g, '');
  } catch (error) {
    console.error('Error generating ai:', error);
    throw error;
  }
}

export default generateAiText;