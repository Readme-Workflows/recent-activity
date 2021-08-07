# Changelog v2

The Changelog of the major version 2 of Recent-Activity GitHub Action.

Note that the displayed date is in the format `dd-mm-yyyy`

[Older changelogs](#older-changelogs)

## [v2.3.1]
> **Released:** `07-08-2021`

### Added Features
- Added `{AMOUNT}` placeholder for `changes_requested` message. [#90]

[v2.3.1]: https://github.com/Readme-Workflows/recent-activity/releases/tag/v2.3.1
[#90]: https://github.com/Readme-Workflows/recent-activity/pull/90

## [v2.3.0]
> **Released:** `02-07-2021`

### Added Features
- Add `whitelisted_events` option [#77]  
  Only events defined in this list will be included in the activity list.  
  It takes priority over the `disabled_events` option

[v2.3.0]: https://github.com/Readme-Workflows/recent-activity/releases/tag/v2.3.0
[#77]: https://github.com/Readme-Workflows/recent-activity/pull/77

## [v2.2.0]
> **Released:** `31-05-2021`

### Changes
- Move Data Collection API from Heroku to Glitch [[#68]]

[v2.2.0]: https://github.com/Readme-Workflows/recent-activity/releases/tag/v2.2.0
[#68]: https://github.com/Readme-Workflows/recent-activity/pull/68

## [v2.1.0]
> **Released:** `30-05-2021`

### Added features
- Added `commit_name` and `commit_email` to set custom name and e-mail for the committer. [[#63]]
- Added `docs` folder for the Wiki. [[#64]]
- The GitHub Action will collect specific data used for statistics ([Read More][stats]). [[#67]]

[v2.1.0]: https://github.com/Readme-Workflows/recent-activity/releases/tag/v2.1.0
[#63]: https://github.com/Readme-Workflows/recent-activity/pull/63
[#64]: https://github.com/Readme-Workflows/recent-activity/pull/64
[#67]: https://github.com/Readme-Workflows/recent-activity/pull/67
[stats]: https://github.com/Readme-Workflows/recent-activity/tree/main#collected-data-and-statistics

## [v2.0.0]
> **Released:** `23-05-2021`

### Breaking changes
- Timezone can now accept locale string as "continent/city" e.g. Asia/Kolkata [[#54]]
- Settings have been moved to a YAML file (by default filename is `recent-activity.config.yml` in the `.github` directory and can be changed through `CONFIG_FILE`) [[#53]]

### Added features
- New Action types added [[#50]]
  - `CREATE_REPO` - When creating a new Repository
  - `FORK_REPO` - When forking a Repository (Uses new `{FORK}` Placeholder)
  - `WIKI_CREATE` - When creating a new Wiki page (Uses new `{WIKI}` Placeholder)
  - `ADDED_MEMBER` - When adding a new Collaborator to a Repository
  - `REVIEW_APPROVED` - When approving a Pull request
  - `CHANGES_REQUESTED` - When requesting changes in a Pull request
  - `RELEASE` - When publishing a new Release
  - `STAR` - When staring a Repository
- New Placeholder `{FORK}` for forked repository [[#50]]
- New Placeholder `{WIKI}` for new Wiki pages [[#50]]
- `COMMENT` now includes Commit and Pull request Comments (Not Change requests or approvals) [[#50]]

### Changes
- Split the index.js file into different modules [[#45]]
- Make `{ID}` point to the exact issue comment for comment actions [[#42]]

[v2.0.0]: https://github.com/Readme-Workflows/recent-activity/releases/tag/v2.0.0
[#42]: https://github.com/Readme-Workflows/recent-activity/pull/42
[#45]: https://github.com/Readme-Workflows/recent-activity/pull/45
[#50]: https://github.com/Readme-Workflows/recent-activity/pull/50
[#53]: https://github.com/Readme-Workflows/recent-activity/pull/53
[#54]: https://github.com/Readme-Workflows/recent-activity/pull/54

## Older changelogs
- [v1](https://github.com/Readme-Workflows/recent-activity/blob/main/.github/changelogs/CHANGELOG_v1.md)
