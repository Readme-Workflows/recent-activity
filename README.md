# Recent Activity

[![GitHub stars](https://img.shields.io/github/stars/Readme-Workflows/recent-activity)](https://github.com/Readme-Workflows/recent-activity/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/Readme-Workflows/recent-activity)](https://github.com/Readme-Workflows/recent-activity/network)
[![GitHub issues](https://img.shields.io/github/issues/Readme-Workflows/recent-activity)](https://github.com/Readme-Workflows/recent-activity/issues)
![GitHub repo size](https://img.shields.io/github/repo-size/Readme-Workflows/recent-activity)
![Lines of code](https://img.shields.io/tokei/lines/github/Readme-Workflows/recent-activity?label=total%20lines%20of%20code)
[![Discord Chat](https://img.shields.io/discord/826082157259915264?color=%237289da&label=discord)](https://discord.gg/BxNXeanT8k)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)](https://github.com/Readme-Workflows/recent-activity/blob/main/CODE_OF_CONDUCT.md)

This GitHub Action is a Fork of the original [GitHub Activity Readme](https://github.com/jamesgeorge007/github-activity-readme) Action by [jamesgeorge007](https://github.com/jamesgeorge007).  
Its our goal is to improve the original GitHub Action while also providing new features for the users.

## Live Preview

This is an example live preview that is updated every time a commit is pushed using github actions.

<!--RECENT_ACTIVITY:last_update-->

Last Updated: Thursday, May 20th, 2021, 3:17:39 PM (GMT)

<!--RECENT_ACTIVITY:last_update_end-->
<!--RECENT_ACTIVITY:start-->

1. ❗️ Closed issue [#5](https://github.com/Readme-Workflows/recent-activity/issues/5) in [Readme-Workflows/recent-activity](https://github.com/Readme-Workflows/recent-activity/issues/5)
2. 🎉 Merged PR [#6](https://github.com/Readme-Workflows/recent-activity/pull/6) in [Readme-Workflows/recent-activity](https://github.com/Readme-Workflows/recent-activity/pull/6)
3. 🗣 Commented on [#3](https://github.com/Readme-Workflows/recent-activity/discussions/3) in [Readme-Workflows/recent-activity](https://github.com/Readme-Workflows/recent-activity/discussions/3)
4. ❗️ Closed issue [#4](https://github.com/Readme-Workflows/recent-activity/issues/4) in [Readme-Workflows/recent-activity](https://github.com/Readme-Workflows/recent-activity/issues/4)
5. 💪 Opened PR [#6](https://github.com/Readme-Workflows/recent-activity/pull/6) in [Readme-Workflows/recent-activity](https://github.com/Readme-Workflows/recent-activity/pull/6)
<!--RECENT_ACTIVITY:end-->

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
    </tr>
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
    <tr>
      <td>&#8203;</td>
      <td>&#8203;</td>
      <td>&#8203;</td>
      <td>&#8203;</td>
    </tr>
    <tr>
      <td><code>COMMENTS_ACTIVITY</code></td>
      <td>Text displayed when making a comment.<br/>Includes comments on Issues and Pull requests</td>
      <td><code>💬 Commented on {ID} in {REPO}</code></td>
      <td><code>{REPO}</code><br/><code>{ID}</code><br/><code>{URL}</code></td>
    </tr>
    <tr>
      <td><code>ISSUE_OPENED</code></td>
      <td>Text displayed when opening an issue.</td>
      <td><code>❗️ Opened issue {ID} in {REPO}</code></td>
      <td><code>{REPO}</code><br/><code>{ID}</code><br/><code>{URL}</code></td>
    </tr>
    <tr>
      <td><code>ISSUE_CLOSED</code></td>
      <td>Text displayed when closing an issue.</td>
      <td><code>✔ Closed issue {ID} in {REPO}</code></td>
      <td><code>{REPO}</code><br/><code>{ID}</code><br/><code>{URL}</code></td>
    </tr>
    <tr>
      <td><code>PR_OPENED</code></td>
      <td>Text displayed when opening a Pull request.</td>
      <td><code>💪 Opened PR {ID} in {REPO}</code></td>
      <td><code>{REPO}</code><br/><code>{ID}</code><br/><code>{URL}</code></td>
    </tr>
    <tr>
      <td><code>PR_CLOSED</code></td>
      <td>Text displayed when closing a Pull request without merging.</td>
      <td><code>❌ Closed PR {ID} in {REPO}</code></td>
      <td><code>{REPO}</code><br/><code>{ID}</code><br/><code>{URL}</code></td>
    </tr>
    <tr>
      <td><code>PR_MERGED</code></td>
      <td>Text displayed when merging a Pull request.</td>
      <td><code>🎉 Merged PR {ID} in {REPO}</code></td>
      <td><code>{REPO}</code><br/><code>{ID}</code><br/><code>{URL}</code></td>
    </tr>
    <tr>
      <td><code>CREATE_REPO</code></td>
      <td>Text displayed when creating a new Repository.</td>
      <td><code>📔 Created new repository {REPO}</code></td>
      <td><code>{REPO}</code</td>
    </tr>
    <tr>
      <td><code>FORK_REPO</code></td>
      <td>Text displayed when forking a repo.</td>
      <td><code>🔱 Forked {FORK} from {REPO}</code></td>
      <td><code>{FORK}</code> and <code>{REPO}</code></td>
    </tr>
    <tr>
      <td><code>WIKI_CREATE</code></td>
      <td>Text displayed when creating a wiki page.</td>
      <td><code>📖 Created new wiki page {WIKI} in {REPO}</code></td>
      <td><code>{WIKI}</code> and <code>{REPO}</code></td>
    </tr>
    <tr>
      <td><code>ADDED_MEMBER</code></td>
      <td>Text displayed when you are added as a collaborator to a repo.</td>
      <td><code>🤝 Became collaborator on {REPO}</code></td>
      <td><code>{REPO}</code></td>
    </tr>
    <tr>
      <td><code>REVIEW_APPROVED</code></td>
      <td>Text displayed when you approved a pr.</td>
      <td><code>👍 Approved {ID} in {REPO}</code></td>
      <td><code>{ID}</code> and <code>{REPO}</code></td>
    </tr>
    <tr>
      <td><code>CHANGES_REQUESTED</code></td>
      <td>Text displayed when you requested changes when approving a pr.</td>
      <td><code>🔴 Requested changes in {ID} in {REPO}</code></td>
      <td><code>{ID}</code> and <code>{REPO}</code></td>
    </tr>
    <tr>
      <td><code>RELEASE</code></td>
      <td>Text displayed when you release new version in a repo.</td>
      <td><code>✌️ Released {ID} in {REPO}</code></td>
      <td><code>{ID}</code> and <code>{REPO}</code></td>
    </tr>
    <tr>
      <td><code>STAR</code></td>
      <td>Text displayed when you star a repo.</td>
      <td><code>⭐ Starred {REPO}</code></td>
      <td><code>{REPO}</code></td>
    </tr>
    <tr>
      <td>&#8203;</td>
      <td>&#8203;</td>
      <td>&#8203;</td>
      <td>&#8203;</td>
    </tr>
    <tr>
      <td><code>DISABLE_EVENTS</code></td>
      <td>Comma-separated String of Events to disable.<br/>Available are <code>ISSUE</code>, <code>PR</code>, <code>COMMENTS</code> and <code>CREATE_REPO</code></td>
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
    </tr>
      <td>&#8203;</td>
      <td>&#8203;</td>
      <td>&#8203;</td>
      <td>&#8203;</td>
    </tr>
    <tr>
      <td><code>TIMEZONE_OFFSET</code></td>
      <td>Timezone in which the date and time should be displayed.<br>The format is <code>+xx:xx</code> / <code>-xx:xx</code> and is relative to the GMT timezone.</td>
      <td>0</td>
      <td></td>
    </tr>
    <tr>
      <td><code>DATE_STRING</code></td>
      <td>The text to print when using the <a href="#options"><code>RECENT_ACTIVITY:last_update</code></a> Comment option.</td>
      <td>Last Updated: {DATE}</td>
      <td><code>{DATE}</code></td>
    </tr>
    <tr>
      <td><code>DATE_FORMAT</code></td>
      <td>The date and time format which should be used for the <code>{DATE}</code> Placeholder.<br><a href="https://www.npmjs.com/package/dateformat">More info about the Date formatting</a></td>
      <td>dddd, mmmm dS, yyyy, h:MM:ss TT</td>
      <td></td>
    </tr>
  </tbody>
</table>

### Placeholders

The following placeholders may be used in the aforementioned settings, if the `Supported Placeholders` section lists them.

**Important Notes:**

- Each placeholder with exception of `{DATE}` will turn into an embedded link pointing to the issue, pull request or discussion of that respective action.  
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
    <tr>
      <td><code>{DATE}</code></td>
      <td>Current time and date to display.<br>This is <b>ONLY</b> usable in the <a href="#settings">DATE_STRING</a> setting!</b></td>
      <td>01.01.2021 00:00:00</td>
    </tr>
    <tr>
      <td><code>{FORK}</code></td>
      <td>The forked repo name.</td>
      <td>Readme-Workflows/forked-repo</td>
    </tr>
    <tr>
      <td><code>{WIKI}</code></td>
      <td>The Wiki page name</b></td>
      <td>Home</td>
    </tr>
  </tbody>
</table>

## History

- The original project was inspired by [JasonEtco/activity-box](https://github.com/JasonEtco/activity-box)
- Puneet and Abhishek wanted to add a new feature, the original project was no longer maintained, so Puneet created a fork and Abhishek supported him.
- Andre joined to support us in documentation

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

Visit our [Roadmap] for planned and upcoming features.

## Support us

Do you like this project?
Why don't show your support by staring it and joining all the other [stargazers]?

## Contributing

You can find the contributing guidelines [here](https://github.com/Readme-Workflows/recent-activity/blob/main/.github/CONTRIBUTING.md)

## News

See messages in #news channel in our discord server, [here is the invite](https://discord.gg/aR6TcVzpbF)

<!-- Links -->
[Roadmap]: https://github.com/Readme-Workflows/recent-activity/projects/1
[stargazers]: https://github.com/Readme-Workflows/recent-activity/stargazers
