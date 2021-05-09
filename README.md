# Recent Activity

![image](https://user-images.githubusercontent.com/11576465/117540853-75125380-b011-11eb-8368-f473a575333b.png)

This GitHub Action is a Fork of the original [GitHub Activity Readme](https://github.com/jamesgeorge007/github-activity-readme) Action by [jamesgeorge007](https://github.com/jamesgeorge007).  
Its goal is to improve the original GitHub Action while also providing new features for the users.

## Features

The core feature of this GitHub Action is to update your README.md file, or any Markdown file, with the latest activities you made on GitHub.  
Current activities include:

- **Discussions** (Commenting)
- **Issues** (Opening or closing them)
- **Pull requests** (Opening, closing or merging them)

Other activities can't be displayed since they aren't parts of what GitHub's API returns as public events.

## Setup

- To get started, first make sure you add `<!--START_SECTION:activity-->` somewhere in your README.md file. This is where the list will appear when the action started.
- Next should you now move on to creating a new Workflow. In this example we create `.github/workflows/update-readme.yml`
- Now edit the YAML file and add the following content to it:

  ```yaml
  name: Update README

  on:
    schedule:
      - cron: "*/30 * * * *"
    workflow_dispatch:

  jobs:
    build:
      runs-on: ubuntu-latest
      name: Update this repo's README with recent activity

      steps:
        - uses: actions/checkout@v2
        - uses: Readme-Workflows/recent-activity@main
          env:
            GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
  ```

  **Notes:**

  - The example above would be triggered every 30 minutes. A page explaining the Cron syntax in GitHub Workflows can be found [here](https://jasonet.co/posts/scheduled-actions/#the-cron-syntax).  
   You can also use [Crontab.guru](https://crontab.guru) to create the right Cron-format to use.
  <!-- Is this here true? If yes, remove the HTML commet tags
  - Using `${{ secrets.GITHUB_TOKEN }}` will only show activities from public repositories. To show those of private ones will you need to create a Personal Access Token with the `repo` scope applied. -->

## Settings

The Action currently has the following Settings that you can set through the `with` option.

| Option              | Description                                                  | Default                                   |
| ------------------- | ------------------------------------------------------------ | ----------------------------------------- |
| `COMMIT_MSG`        | Sets the message to use for the Commit.                      | ⚡ Update README with the recent activity |
| `MAX_LINES`         | The total amount of lines to display.                        | 5                                         |
| `README_FILE`       | Path to the MD file you want to push the recent activity to. | ./README.md                               |
| `COMMENTS_ACTIVITY` | Sets the message to use for the Comments Activity.           | 🗣 Commented on {ID} in {REPO}            |
| `ISSUE_OPENED`      | Sets the message to display when issue is opened             | ❗️ Opened issue {ID} in {REPO}             |
| `ISSUE_CLOSED`      | Sets the message to display when issue is closed             | ❗️ Closed issue {ID} in {REPO}             |
| `PR_OPENED`         | Sets the message to display when pull request is opened      | 💪 Opened PR {ID} in {REPO}               |
| `PR_CLOSED`         | Sets the message to display when pull request is closed      | ❌ Closed PR {ID} in {REPO}               |
| `PR_MERGED`         | Sets the message to display when pull request is merged      | 🎉 Merged PR {ID} in {REPO}               |

- {REPO}
  Will be changed to the Username/Repository format.
- {ID}
  Will be changed to the issue or pull request ID this action belongs to.

## History

- The original project was inspired by [JasonEtco/activity-box](https://github.com/JasonEtco/activity-box)
- Puneet and Abhishek wanted to add a new feature, the original project was no longer maintained, so Puneet created a fork and Abhishek supported him.

## Examples

Here are some examples of various configuration setups.  
If you have a different setup that could be useful for others, let us know or submit a pr by editing this README.

### Higher delay

This example shows a Action that would update the README only twice a day.

```yaml
name: Update README

on:
  schedule:
    - cron: "0 0,12 * * *"
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest
    name: Update Profile README

    steps:
      - uses: actions/checkout@v2
      - uses: Readme-Workflows/recent-activity@main
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

### Higher amount of lines

Displays 10 lines of activities instead of the normal 5.

```yaml
name: Update README

on:
  schedule:
    - cron: "*/30 * * * *"
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest
    name: Update Profile README

    steps:
      - uses: actions/checkout@v2
      - uses: Readme-Workflows/recent-activity@main
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        with:
          MAX_LINES: 10
```

### Different Commit Message

Display a different Commit message

```yaml
name: Update README

on:
  schedule:
    - cron: "*/30 * * * *"
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest
    name: Update Profile README

    steps:
      - uses: actions/checkout@v2
      - uses: Readme-Workflows/recent-activity@main
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        with:
          COMMIT_MSG: "Update README with latest Activities"
```
