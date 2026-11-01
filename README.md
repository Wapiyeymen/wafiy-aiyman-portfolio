# Wafiy Aiyman — Portfolio

Personal portfolio in plain HTML, CSS and JavaScript. No dependencies, installation or build step.

## Deploy on Vercel

Import this repository. Use framework preset **Other**, root directory **./**, leave the build command empty and output directory **dist**. The output directory is also declared in vercel.json.

## Validate locally

Run `node validate.mjs`. To preview, serve the dist folder with a local static HTTP server.

## Update content

Projects are in dist/projects.js. Professional details are in dist/config.js. Layout is in dist/index.html, styles in dist/style.css and dist/motion.css. Project previews use the media arrays. Public project/model links use repository or projectUrl/projectPlatform.

Production URL: https://wafiy-aiyman-portfolio.vercel.app/

The production branch is `main`. After connecting this repository to the existing Vercel project, push changes to `main` to trigger a production deployment. Project source files are in `dist/`; no build command is required.

The contact section uses mailto and email copying, with no message backend. The downloadable CV is the approved public copy. The supplied Coohom destination is retained; its viewer reported a model-loading error during verification in the in-app browser.
