import { google } from '@ai-sdk/google';
import { smoothStream, streamText } from 'ai'
import config from './config'

async function generateAiText(): Promise<string> {
  try {
    const { text } = streamText({
      model: config.gemini_model,
      maxOutputTokens: config.gemini_tokens,
      maxRetries: config.gemini_retries,
      system: `${config.gemini_system}\n${config.gemini_user}`,
      prompt: config.gemini_prompt,
      experimental_transform: smoothStream({
        delayInMs: config.gemini_delay,
        chunking: config.gemini_chunks as 'word' | 'line',
      }),
    })
    return (await text).replace(/[*"']/g, '')
  } catch (error) {
    console.error('Error generating ai:', error)
    throw error
  }
}

export default generateAiText
