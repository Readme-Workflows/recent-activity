# Recent Activity

[![GitHub issues](https://img.shields.io/github/issues/Readme-Workflows/recent-activity)](https://github.com/Readme-Workflows/recent-activity/issues)
![GitHub repo size](https://img.shields.io/github/repo-size/Readme-Workflows/recent-activity)
![Lines of code](https://img.shields.io/tokei/lines/github/Readme-Workflows/recent-activity?label=total%20lines%20of%20code)
[![Discord Chat](https://img.shields.io/discord/826082157259915264?color=%237289da&label=discord)](https://discord.gg/BxNXeanT8k)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)](https://github.com/PuneetGopinath/IRCbot/blob/main/.github/CODE_OF_CONDUCT.md)

This GitHub Action is a Fork of the original [GitHub Activity Readme](https://github.com/jamesgeorge007/github-activity-readme) Action by [jamesgeorge007](https://github.com/jamesgeorge007).  
Its our goal is to improve the original GitHub Action while also providing new features for the users.

## Preview

![image](https://user-images.githubusercontent.com/11576465/117540853-75125380-b011-11eb-8368-f473a575333b.png)

## Features

The core feature of this GitHub Action is to update your _Profile README_ file, or any _Markdown file_, with the latest activities you made on GitHub.  
Current activities include:

- **Issues** (Opening, closing and commenting)
- **Pull requests** (Opening, closing and merging)

Some other activities can't be displayed since they aren't parts of what GitHub's API returns as public events.

You can [request a feature](https://github.com/Readme-Workflows/recent-activity/issues/new?template=feature_request.md) if you want to add some other events:

### Setup a Profile README

If you're a beginner, then [here is an article](https://abhijoshi2k.medium.com/how-to-create-a-readme-for-your-github-profile-95e0fc474f49) made by [@abhijoshi2k](https://github.com/abhijoshi2k) that explains how you can create and manage your own Profile README.

The official GitHub documentation about Profile READMEs can be found [here](https://docs.github.com/en/github/setting-up-and-managing-your-github-profile/managing-your-profile-readme).

## Setup

![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/Readme-Workflows/recent-activity?label=Latest%20Version)

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
        - uses: actions/checkout@v2.3.4
        - uses: Readme-Workflows/recent-activity@{version} # Replace {version} with the latest available version on the Repository.
          env:
            GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
  ```

  **Notes:**

  - The example above would be triggered every 30 minutes. A page explaining the Cron syntax in GitHub Workflows can be found [here](https://jasonet.co/posts/scheduled-actions/#the-cron-syntax).  
   You can also use [Crontab.guru](https://crontab.guru) to create the right Cron-format to use.

## Settings

The Action currently has the following Settings that you can set through the `with` option.

<table>
  <thead>
    <tr>
      <th>Option</th>
      <th>Description</th>
      <th>Default</th>
      <th>Supported Placeholder</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>GH_USERNAME</code></td>
      <td>The User to get latest activity from</td>
      <td><i>Repository Owner</i></td>
      <td></td>
    <tr>
      <td><code>COMMIT_MSG</code></td>
      <td>The Commit Message to use when updating the README</td>
      <td><code>⚡ Update README with the recent activity</code></td>
      <td></td>
    </tr>
    <tr>
      <td><code>MAX_LINES</code></td>
      <td>How many activities to display</td>
      <td><code>5</code></td>
      <td></td>
    </tr>
    <tr>
      <td><code>README_FILE</code></td>
      <td>The location of the README.md (or any Markdown file) relative to the root directory.</td>
      <td><code>./README.md</code></td>
      <td></td>
    </tr>
      <td>&#8203;</td>
      <td>&#8203;</td>
      <td>&#8203;</td>
      <td>&#8203;</td>
    </tr>
    <tr>
      <td><code>COMMENTS_ACTIVITY</code></td>
      <td>Text displayed for making a comment.<br/>Includes comments on Issues and Pull requests</td>
      <td><code>🗣 Commented on {ID} in {REPO}</code></td>
      <td><code>{REPO}</code><br/><code>{ID}</code><br/><code>{URL}</code></td>
    </tr>
    <tr>
      <td><code>ISSUE_OPENED</code></td>
      <td>Text displayed for opening an issue.</td>
      <td><code>❗️ Opened issue {ID} in {REPO}</code></td>
      <td><code>{REPO}</code><br/><code>{ID}</code><br/><code>{URL}</code></td>
    </tr>
    <tr>
      <td><code>ISSUE_CLOSED</code></td>
      <td>Text displayed for closing an issue.</td>
      <td><code>❗️ Closed issue {ID} in {REPO}</code></td>
      <td><code>{REPO}</code><br/><code>{ID}</code><br/><code>{URL}</code></td>
    </tr>
    <tr>
      <td><code>PR_OPENED</code></td>
      <td>Text displayed for opening a Pull request.</td>
      <td><code>💪 Opened PR {ID} in {REPO}</code></td>
      <td><code>{REPO}</code><br/><code>{ID}</code><br/><code>{URL}</code></td>
    </tr>
    <tr>
      <td><code>PR_CLOSED</code></td>
      <td>Text displayed for closing a Pull request without merging.</td>
      <td><code>❌ Closed PR {ID} in {REPO}</code></td>
      <td><code>{REPO}</code><br/><code>{ID}</code><br/><code>{URL}</code></td>
    </tr>
    <tr>
      <td><code>PR_MERGED</code></td>
      <td>Text displayed for merging a Pull request.</td>
      <td><code>🎉 Merged PR {ID} in {REPO}</code></td>
      <td><code>{REPO}</code><br/><code>{ID}</code><br/><code>{URL}</code></td>
    </tr>
    </tr>
      <td>&#8203;</td>
      <td>&#8203;</td>
      <td>&#8203;</td>
      <td>&#8203;</td>
    </tr>
    <tr>
      <td><code>DISABLE_EVENTS</code></td>
      <td>Comma-separated String of Events to disable.<br/>Available are <code>ISSUE</code>, <code>PR</code> and <code>COMMENTS</code></td>
      <td><i>Empty String</i></td>
      <td></td>
    </tr>
    </tr>
      <td>&#8203;</td>
      <td>&#8203;</td>
      <td>&#8203;</td>
      <td>&#8203;</td>
    </tr>
    <tr>
      <td><code>URL_TEXT</code></td>
      <td>Text to display when using the <code>{URL}</code> placeholder.See the <a href="#placeholders">Placeholders section</a> for more info.</td>
      <td><code>{REPO}{ID}</code></td>
      <td><code>{REPO}</code><br/><code>{ID}</code></td>
    </tr>
  </tbody>
</table>

### Placeholders

The following placeholders may be used in the aforementioned settings, if the `Supported Placeholders` section lists them.

**Important Notes:**

- Each placeholder will turn into an embedded link pointing to the issue, pull request or discussion of that respective action.  
  For example will `{ID}` turn into `[#:id](:url)` and `{URL}` turns into `[:url_text](:url)`.
- Using `{ID}` or `{REPO}` in the `URL_TEXT` setting won't turn them into embedded links. `{ID}` will still have a `#` before it.

<table>
  <thead>
    <tr>
      <th>Placeholder</th>
      <th>Description</th>
      <th>Example Output</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>{REPO}</code></td>
      <td>Displays the username and Repository in the <code>:username/:repository</code> format.</td>
      <td><a href="https://github.com/Readme-Workflows/recent-activity/discussions/1">Readme-Workflows/recent-activity</a></td>
    </tr>
    <tr>
      <td><code>{ID}</code></td>
      <td>Displays the issue, pull request or discussion ID with a <code>#</code> added in front of it</td>
      <td><a href="https://github.com/Readme-Workflows/recent-activity/discussions/1">#1</a></td>
    </tr>
    <tr>
      <td><code>{URL}</code></td>
      <td>Displays the text provided by <code>URL_TEXT</code>.</td>
      <td><a href="https://github.com/Readme-Workflows/recent-activity/discussions/1">Readme-Workflows/recent-activity#1</a></td>
    </tr>
  </tbody>
</table>

## History

- The original project was inspired by [JasonEtco/activity-box](https://github.com/JasonEtco/activity-box)
- Puneet and Abhishek wanted to add a new feature, the original project was no longer maintained, so Puneet created a fork and Abhishek supported him.

## Examples

A list of examples can be found on the [Wiki](https://github.com/Readme-Workflows/recent-activity/wiki/Examples)

## Community

Get updates on Recent Activity's development and chat with the Recent Activity maintainers and community members.

Please see the [SUPPORT.md](https://github.com/Readme-Workflows/recent-activity/blob/main/.github/SUPPORT.md) file for links.

## Supporters

👏 A big thank you goes to all the supporters of this project!

You prove that the Recent-Activity Action has some value for you!

### Stargazers

[![Stargazers for @Readme-Workflows/recent-activity](https://reporoster.com/stars/Readme-Workflows/recent-activity)](https://github.com/Readme-Workflows/recent-activity/stargazers)

### Contributors

Thanks to all contributors again!

[![GitHub Contributors Image](https://contrib.rocks/image?repo=Readme-Workflows/recent-activity)](https://github.com/Readme-Workflows/recent-activity/contributors)

## Roadmap

Visit [our Roadmap](https://github.com/Readme-Workflows/recent-activity/projects/1) for planned and upcoming features.

## Support us

Do you like this project?
Why don't show your support by staring it and joining all the [other stargazers](https://github.com/Readme-Workflows/recent-activity/stargazers)?
