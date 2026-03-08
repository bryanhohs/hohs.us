import config from '../../config.json'

type Config = {
  // Site Information
  readonly site_home: string
  readonly site_url: string
  readonly site_name_short: string
  readonly site_name_full: string
  readonly site_year: number
  readonly site_title: string
  readonly site_description: string

  // Gemini AI Configuration
  readonly gemini_model: string
  readonly gemini_system: string
  readonly gemini_user: string
  readonly gemini_prompt: string
  readonly gemini_tokens: number
  readonly gemini_temp: number
  readonly gemini_thought: boolean
  readonly gemini_thinking: string
  readonly gemini_retries: number
  readonly gemini_delay: number
  readonly gemini_chunks: string

  // Metadata
  readonly meta_title: string
  readonly meta_description: string
  readonly meta_keywords: string
  readonly meta_author_name: string
  readonly meta_author_url: string
  readonly meta_creator: string
  readonly meta_publisher: string

  // Profile
  readonly profile_phone: string
  readonly profile_sms: string
  readonly profile_link: string
  readonly profile_email: string
  readonly profile_picture: string
  readonly profile_video: string
}

export default config as Config
