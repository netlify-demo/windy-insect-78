---
id: add-a-collaborator
title: Add a Collaborator
sidebar_label: Add a Collaborator
---

To let another developer edit this Docursaurus site, simply add a collaborator
to [the underlying GitHub repo]().

![](/docs/assets/add-collaborator.svg)

Once they have push access, collaborators can [edit pages](/docs/edit-a-page)
the exact same way you do. If they want to publish a change directly, they can
push a commit on the `master` branch to trigger a deploy. Or, they can put
their changes in a feature branch and use a pull request to let teammates
review changes before they go live.



## Step 1: Add a Collaborator in GitHub

Sign in to GitHub and visit [the repository for this Docusaurus
project](https://github.com). Add a friend or co-worker to the repo under the
“Collaborators” panel in the “Settings” tab. This will grant them push access to
the repo.

![GitHub Collaborator Admin Panel](/docs/assets/github-collaborator-screenshot.png)




## Step 2: Have Your Collaborator Request a Change

After your collaborator [clones the repo](/docs/getting-started), tell them to
find this file (`/docs/add-a-collaborator.md`) and edit the following line so
you can see them change something.

**Delete or edit this line so you can see that something changed.**

To publish their updates, they should:

1. Create a feature branch with `git checkout -b collaborator-page-edits`
2. Commit their changes to the feature branch with `git commit -a -m "Updated
   the 'Add a Collaborator' page"`
3. Push the branch back to GitHub with `git push origin
   collaborator-page-edits`
4. In GitHub, create a pull request asking to merge the
   `collaborator-page-edits` with `master`

This should be pretty familiar, as it’s exactly the same workflow you use for
every other software development project.

![](/docs/assets/creating-pull-request.png)


## Step 3: Accept and Publish the Change

Since Netlify only listens to the `master` branch by default, the feature
branch that your collaborator pushed will *not* be automatically deployed. This
is a good thing—it gives you a chance to review their changes before publishing
them.

![](/docs/assets/merge-pull-request.png)

Check out their PR in GitHub, and hit the merge button when you’re ready to
publish the change. As soon as you do, Netlify will detect the change in the
`master` branch and deploy the site. You should see your collaborator’s updates
on the [live site](https://{{GITHUB_REPO_NAME}}.netlify.com/).
