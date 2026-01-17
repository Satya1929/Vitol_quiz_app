# 🚀 Deployment Guide - V-Quiz App

## Netlify Deployment with AI Features

Since your app now uses the Gemini API, you need to configure environment variables on Netlify.

### Step 1: Build & Deploy
1. Push your code to GitHub (the `.env` file will NOT be included - it's gitignored)
2. Connect your repository to Netlify
3. Netlify will auto-detect it's a Vite project

### Step 2: Configure Environment Variables
⚠️ **CRITICAL**: Add your API key in Netlify's dashboard:

1. Go to your Netlify project dashboard
2. Navigate to: **Site settings** → **Environment variables**
3. Click **Add a variable**
4. Add:
   - **Key**: `VITE_GEMINI_API_KEY`
   - **Value**: `[paste your Gemini API key here]`
   - **Scopes**: Check both "Production" and "Deploy previews"
5. Click **Save**

### Step 3: Redeploy
- Trigger a new deploy (Netlify → Deploys → Trigger deploy)
- Your AI tutor feature will now work in production! 🎓

## Testing Locally
```bash
# Make sure .env exists with your key
npm run dev

# Test the build
npm run build
npm run preview
```

## Security Checklist
- ✅ `.env` is in `.gitignore`
- ✅ Never commit API keys to GitHub
- ✅ Use Netlify environment variables for production
- ✅ `.env.example` shows required variables (without actual keys)

## Monitoring API Usage
- Track your Gemini API usage at: https://makersuite.google.com/app/apikey
- Free tier includes generous limits for educational projects
