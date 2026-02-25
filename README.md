## Code Style

- **Language**: TypeScript with strict mode enabled
- **Linter**: Biome (primary) with ESLint for Next.js rules
- **Formatting**: Biome with 2-space indents, single quotes, trailing commas, line width 80
- **Commands**: 
  - `npm run lint` - Check code with Biome
  - `npm run format` - Format code with Biome

## Architecture

**Framework**: Next.js 16 with React 19, using App Router

**Key Directory Structure**:
- `app/` - Next.js app directory (Server Components by default)
- `app/src/` - Utility modules (config, AI integration, styling)
- `public/assets/` - Static assets (images, icons, videos)

**Frontend Stack**:
- **UI Library**: Material-UI (MUI) with Emotion for styling
- **Styling**: Tailwind CSS + Emotion (both configured)
- **Icons**: MUI Icons

**API Integration**:
- **AI Provider**: Google Gemini via `@ai-sdk/google`
- **Streaming**: Uses `streamText()` with word-chunking for smooth UI updates
- Pattern: See [ai.tsx](app/src/ai.tsx) - async function that returns cleaned text

## Build and Test

```bash
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Production build
npm run start    # Run production build
npm run lint     # Check code quality
npm run format   # Auto-format code
```

## Project Conventions

**Configuration**:
- All config values in [config.json](config.json) with TypeScript types in [config.tsx](app/src/config.tsx)
- Always reference config values, never hardcode site names/URLs

**Server Components & Async**:
- Page components are async by default (App Router)
- Example: [page.tsx](app/page.tsx) - async component awaits AI text before rendering
- Avoid storing async results in state; await them server-side

**Variable Naming**:
- Use camelCase for variables (not UPPER_SNAKE_CASE unless constants)
- Prefer descriptive names: `geminiText` not `GEMINI`

**Component Props**:
- Remove redundant props (e.g., `target="_self"` on links, `gutterBottom` on non-Typography)
- Keep only necessary MUI props

## Integration Points

**Gemini API** ([ai.tsx](app/src/ai.tsx)):
- Configured via `@ai-sdk/google`
- Returns text with special chars stripped (`[`*"']/g`)
- Uses experimental smooth streaming with 10ms delay

**Analytics & Monitoring**:
- Vercel Analytics enabled (`@vercel/analytics`)
- Vercel Speed Insights enabled (`@vercel/speed-insights`)

## Security

- Never commit API keys; use environment variables (e.g., `GOOGLE_API_KEY`)
- config.json contains public information only
- Phone number `13124399036` exposed in contact links—acceptable for personal site
