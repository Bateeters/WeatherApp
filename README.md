# webpack-repo

Template Repo with Webpack Ready To Go

To run site, use command:

    npx webpack serve

in terminal, then navigate to http://localhost:8080/

To stop, use ctrl + C

---

To deploy to GitHub Pages

1. from the GitHub repo, make a new branch to deploy from by running:
   `git branch gh-pages`

The rest should be done every time you redeploy the project

2. Make sure you have all work committed. you can use: `git status` to see if there's anything that needs to be committed still.

3. Run `git checkout gh-pages && git merge main --no-edit` to change branch and sync your changes from main so that you're ready to deploy.

4. Now, bundle your application into dist with the build command. Unless changed, it's `npx webpack`

5. There's a few more commands. Run each of these IN ORDER:
   `git add dist -f && git commit -m "Deployment commit"`
   `git subtree push --prefix dist origin gh-pages`
   `git checkout main`

6. remember that the source branch for GitHub Pages is set in your repository's settings. get this changed to the gh-pages branch and that should be all!
