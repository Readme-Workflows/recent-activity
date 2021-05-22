# Changelog v1

Note that the displayed date is in the format `dd-mm-yyyy`

## [v1.3.0]
> **Released:** `17.05.2021`
### Breaking changes
- Changed `<!--START_SECTION:activity-->` and `<!--END_SECTION:activity-->` to `<!--RECENT_ACTIVITY:start-->` and `<!--RECENT_ACTIVITY:end-->`

### Added features
- New comment option `<!--RECENT_ACTIVITY:last_update-->` [[#40]]  
  Displays the `DATE_STRING` below it with the last time the list was updated.
- `TIMEZONE_OFFSET` setting [[#40]]  
  Allows to change the timezone. Format is `+xx:xx` / `-xx:xx` and is relative to the GMT/UTC timezone (e.g. `+1:00` is `GMT+0100`)
- `DATE_STRING` setting [[#40]]  
  The String to display after the `<!--RECENT_ACTIVITY:last_update-->` comment. Use `{DATE}` for where the date and time should be displayed.
- `DATE_FORMAT` setting [[#40]]  
  The Date Pattern to use to display the current date in `{DATE}`. Read more about the date pattern [here][dateFormat].

[v1.3.0]: https://github.com/Readme-Workflows/recent-activity/releases/tag/v1.3.0
[#40]: https://github.com/Readme-Workflows/recent-activity/pull/40
[dateFormat]: https://www.npmjs.com/package/dateformat

## [v1.2.2]
> **Released:** `14.05.2021`
### Chores
- Trigger Build whenever changes to JS files are pushed [[#28]]

[v1.2.2]: https://github.com/Readme-Workflows/recent-activity/releases/tag/v1.2.1
[#28]: https://github.com/Readme-Workflows/recent-activity/pull/28

## [v1.2.1]
> **Released:** `12-05-2021`
### Chores
- Bump `actions/checkout` from `v2` to `v2.3.4` [[#21]]

### Added features
- Add `DISABLE_EVENTS` to disable one or multiple events. Replaces the removed features below. [[#17]]

### Removed features
- `DISABLE_COMMENTS`, `DISABLE_ISSUES` and `DISABLE_PR` options [[#17]]

[v1.2.1]: https://github.com/Readme-Workflows/recent-activity/releases/tag/v1.2.1
[#17]: https://github.com/Readme-Workflows/recent-activity/pull/17
[#21]: https://github.com/Readme-Workflows/recent-activity/pull/21

## [v1.2.0]
> **Released:** `09-05-2021`
### Added features
- Options to customize displayed text for actions [[#11]]
- Options to disable/hide specific actions [[#13]]
  - `DISABLE_COMMENTS` to disable comment actions
  - `DISABLE_ISSUES` to disable issue actions
  - `DISABLE_PR` to disable Pull request actions
- Added `URL_FORMAT` to customize text for `{URL}` placeholder [[#15]]

### Chores
- Added `dependabot.yml`, `ChangeLog.md`, `SUPPORT.md`, `PULL_REQUEST_TEMPLATE.md` and `release-notes.yml` [[#8]]
- Bump `actions/setup-node` from `v1` to `v2.1.5` [[#9]]

[v1.2.0]: https://github.com/Readme-Workflows/recent-activity/releases/tag/v1.2.0
[#8]: https://github.com/Readme-Workflows/recent-activity/pull/8
[#9]: https://github.com/Readme-Workflows/recent-activity/pull/9
[#11]: https://github.com/Readme-Workflows/recent-activity/pull/11
[#13]: https://github.com/Readme-Workflows/recent-activity/pull/13
[#15]: https://github.com/Readme-Workflows/recent-activity/pull/15
