
# Lilith Host Server (Nova Edition)

A mobile-friendly Node.js server for toggling SFW/NSFW content, with a fingerprint lock placeholder and a static file server. Built to deploy easily on Railway.

## Features
- SFW/NSFW toggle: `/toggle`
- Fake fingerprint unlock: `/unlock`
- NSFW gated content: `/nsfw/example`
- Public static files: `/public`
- Homepage: `/`

## Run Locally

```
npm install
npm start
```

## Deploy on Railway

1. Push this repo to GitHub
2. Go to [https://railway.app](https://railway.app)
3. New Project → Deploy from GitHub
