# Steps to Deploy Your Portfolio to Vercel

## 1. Download the Latest Code

First, download all the code from Replit including the new files we've added:
- vercel.json
- api/index.js
- .vercelignore

## 2. Push to GitHub

1. Extract the downloaded files to your local machine
2. Navigate to the directory in your terminal or command prompt
3. Run these commands:

```bash
# If you already have the repository cloned
git pull origin main  # Get latest changes
# Copy the new files in

# Add all files
git add .

# Commit
git commit -m "Added Vercel deployment configuration and Instagram links"

# Push to GitHub
git push origin main
```

## 3. Deploy on Vercel

1. Go to [Vercel](https://vercel.com/) and sign in with GitHub
2. Click "Add New..." > "Project"
3. Import your repository (portfolio-A)
4. In the configuration screen:
   - Framework Preset: Choose "Other" (not Vite)
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
   - Development Command: (leave empty)

5. Environment Variables
   - Add the DATABASE_URL environment variable if you want to use the database features
   - Add SENDGRID_API_KEY if you want to use email functionality

6. Advanced Settings
   - Set "Include source files outside of the Root Directory": Yes (if this option is available)

7. Click "Deploy"

## 4. Check Special Files

Make sure these files are included in your GitHub repository:
- `vercel.json` (configuration for Vercel)
- `api/index.js` (serverless function entry point)
- `.vercelignore` (tells Vercel what to ignore)

## 5. After Deployment

1. Test all features in the live site
2. If you see any issues with API routes, check the Vercel logs in your dashboard
3. If needed, redeploy with adjusted settings

## Troubleshooting

- If the build fails, check the Vercel build logs
- If API routes aren't working, ensure the paths in vercel.json match your actual API routes
- For database issues, verify that the environment variables are set correctly