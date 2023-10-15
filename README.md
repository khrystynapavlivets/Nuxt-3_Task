# Nuxt-3_Task
Creating a web application using Nuxt 3, extracting data from the API and implementing dynamic navigation for moving around the page.

To deploy this Nuxt 3 project on GitHub Pages, follow these steps:

1. Install the development dependency `gh-pages`: npm install --save-dev gh-pages

2. Add the deployment script to your package.json file:
#json
Copy code
"scripts": {
  "deploy": "gh-pages -d dist"
}

3. Specify the baseURL in your nuxt.config.ts file to match the repository name on GitHub Pages:
   export default {
  // ...
  router: {
    base: '/repository-name/' // Replace 'repository-name' with your actual repository name
  },
  // ...
}

4.Specify buildAssetsDir in your nuxt.config.ts:
export default {
  // ...
  build: {
    assetsDir: 'assets'
  },
  // ...
}

5.Create an empty file named .nojekyll at the root of your project. This file is needed to disable Jekyll processing on GitHub Pages.

6.Generate the static site with the following command:  npm run generat

7.Deploy your site to GitHub Pages using the following command:  npm run deploy
