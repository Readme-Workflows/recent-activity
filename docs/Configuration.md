[releases]: https://github.com/Readme-Workflows/recent-activity/releases
[discord]: https://discord.gg/2a9VC4AK6x
[sample]: https://github.com/Readme-Workflows/recent-activity/blob/main/sample.yml
[timezones]: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
[dateformat]: https://www.npmjs.com/package/dateformat

# Configuring - Recent Activity

Version 2 of the Recent-Activity Action provided a new Configuration file which allows a much easier setup of the action without the need to create dozens of `with` options.

## Table of Contents

- [Setup](#setup)
- [Inputs](#inputs)
- [Sample Configuration](#sample-configuration)
- [Options](#options)
  - [Settings](#settings)
  - [Messages](#messages)

----
## Setup
To get started, first make sure to have at least version 2.0.0 of the Action, as versions prior to it don't have the config options.  
The latest version can be found on the [Releases Section][releases] of this repository.

An example workflow should look something like this for you:  
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
      - uses: actions/checkout@v3
      #
      # "{version}" is a placeholder and should be replaced with the latest release of recent-activity
      - uses: Readme-Workflows/recent-activity@{version}
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
This setup will try to find and use a file called `recent-activity.config.yml` inside the `.github` directory.  
If you want to change the location and/or name of the file used, add a `CONFIG_FILE:` with-option to the action that points to the file relative to the root directory of your repository.

As an example, wanting to use a file called `activity-config.yml` in the `.github` directory will require you to set `CONFIG_FILE: './.github/activity-config.yml` as a with-option.

## Inputs
The Action allows different Inputs through the usage of the `with` option.

### `GH_USERNAME`
This input sets the name to use for getting the Activities to display.  
This defaults to the owner of the Repository.

### `CONFIG_FILE`
This input allows to change the location of the YAML file used as Configuration.  
By default is this `./.github/recent-activity.config.yml` but can be changed to any alternative path relative to your Repository's root-directory.

## Sample Configuration
You can find a sample Configuration file in the [`sample.yml`][sample] of the Repository.

## Options
The config file is split into two major sections: [Settings](#settings) and [Messages](#messages).

Every option in the file is **optional** and will default to a specific value (See `Default` section for what)

----
### Settings
The `Settings` area contains various settings to configure.

- [`username`](#username)
- [`commit_msg`](#commit_msg)
- [`max_lines`](#max_lines)
- [`readme_file`](#readme_file)
- [`disabled_events`](#disabled_events)
- [`whitelisted_events`](#whitelisted_events)
  - [Supported Events](#supported-events)
- [`commit_name`](#commit_name)
- [`commit_email`](#commit_email)
- [`url_text`](#url_text)
- [`date.timezone`](#datetimezone)
- [`date.text`](#datetext)
- [`date.format`](#dateformat)
- [`line_prefix`](#line_prefix)
- [`ignored_repos`](#ignored_repos)

#### `username`
> **Default:** Repository Owner

The `username` setting allows you to set the name of the GitHub user from which the Action should display the most recent activities.

#### `commit_msg`
> **Default:** `⚡ Update README with the recent activity`

This setting allows you to change what message is used for the Commit.

#### `max_lines`
> **Default:** 5

The `max_lines` setting allows you to set, how many entries should be displayed in the Activity-list.  
The total amount of entries can only be 100 and the Action will finish pre-maturely if it either doesn't find enough Activities to display, or hits a `<!--RECENT_ACTIVITY:end-->` comment in the file.

#### `readme_file`
> **Default:** `./README.md`

The `readme_file` options sets the path relative to your repository's root-directory for where the Action should update the file.  
Only valid Markdown files are supported.

#### `disabled_events`
> **Default:** *`Undefined`*

`disabled_events` allows you to set a list of events that should be ignored when updating the activity list.  
Please see the [list of supported events](#supported-events) for all the events you can disable.

The setting can be used in two ways:

- **option 1:**  
  ```yaml
  settings:
    disabled_events: [event1, event2, event3]
  ```

- **Option 2:**  
  ```yaml
  settings:
    disabled_events:
    - event1
    - event2
    - event3
  ```

#### `whitelisted_events`
> **Default:** *`Undefined`*

`whitelisted_events` allows you to set a list of events that should be included when updating the activity list.  
This setting will take priority over the [`disabled_events`](#disabled_events) setting, even if the list is empty!

Please see the [list of supported events](#supported-events) for all the events you can disable.

The setting can be used in two ways:

- **option 1:**  
  ```yaml
  settings:
    whitelisted_events: [event1, event2, event3]
  ```

- **Option 2:**  
  ```yaml
  settings:
    whitelisted_events:
    - event1
    - event2
    - event3
  ```

##### Supported Events
The following list of events is supported for the [`disabled_events`](#disabled_events) and [`whitelisted_events`](#whitelisted_events) setting.

| Type:          | Disabled Actions:                                 |
| -------------- | ------------------------------------------------- |
| `comments`     | Commenting on Issues                              |
| `create_repo`  | Creating a new Repository                         |
| `fork`         | Forking a Repository                              |
| `issues`       | All Issues actions                                |
| `issues_open`  | Opening Issues                                    |
| `issues_close` | Closing Issues                                    |
| `member`       | Getting added as a Collaborator/Member            |
| `pr`           | All Pull request actions                          |
| `pr_open`      | Opening a Pull request                            |
| `pr_merge`     | Merging a Pull request                            |
| `pr_close`     | Closing a Pull request                            |
| `push`         | All commits performed                             |
| `release`      | Publishing a new Release                          |
| `review`       | Approving or requesting Changes in a Pull request |
| `star`         | Starring a Repository                             |
| `wiki`         | Creating a new Wiki page                          |

#### `commit_name`
> **Default:** `readme-bot`

This setting allows you to change the name of the account that pushes the Readme Update.

#### `commit_email`
> **Default:** `41898282+github-actions[bot]@users.noreply.github.com`

This setting allows you to change the e-mail of the account that pushes the Readme Update.

#### `url_text`
> **Default:** `{REPO}{ID}`

The `url_text` option is used to set the text displayed when using the `{URL}` placeholder.  
Keep in mind that the text itself will be put into an embedded link (`[:url_text](:url)`) and that `{REPO}` and `{ID}` will be turned into their respective values, but won't be turned into embedded links.

#### `date.timezone`
> **Default:** `0`

With the `timezone` setting in the `date` category can you set the timezone/time offset for the Date and time to be displayed.

The option can either be a positive or negative offset such as `+01:00` or `-01:00`, or it can be a `Continent/City` format such as `Europe/London`.  
The difference between those two variants is, that the `Continent/City` option respects special time changes such as daylight-saving time shifts.

A list of supported zones can be found [on Wikipedia][timezones]

#### `date.text`
> **Default:** `Last updated: {DATE}`

The `text` option in `date` allows you to set the text that should be displayed when the Activity list gets updated. The `{DATE}` placeholder can be used to insert the date and time of when the List was updated. The format for that can be changed through the [`format`](#dateformat) option mentioned below.

To display this text you will need to place a `<!--RECENT_ACTIVITY:last_update-->` placeholder. The text will then be added below it.

#### `date.format`
> **Default:** `dddd. mmmm dS, yyyy, h:MM:ss TT`

With the `format` option in `date` can you define how the date and time should be displayed.  
Supported are all options mentioned in the [dateformat NPM package][dateformat].

Note that the `Z` cannot display the actual timezone such as `CET`/`CEST` but only timezones within the US (`EST`/`MDT`) or `GMT` with the offset appended to it (i.e. `GMT+0100`).

#### `line_prefix`
> **Default:** `{NUM}. `

The `line_prefix` option is used to set the prefix for each line that shows activity.  
The {NUM} placeholder is replaced by serial number for the activity line.

#### `ignored_repos`
> **Default:** `(empty list)`

The `ignored_repos` option is used to ignore certain repositories and hide them from the recent activity.  
The setting can be used in two ways:

- **option 1:**  
  ```yaml
  settings:
    ignored_repos: [username1/repo1, username1/repo2, username2/repo3]
  ```

- **Option 2:**  
  ```yaml
  settings:
    whitelisted_events:
    - username1/repo1
    - username1/repo2
    - username2/repo3
  ```

----
**Notes about Placeholders:**  
- Available Placeholders are: `{DATE}`, `{ID}`, `{FORK}`, `{REPO}`, `{URL}`, `{AMOUNT}`, `{WIKI}` and {NUM}
- Each option only supports specific Placeholders which are mentioned in the `Supported Placeholders` section.
- With the exception of `{AMOUNT}`, `{DATE}` and `{WIKI}`, all other placeholders will turn into embedded links (i.e. `{ID}` becomes `[#1](:url)`)
  - `{ID}` and `{REPO}` can be used in [`url_text`](#url_text) and won't be turned into embedded links there. `{ID}` will still be prefixed with a `#`

----
### Messages
The `messages` section contains all the different messages you can set for the Activity-List to display.

- [`added_member`](#added_member)
- [`changes_approved`](#changes_approved)
- [`changes_requested`](#changes_requested)
- [`comments`](#comments)
- [`create_repo`](#create_repo)
- [`fork_repo`](#fork_repo)
- [`issue_opened`](#issue_opened)
- [`issue_closed`](#issue_closed)
- [`new_release`](#new_release)
- [`new_star`](#new_star)
- [`pr_opened`](#pr_opened)
- [`pr_closed`](#pr_closed)
- [`pr_merged`](#pr_merged)
- [`push`](#push)
- [`wiki_create`](#wiki_create)

#### `added_member`
> **Default:** `🤝 Became collaborator on {REPO}`
>
> **Supported Placeholders:**
> - `{REPO}`

This text is displayed whenever you get added as a Member/Collaborator to a Repository.

#### `changes_approved`
> **Default:** `👍 Approved {ID} in {REPO}`
>
> **Supported Placeholders:**
> - `{ID}`
> - `{REPO}`
> - [`{URL}`](#url_text)

This text is displayed whenever you approve changes in a Pull request.

#### `changes_requested`
> **Default:** `🔴 Requested {AMOUNT} change(s) in {ID} in {REPO}`
>
> **Supported Placeholders:**
> - `{ID}`
> - `{REPO}`
> - `{AMOUNT}`
> - [`{URL}`](#url_text)

This text is displayed whenever you request changes to a Pull request.  
The action will combine multiple Change requests for the same Pull request into one. The `{AMOUNT}` placeholder can be used to display the amount of changes requested for a Pull request.

#### `comments`
> **Default:** `💬 Commented on {ID} in {REPO}`
>
> **Supported Placeholders:**
> - `{ID}`
> - `{REPO}`
> - [`{URL}`](#url_text)

This text is displayed whenever you commented on an issue, Pull request (Includes default Review comments but not actual [change requests](#changes_requested) or [approvals](#review_approved)) or commit.

#### `create_repo`
> **Default:** `📔 Created new repository {REPO}`
>
> **Supported Placeholders:**
> - `{REPO}`

This text is displayed whenever you create a new Repository.

#### `fork_repo`
> **Default:** `🔱 Forked {FORK} from {REPO}`
>
> **Supported Placeholders:**
> - `{FORK}`
> - `{REPO}`

This text is displayed whenever you fork a Repository.

#### `issue_opened`
> **Default:** `❗️ Opened issue {ID} in {REPO}`
>
> **Supported Placeholders:**
> - `{ID}`
> - `{REPO}`
> - [`{URL}`](#url_text)

This text is displayed whenever you open a new Issue.

#### `issue_closed`
> **Default:** `✔️ Closed issue {ID} in {REPO}`
>
> **Supported Placeholders:**
> - `{ID}`
> - `{REPO}`
> - [`{URL}`](#url_text)

This text is displayed whenever you close an issue.

#### `new_release`
> **Default:** `✌️ Released {ID} in {REPO}`
>
> **Supported Placeholders:**
> - `{ID}`
> - `{REPO}`
> - [`{URL}`](#url_text)

This text is displayed whenever you create a new release. `{ID}` will represent the Tag of the release.

#### `new_star`
> **Default:** `⭐ Starred {REPO}`
>
> **Supported Placeholders:**
> - `{REPO}`

This text is displayed whenever you star a Repository.

#### `pr_opened`
> **Default:** `💪 Opened PR {ID} in {REPO}`
>
> **Supported Placeholders:**
> - `{ID}`
> - `{REPO}`
> - [`{URL}`](#url_text)

This text is displayed whenever you open a new Pull request.

#### `pr_closed`
> **Default:** `❌ Closed PR {ID} in {REPO}`
>
> **Supported Placeholders:**
> - `{ID}`
> - `{REPO}`
> - [`{URL}`](#url_text)

This text is displayed whenever you close a Pull request without merging it.

#### `pr_merged`
> **Default:** `🎉 Merged PR {ID} in {REPO}`
>
> **Supported Placeholders:**
> - `{ID}`
> - `{REPO}`
> - [`{URL}`](#url_text)

This text is displayed whenever you merge a Pull request.

#### `push`
> **Default:** `⬆️ Pushed {AMOUNT} commit(s) to {REPO}`
> 
> **Supported Placeholders:**
> - `{AMOUNT}`
> - `{REPO}`

This text is displayed whenever you make a commit to a repository.  
`{AMOUNT}` will display the amount of commits performed.

#### `wiki_create`
> **Default:** `📖 Created new wiki page {WIKI} in {REPO}`
>
> **Supported Placeholders:**
> - `{REPO}`
> - `{WIKI}`

This text is displayed whenever you create a new Wiki page. `{WIKI}` will be the name of the Wiki page created.
