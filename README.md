# doctorbacak.com

Website for Dr. Bacak in College Station

- Domain and CDN on Cloudflare
- Site hosted on Netlify
- CMS: Decap CMS (git-based)

## Local development

Install dependencies:

```bash
npm install
```

Run the site with local Decap CMS backend (starts both Eleventy and the Decap proxy server):

```bash
npm run cms
```

The site will be available at `http://localhost:8080` and the CMS at `http://localhost:8080/admin`.

To run the site without the CMS:

```bash
npm start
```

## Deployment

The site deploys automatically via Netlify on push to `main`. No manual deployment step is needed.

Netlify handles the build command (`npm run build`) and serves the `_site` output directory.
