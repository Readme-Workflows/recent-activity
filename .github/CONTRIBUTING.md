[coc]: https://github.com/Readme-Workflows/recent-activity/blob/main/CODE_OF_CONDUCT.md
[discord]: https://discord.gg/2a9VC4AK6x
[support]: https://github.com/Readme-Workflows/recent-activity/blob/main/.github/SUPPORT.md
[discussion]: https://github.com/Readme-Workflows/recent-activity/discussions
[bug]: https://github.com/Readme-Workflows/recent-activity/issues/new?template=bug_report.md
[feature]: https://github.com/Readme-Workflows/recent-activity/issues/new?template=feature_request.md
[drafter]: https://github.com/release-drafter/release-drafter

# Contributing to Recent Activity

First of all, thank you for considering to contribute towards the Recent Activity workflow.  
This GitHub Action is made for the community and driven by the community of GitHub.

To make sure that your contribution follows certain standards did we set up these basic Guidelines that you should read and follow.  
If you're unsure about a specific part of the Guidelines, use your best judgement or ask us for clarification.

## Code of Conduct

This project and everyone participating in it is governed by the [Code of Conduct][coc].  
By participating, you are expected to uphold this code. Please report unacceptable behavior through e-mail to baalkrshna@gmail.com or abhijoshi2k@gmail.com, or on our [Discord Server][discord].

## General Support

Please read the [SUPPORT.md file][support] for how to get support with Recent Activity.  
Do not use issues to ask questions. Issues are reserved for Bug reports and Feature requests. Any issue for asking question will be closed or (more likely) changed into a [Discussion].

## Using the Issue tracker

Reporting bugs and Requesting features should be done using the issue tracker.

Please use the [Bug Report][bug] template for reporting bugs and [Feature request][feature] template for requesting new features or changes to existing features.

## Pull request

Before submitting a Pull request should you make sure that there isn't an existing Pull request with the changes you want to provide.  
In addition should you also first open a [Discussion] to discuss any changes, if your Pull request would result in heavy changes being made.

To make a Pull request, first fork the Repository, clone it to your PC using git, edit any files nessecary including README and CHANGELOG if those are affected by your changes, commit those changes to your fork and then create the Pull request.

### Pull request States

The Recent Activity Repository follows a simple rule where different Pull request states indicate different actions to do:

- `Draft Pull requests` are not mergable nor reviewable. a Draft indicates that you're still working on it and that the changes are not yet final.
- `Pull request` indicate that they can be reviewed by Maintainers, but can't yet be merged.
- `Pull request with "Status: Ready" label` mark your Pull request as ready to merge. You can inform a Maintainer about your Pull request's state to get this label added to it.

If at any point you need to make changes and don't want to risk getting your Pull request merged before that change, convert it back into a Draft.  
A Draft Pull request with the "Status: Ready" label that gets turned into a normal Pull request again will skip the review-phase unless you request a new review from the Maintainers.

### Pull request title

The Pull request title should be simple, yet give enough info on what will be changed. Reason behind this is to have a descriptive entry in a possible final release made by the [Release Drafter Action][drafter] used.  
As an example "Update" is not a good title while "Updated info about Placeholder usage" is perfect and "Updated Placeholder usage about where you use them and how" is too much.

### Source branch name

Unlike the Pull request title is this one not that problematic. It is however, still recommended to have a descriptive branch-name to inform about the change made without the Pull request title needed for context.

Commonly used branch-name patterns are `feature/<feature-name>` for new features and `fix/<bug-fixed>` for Bug fixes, but you can use your own style of branch-naming as long as it gives clear information on what it is for.
