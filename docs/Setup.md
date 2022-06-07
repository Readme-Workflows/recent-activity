[template]: https://github.com/Readme-Workflows/activity-template
[sample]: https://github.com/Readme-Workflows/recent-activity/blob/main/sample.yml

# First time Setup

This page explains how you can setup Recent-Activity for your Profile-README.

## 0) Create Profile-README
If you have a Profile-README already can you skip to the next step.

The Profile-README can be created by creating a new Repository that matches your Username. For example, if your name is `User` would you name your Repository `User`.  
You know you set it up when you get a message telling you that you discovered a secret.

When creating the Repository, make sure you have setup the following things:

- You set the Repository to `Public`
- You checked `Add a README file`

You can also use a template Repository such as the [`activity-template`][template] provided by Readme-Workflows to quickly setup your Profile-README. Important is only that the name of the repository is your GitHub username.

## 1) Create Workflow file

In the newly created Repository should you now create a new workflow file.  
You can create a new workflow file through 2 ways.

### 1.1) Actions tab

This is the recommended way as it's simpler to set up and also comes with important settings pre-filled.  
To create the file, just click the `Actions` tab in your repository and then click on `set up a workflow yourself`.

You should now be greeted with a file editor screen that has the following content set:  
```yaml
# This is a basic workflow to help you get started with Actions

name: CI

# Controls when the workflow will run
on:
  # Triggers the workflow on push or pull request events but only for the master branch
  push:
    branches: [ master ]
  pull_request:
    branches: [ master ]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# A workflow run is made up of one or more jobs that can run sequentially or in parallel
jobs:
  # This workflow contains a single job called "build"
  build:
    # The type of runner that the job will run on
    runs-on: ubuntu-latest

    # Steps represent a sequence of tasks that will be executed as part of the job
    steps:
      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
      - uses: actions/checkout@v3

      # Runs a single command using the runners shell
      - name: Run a one-line script
        run: echo Hello, world!

      # Runs a set of commands using the runners shell
      - name: Run a multi-line script
        run: |
          echo Add other actions to build,
          echo test, and deploy your project.

```
By default does GitHub name the action `main.yml` but you can change that name to anything you want.

You're now ready to configure the file which we explain in the next step.

### 1.1) Manual setup

If you prefer a more manual setup can you create a file yourself manually.  
To do that, make sure that you're on the `Code` tab of the Repository and on the root-level of it. You know you're right if you see info on the right-hand side such as `About`.

From there click the `Add file` button followed by `Create new file`.  
In the editor window should you now make sure that the file is saved in the right location. To do this, click the small textbox at the top and type `.github/workflows/<name>.yml` (`<name>` can be any name you want).

In the large text field will you put the contents of the workflow which we explain below.

### 1.2) Configure file

Now it's time to configure the workflow file.

You can just copy the below text and replace any existing content in the editor with it.  
Note that `{version}` should be replaced with the latest release of the Recent-Activity Action.

```yaml
name: Update README

on:
  schedule:
    - cron: '*/30 * * * *' # Update every 30 minutes
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest
    name: Update Profile README

    steps:
      - uses: actions/checkout@v2.3.4
      - uses: Readme-Workflows/recent-activity@{version}
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
The action has some settings that are directly set through `with` options such as `CONFIG_FILE` which allows you to set a different config file to use (Explained next).

Once you're done with your setup commit the changes. You know you did it right if you can see `.github/workflows` in the directory where your README is located at.

## 2) Configure Recent-Activity

Now that you set up the workflow is it time to create and configure the YAML file for the Action.  
By default is the file called `recent-activity.config.yml` and is located in the `.github` directory. If you set a different file-path through the `CONFIG_FILE` option in the workflow, make sure that the name and location match.

When no configuration was defined would the action default to specific values:

- `username` defaults to the Repository-Owner
- `max_lines` defaults to 5
- `readme_file` defaults to `./README.md`
- `disabled_events` defaults to `["comments"]`

Please see the [`sample.yml`][sample] file for all options and their default values.  
You can also check the [[Configuration]] Page for any info about the different options.

## 3) Configure README file

The final step is to now update the README.md file. If you selected `Add a README file` when creating the repo, there should be a README file in your Repository that you can just edit.  
If there isn't a README file will you need to create one first.

While editing the README.md can you design it however you like. The only important part is, that you include a `<!--RECENT_ACTIVITY:start-->` and optionally a `<!--RECENT_ACTIVITY:last_update-->` comment in the README file.  
The Action uses those HTML-Comments to set the List and Date of last update respectively.

Here is a small example of how it could look like:  
```markdown
# User

Hello! I'm User.

## Recent Activity

This is a list of my most recent activity on GitHub.

<!--RECENT_ACTIVITY:start-->

<!--RECENT_ACTIVITY:last_update-->
```

Once you set up the file to your liking can you commit the changes and you're done!  
The Recent-Activity Action would now periodically update your Readme file with the latest activities you had.
