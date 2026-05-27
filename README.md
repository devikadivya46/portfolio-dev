<div align="center">

</div>

# Run and deploy

This contains everything you need to run the app locally and deploy it to Vercel.


## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Run the app:
   `npm run dev`

## Build for Production

1. Create a production build:
   `npm run build`
2. Preview the production build locally:
   `npm run preview`

## Deploy on Vercel

1. Push the project to GitHub.
2. Import the repository in Vercel.
3. Use these settings:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Deploy.

If you use environment variables for future features, add them in the Vercel dashboard under Project Settings > Environment Variables.
