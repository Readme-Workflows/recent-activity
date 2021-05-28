[schedule]: https://docs.github.com/en/actions/reference/events-that-trigger-workflows#schedule
[Cron Syntax]: https://jasonet.co/posts/scheduled-actions/#the-cron-syntax
[guru]: https://crontab.guru/

[placeholders]: https://github.com/Readme-Workflows/recent-activity#placeholders

[release_1.3.0]: https://github.com/Readme-Workflows/recent-activity/releases/tag/v1.3.0
[dateFormat]: https://www.npmjs.com/package/dateformat

> # Deprecation
> This page is outdated and won't receive any further updates.  
> It remains to keep a place for people still using versions `v1.3.0` and older. Please consider updating to `v2.0.0` or newer to use the [[new Configuration file|Configuration]].

----

This page contains examples of using various options of this GitHub Action and also displays example outputs of those settings.

Make sure to replace `{version}` with the latest release available.

> ![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/Readme-Workflows/recent-activity?label=Latest%20Version)

## Table of Contents
- [Different delays](#different-delays)
- [More displayed Activities](#more-displayed-activities)
- [Different Commit Message](#different-commit-message)
- [Different Activity Messages](#different-activity-messages)
- [Disable specific Activities](#disable-specific-activities)
- [Different `{URL}` text](#different-url-text)
- [Different Date and time format](#different-date-and-time-format)

----
### Different delays
This GitHub Action is best used with the [schedule] action available, as this one allows you to update the README periodically with the latest information.

The [schedule] event uses the [Cron Syntax] to set when a GitHub Action should be executed.  
It's recommended to use a website such as [crontab.guru][guru] to create and evaluate different Cron Syntaxes.

Here are some example syntaxes you can use:

- `*/30 * * * *` - Execute the action every **30 minutes** (48 times a day)
- `0,30 * * * *` - Execute the action **at XX:00 and XX:30** (48 times a day)  
  *This is essentially the same as the previous option but for precise times.*
- `0 */12 * * *` - Execute the action every **12 hours** (2 times a day)
- `0 0,12 * * *` - Execute the action **at 00:00 and 12:00** (2 times a day)  
  *This is essentially the same as the previous action but for precise times.*
- `0 0 */1 * *` - Execute the action **once a day at 00:00** (1 time a day) 

It's recommended to use exact numbers for lower values (i.e. minutes) when using higher numbers (i.e. hours) as it could otherwise be treated as **run action every X after Y** (X being the lower value type and Y being the higher one).

For example, would `* */12 * * *` result in the action being executed every 5 minutes once 12 hours passed.

----
### More displayed Activities

The `MAX_LINES` option allows you to set a higher number of lines to display.

Something worth mentioning is, that the Action will add a `<!--RECENT_ACTIVITY:end-->` HTML Comment when it doesn't exist.  
When this comment does exist will the Action add entries to the list until it reaches this commend or reaches `MAX_LINES` amount. Whichever happens first.

This means that the Action won't go past X entries when it hits the comment before `MAX_LINES` of entries was reached.  
To fix this, simply remove the `<!--RECENT_ACTIVITY:end-->` comment together with any existing List entry and trigger the action again.

**YAML-Example:**  
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
      - uses: actions/checkout@v2.3.4
      - uses: Readme-Workflows/recent-activity@{version}
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        with:
          MAX_LINES: 10
```

**Output:**

1. ❗️ Closed issue [#5](https://github.com/Readme-Workflows/recent-activity/issues/5) in [Readme-Workflows/recent-activity](https://github.com/Readme-Workflows/recent-activity/issues/5)
2. 🎉 Merged PR [#6](https://github.com/Readme-Workflows/recent-activity/pull/6) in [Readme-Workflows/recent-activity](https://github.com/Readme-Workflows/recent-activity/pull/6)
3. 🗣 Commented on [#3](https://github.com/Readme-Workflows/recent-activity/discussions/3) in [Readme-Workflows/recent-activity](https://github.com/Readme-Workflows/recent-activity/discussions/3)
4. ❗️ Closed issue [#4](https://github.com/Readme-Workflows/recent-activity/issues/4) in [Readme-Workflows/recent-activity](https://github.com/Readme-Workflows/recent-activity/issues/4)
5. 💪 Opened PR [#6](https://github.com/Readme-Workflows/recent-activity/pull/6) in [Readme-Workflows/recent-activity](https://github.com/Readme-Workflows/recent-activity/pull/6)
6. ❗️ Opened issue [#5](https://github.com/Readme-Workflows/recent-activity/issues/5) in [Readme-Workflows/recent-activity](https://github.com/Readme-Workflows/recent-activity/issues/5)
7. 🗣 Commented on [#3](https://github.com/Readme-Workflows/recent-activity/discussions/3) in [Readme-Workflows/recent-activity](https://github.com/Readme-Workflows/recent-activity/discussions/3)
8. ❗️ Opened issue [#4](https://github.com/Readme-Workflows/recent-activity/issues/4) in [Readme-Workflows/recent-activity](https://github.com/Readme-Workflows/recent-activity/issues/4)
9. 🗣 Commented on [#3](https://github.com/Readme-Workflows/recent-activity/discussions/3) in [Readme-Workflows/recent-activity](https://github.com/Readme-Workflows/recent-activity/discussions/3)
10. 🗣 Commented on [#1](https://github.com/Readme-Workflows/recent-activity/discussions/1) in [Readme-Workflows/recent-activity](https://github.com/Readme-Workflows/recent-activity/discussions/1)

----
### Different Commit Message

With `COMMIT_MSG` can you change the message that should be displayed when the Action performs a Commit to the README file.

**YAML Example:**  
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
      - uses: actions/checkout@v2.3.4
      - uses: Readme-Workflows/recent-activity@{version}
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        with:
          COMMIT_MSG: "Update README with latest Activities"
```

----
### Different Activity Messages

You may want to display a different message for a specific activity.  
For that purpose does the Action offer settings to change the message used for each Activity type.

You can also use `{ID}`, `{REPO}` and `{URL}` in the messages which would be replaced with their respective values. Refer to the [Placeholder section][placeholders] to learn more about them.

**YAML Example:**  
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
      - uses: actions/checkout@v2.3.4
      - uses: Readme-Workflows/recent-activity@{version}
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        with:
          COMMENTS_ACTIVITY: "Gave a comment on {ID} in {REPO}"
          ISSUE_OPENED: "Made Issue {ID} in {REPO}"
          ISSUE_CLOSED: "Closed Issue {ID} in {REPO}"
          PR_OPENED: "Made Pull request {ID} in {REPO}"
          PR_CLOSED: "Closed Pull request {ID} in {REPO}"
          PR_MERGED: "Merged Pull request {ID} in {REPO}"
```

**Output:**

1. Closed issue [#5](https://github.com/Readme-Workflows/recent-activity/issues/5) in [Readme-Workflows/recent-activity](https://github.com/Readme-Workflows/recent-activity/issues/5)
2. Merged Pull request [#6](https://github.com/Readme-Workflows/recent-activity/pull/6) in [Readme-Workflows/recent-activity](https://github.com/Readme-Workflows/recent-activity/pull/6)
3. Gave a comment on [#3](https://github.com/Readme-Workflows/recent-activity/discussions/3) in [Readme-Workflows/recent-activity](https://github.com/Readme-Workflows/recent-activity/discussions/3)
4. Closed issue [#4](https://github.com/Readme-Workflows/recent-activity/issues/4) in [Readme-Workflows/recent-activity](https://github.com/Readme-Workflows/recent-activity/issues/4)
5. Made Pull request [#6](https://github.com/Readme-Workflows/recent-activity/pull/6) in [Readme-Workflows/recent-activity](https://github.com/Readme-Workflows/recent-activity/pull/6)

----
### Disable specific Activities

If you don't want to display specific activities on your list, or a specific one such as commenting fills it up completely, can you use the `DISABLE_EVENTS` Setting to disable specific activities.

The option is a String and the different events are separated by a comma.  
Currently available options are `ISSUE`, `PR` and `COMMENTS`.

**YAML Example:**  
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
      - uses: actions/checkout@v2.3.4
      - uses: Readme-Workflows/recent-activity@{version}
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        with:
          DISABLE_EVENTS: "COMMENTS"
```

**Output:**

1. ❗️ Closed issue [#5](https://github.com/Readme-Workflows/recent-activity/issues/5) in [Readme-Workflows/recent-activity](https://github.com/Readme-Workflows/recent-activity/issues/5)
2. 🎉 Merged PR [#6](https://github.com/Readme-Workflows/recent-activity/pull/6) in [Readme-Workflows/recent-activity](https://github.com/Readme-Workflows/recent-activity/pull/6)
3. ❗️ Closed issue [#4](https://github.com/Readme-Workflows/recent-activity/issues/4) in [Readme-Workflows/recent-activity](https://github.com/Readme-Workflows/recent-activity/issues/4)
4. 💪 Opened PR [#6](https://github.com/Readme-Workflows/recent-activity/pull/6) in [Readme-Workflows/recent-activity](https://github.com/Readme-Workflows/recent-activity/pull/6)
5. ❗️ Opened issue [#5](https://github.com/Readme-Workflows/recent-activity/issues/5) in [Readme-Workflows/recent-activity](https://github.com/Readme-Workflows/recent-activity/issues/5)

----
### Different `{URL}` Text

The `{URL}` option has a unique tweak by allowing you to customize the text displayed by it.  
Keep in mind that the text itself will be used as an embedded URL, meaning that a text such as `{ID} in {REPO}` will turn into `[{ID} in {REPO}](:URL)`

Something else to point out is, that you can use `{ID}` and `{REPO}` and unlike in the other options will they NOT be turned into embedded links. `{ID}` will still have a `#` prefixed, however.

**YAML Example**
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
      - uses: actions/checkout@v2.3.4
      - uses: Readme-Workflows/recent-activity@{version}
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        with:
          URL_TEXT: "`{REPO}{ID}`" # Turns {URL} into [`{REPO}{ID}`](:url)
          PR_OPENED: "Made Pull request {URL}"
          PR_CLOSED: "Closed Pull request {URL}"
          PR_MERGED: "Merged Pull request {URL}"
```

**Output:**

1. ❗️ Closed issue [#5](https://github.com/Readme-Workflows/recent-activity/issues/5) in [Readme-Workflows/recent-activity](https://github.com/Readme-Workflows/recent-activity/issues/5)
2. Merged Pull request [`Readme-Workflows/recent-activity#6`](https://github.com/Readme-Workflows/recent-activity/pull/6)
3. 🗣 Commented on [#3](https://github.com/Readme-Workflows/recent-activity/discussions/3) in [Readme-Workflows/recent-activity](https://github.com/Readme-Workflows/recent-activity/discussions/3)
4. ❗️ Closed issue [#4](https://github.com/Readme-Workflows/recent-activity/issues/4) in [Readme-Workflows/recent-activity](https://github.com/Readme-Workflows/recent-activity/issues/4)
5. Made Pull request [`Readme-Workflows/recent-activity#6`](https://github.com/Readme-Workflows/recent-activity/pull/6)

----
### Different Date and Time format

[Version 1.3.0][release_1.3.0] added options to display a date and time of when the Activity-list was last updated.  
By default is the displayed text `Last Updated: {DATE}` where `{DATE}` is the pattern `dddd, mmmm dS, yyyy, h:MM:ss TT` with timezone `GMT+0000`.

You may want to change this text and time which Recent-Activity allows.

**YAML Example**  
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
      - uses: actions/checkout@v2.3.4
      - uses: Readme-Workflows/recent-activity@{version}
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        with:
          TIMEZONE_OFFSET: "+1:00"
          DATE_STRING: "Last update: `{DATE}`"
          DATE_FORMAT: "dd.mm.yyyy HH:MM:ss"
```

**Notes:**

- To display the date will you need to use the `<!--RECENT_ACTIVITY:last_update-->` comment.
- The `TIMEZONE_OFFSET` is in the format `+xx:xx`/`-xx:xx` and always relative to GMT. So a value of `+1:00` becomes `GMT+0100`

Read more about the Date format [here][dateFormat].

**Output:**
Last update: `01.01.2021 00:00:00`

1. ❗️ Closed issue [#5](https://github.com/Readme-Workflows/recent-activity/issues/5) in [Readme-Workflows/recent-activity](https://github.com/Readme-Workflows/recent-activity/issues/5)
2. 🎉 Merged PR [#6](https://github.com/Readme-Workflows/recent-activity/pull/6) in [Readme-Workflows/recent-activity](https://github.com/Readme-Workflows/recent-activity/pull/6)
3. 🗣 Commented on [#3](https://github.com/Readme-Workflows/recent-activity/discussions/3) in [Readme-Workflows/recent-activity](https://github.com/Readme-Workflows/recent-activity/discussions/3)
4. ❗️ Closed issue [#4](https://github.com/Readme-Workflows/recent-activity/issues/4) in [Readme-Workflows/recent-activity](https://github.com/Readme-Workflows/recent-activity/issues/4)
5. 💪 Opened PR [#6](https://github.com/Readme-Workflows/recent-activity/pull/6) in [Readme-Workflows/recent-activity](https://github.com/Readme-Workflows/recent-activity/pull/6)
