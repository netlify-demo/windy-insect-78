---
id: edit-a-page
title: Edit a Page
sidebar_label: Edit a Page
---

To publish a change to this Docusaurus site, all you have to do is:

1. Edit a page in your favorite text editor
2. Create a Git commit on the production branch (`master`)
3. Push the production branch to the origin repo

Netlify will automatically detect the new commit, build the entire website, and
deploy it to a global CDN.

![](/docs/assets/edit-page.svg)



## Step 1: Edit a Page

Make sure you’ve [set up this project](/docs/getting-started) on your local
machine. Then, open up the source file for this page (`/docs/edit-a-page.md`) in
a text editor.


**Delete or edit this line so you can see that something changed.**


Docusaurus will rebuild the site locally, and you should be able to see the updated
page at <a href='http://localhost:3000/docs/edit-a-page'
target='_blank'>localhost:3000/docs/edit-a-page</a>



## Step 2: Create a Git Commit

Commit the change as you would in any static site generator:

    git commit -a -m "Edited some documentation"



## Step 3: Push the Commit

To publish changes, simply push the branch back to the origin repo that we
created for you on GitHub.

    git push -u origin master

In a few seconds, you should be able to see the updated page on the [live
site](https://{{GITHUB_REPO_NAME}}.netlify.com/).
