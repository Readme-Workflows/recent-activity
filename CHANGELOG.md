# Changelog

The changelog of the Recent-Activity GitHub Action.

Note that the displayed date is in the format `dd-mm-yyyy`

## [v1.2.1]
> **Released:** `TBA`

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
