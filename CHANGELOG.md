# Changelog v2

The Changelog of the major version 2 of Recent-Activity GitHub Action.

Note that the displayed date is in the format `dd-mm-yyyy`

[Older changelogs](#older-changelogs)

## [v2.3.2]
> **Released:** `soon`

### Added Features
- Split PR & issues into separate events [#272]

### Bugs Fixed
- Removed data collection (which was done through glitch.me) since glitch has stopped support [#343]

### Chores
- npm(deps-dev): bump prettier from 2.8.2 to 3.6.0 [#249] [#259] [#270] [#280] [#307]
- npm(deps-dev): bump eslint from 8.31.0 to 8.47.0 [#250] [#256] [#258] [#263] [#265] [#274] [#275] [#277] [#282] [#286] [#289] [#291] [#300] [#303]
- npm(deps): bump axios from 1.2.2 to 1.10.0 [#251] [#254] [#257] [#260] [#261] [#276] [#278] [#279] [#318]
- Github Actions(deps): Bump lowlighter/metrics from 3.31 to 3.34 [#252] [#273] [#310]
- Github Actions(deps): Bump tibdex/github-app-token from 1.7.0 to 1.8.0 [#253]
- npm(deps-dev): bump @vercel/ncc from 0.36.0 to 0.36.1 [#255]
- npm(deps-dev): bump nodemon from 2.0.20 to 2.0.22 [#262] [#269]
- npm(deps): bump qs from 6.11.0 to 6.11.2 [#264] [#287]
- npm(deps-dev): bump eslint-config-prettier from 8.6.0 to 10.1.5 [#266] [#268] [#302]
- Github Actions(deps): bump Andrew-Chen-Wang/github-wiki-action from 3 to 4 [#285]

[v2.3.2]: https://github.com/Readme-Workflows/recent-activity/releases/tag/v2.3.2
[#343]: https://github.com/Readme-Workflows/recent-activity/pull/343
[#318]: https://github.com/Readme-Workflows/recent-activity/pull/318
[#310]: https://github.com/Readme-Workflows/recent-activity/pull/310
[#307]: https://github.com/Readme-Workflows/recent-activity/pull/307
[#303]: https://github.com/Readme-Workflows/recent-activity/pull/303
[#302]: https://github.com/Readme-Workflows/recent-activity/pull/302
[#300]: https://github.com/Readme-Workflows/recent-activity/pull/300
[#291]: https://github.com/Readme-Workflows/recent-activity/pull/291
[#289]: https://github.com/Readme-Workflows/recent-activity/pull/289
[#287]: https://github.com/Readme-Workflows/recent-activity/pull/287
[#286]: https://github.com/Readme-Workflows/recent-activity/pull/286
[#285]: https://github.com/Readme-Workflows/recent-activity/pull/285
[#282]: https://github.com/Readme-Workflows/recent-activity/pull/282
[#280]: https://github.com/Readme-Workflows/recent-activity/pull/280
[#279]: https://github.com/Readme-Workflows/recent-activity/pull/279
[#278]: https://github.com/Readme-Workflows/recent-activity/pull/278
[#277]: https://github.com/Readme-Workflows/recent-activity/pull/277
[#276]: https://github.com/Readme-Workflows/recent-activity/pull/276
[#275]: https://github.com/Readme-Workflows/recent-activity/pull/275
[#274]: https://github.com/Readme-Workflows/recent-activity/pull/274
[#273]: https://github.com/Readme-Workflows/recent-activity/pull/273
[#272]: https://github.com/Readme-Workflows/recent-activity/pull/272
[#270]: https://github.com/Readme-Workflows/recent-activity/pull/270
[#269]: https://github.com/Readme-Workflows/recent-activity/pull/269
[#268]: https://github.com/Readme-Workflows/recent-activity/pull/268
[#266]: https://github.com/Readme-Workflows/recent-activity/pull/266
[#265]: https://github.com/Readme-Workflows/recent-activity/pull/265
[#264]: https://github.com/Readme-Workflows/recent-activity/pull/264
[#263]: https://github.com/Readme-Workflows/recent-activity/pull/263
[#262]: https://github.com/Readme-Workflows/recent-activity/pull/262
[#261]: https://github.com/Readme-Workflows/recent-activity/pull/261
[#260]: https://github.com/Readme-Workflows/recent-activity/pull/260
[#259]: https://github.com/Readme-Workflows/recent-activity/pull/259
[#258]: https://github.com/Readme-Workflows/recent-activity/pull/258
[#257]: https://github.com/Readme-Workflows/recent-activity/pull/257
[#256]: https://github.com/Readme-Workflows/recent-activity/pull/256
[#255]: https://github.com/Readme-Workflows/recent-activity/pull/255
[#254]: https://github.com/Readme-Workflows/recent-activity/pull/254
[#253]: https://github.com/Readme-Workflows/recent-activity/pull/253
[#251]: https://github.com/Readme-Workflows/recent-activity/pull/251
[#252]: https://github.com/Readme-Workflows/recent-activity/pull/252
[#250]: https://github.com/Readme-Workflows/recent-activity/pull/250
[#249]: https://github.com/Readme-Workflows/recent-activity/pull/249

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
