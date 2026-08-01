# Implementation Info

[↑ Go back to README.md](../../README.md)

- [→ Architecture](./architecture.md) specifies what the system is composed of and how parts interact (the "blueprint").
- [→ Design](./design.md) bridges the gap, detailing how specific components are structured internally.
- [→ Implementation](./implementation.md) is the execution of these designs, where the abstract models are translated into functional code.

## Project setup

### Local PC

#### SSH

#### VS Code plugins

#### Working with local feature branches

### GitHub Repo

Pull requests. `no-autopilot` workflow.

- Manual Gates: Prevents autonomous agent loops from modifying or pushing code without explicit human approval.
- Step-by-Protocol: Forces a structured review path (such as propose, review alternatives, and - approve) rather than letting an agent execute multi-file changes blindly.
- Risk Reduction: Lowers the - blast radius for high-impact repository updates or production deployments.

#### Security

#### Workflow

### Connect to Slack

Discussion board where people can ask dumb questions without feeling judged.

Automatic message if a test fails.

### Connect GitHub and LinkedIn

At least the project logo to go to GitHub Repository.

## Tests

- Run only Unit Tests via workflow to save build time
- Adapt workflow, so only full tests run on pull request to /main branch.<br>
  Means workflow: on: ... [main]

## Buttons

## Database

## Playlist List

### Scroll behaviour

### Listener on List Elements

## Playlist Bottom-sheet

## Add Playlist Button Menu

### File Upload

## Playlist Button Menu

## Audio Button Menu

## Implement Audio/Video elements

### Connect Play Button

## Connect Video Output to Canvas

## Play/Pause Switch

## Dark Style

## Sanitizer

## Equalizer

### Display on Audio Bottom-sheet

Adding a concurrency block to GitHub Actions workflows enables the immediate cancellation of outdated jobs when new commits are pushed to the same branch or PR, directly conserving free build minutes. Implementing this configuration allows developers to manage workflow efficiency directly within their .github/workflows/ci.yml files, preventing redundant resource consumption. For detailed implementation steps, review the official documentation on the GitHub Blog.
https://docs.github.com/en/actions/how-tos/write-workflows/choose-when-workflows-run/control-workflow-concurrency
