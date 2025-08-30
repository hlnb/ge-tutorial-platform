#!/bin/bash

# Script to deploy Firebase environment variables to Vercel
# Run this script once to set up your production environment variables

echo "Setting up Firebase environment variables in Vercel..."

vercel env add VITE_FIREBASE_API_KEY production
vercel env add VITE_FIREBASE_AUTH_DOMAIN production
vercel env add VITE_FIREBASE_PROJECT_ID production
vercel env add VITE_FIREBASE_STORAGE_BUCKET production
vercel env add VITE_FIREBASE_MESSAGING_SENDER_ID production
vercel env add VITE_FIREBASE_APP_ID production
vercel env add VITE_FIREBASE_MEASUREMENT_ID production

echo "Environment variables added to Vercel."
echo "You'll need to enter the values interactively, or redeploy your application."
echo ""
echo "Alternatively, you can add them via the Vercel dashboard:"
echo "https://vercel.com/dashboard → Your Project → Settings → Environment Variables"