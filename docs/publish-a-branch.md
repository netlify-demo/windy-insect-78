---
id: publish-a-branch
title: Publish a Branch
sidebar_label: Publish a Branch
---

By default, Netlify only auto-deploys your `master` branch, but you can enable
branch builds to auto-deploy *any* branch in your Git repository. Branch builds
are particularly useful for creating staging environments to test changes
before they go live, as well as for maintaining multiple versions of your
documentation.

![](/docs/assets/publish-a-branch.svg)

Let’s try using branch builds to maintain separate v1 and v2 versions of this
Docusaurus website.


## Step 1: Create a Local v2 Branch and Add a Commit

First, we need to create a branch in our local Git repository. Make sure you’ve
[set up this project](/docs/getting-started), then run the following to
create and check out a `v2` branch:

    git checkout -b v2

Let’s also make a commit on this branch so that we can see that content exists
in version 2.0 that doesn’t exist in version 1.0. Open up
`website/siteConfig.js` and append `(version 2.0)` to the `title` property:

    const siteConfig = {
      title: '<Your Company> Dev Docs (version 2.0)',
      ...
    }

You should see this reflected in the title of your home page.


## Step 2: Enable Netlify Branch Builds

Sign in to the [Netlify
admin](https://app.netlify.com/sites/{{GITHUB_REPO_NAME}}/overview) for this
website. You should have been invited to it when you created this demo site.
Note that you **must** accept the Netlify invitation by clicking the link in
you inbox before you can visit the Netlify admin panel.

In the Netlify admin panel, navigate to `Settings > Build & Deploy > Deploy
Settings`, then click the "Edit Settings" button. Enable the "Let me add
individual branches" option and enter `v2` for the branch.

![](/docs/assets/enable-branch-builds.png)



## Step 3: Push the v2.0 Branch

Now the `v2` branch works just like `master`, except it has a different URL.
Push it to the GitHub repo:

    git push -u origin v2

Since we enabled branch builds for the `v2` branch, this will trigger a deploy
at a [new URL](https://v2--{{GITHUB_REPO_NAME}}.netlify.com):

    https://v2--{{GITHUB_REPO_NAME}}.netlify.com

For branch builds, the branch name is prependend to site with two hyphens.
You’re now managing two versions of a Docusaurus site. When you want to update
the version 2.0 docs, push to the `v2` branch. When you want to update the
version 1.0 docs, push to `master`.
