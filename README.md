# Project: AudioDeity

<!--

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/YOUR_USERNAME/YOUR_REPO/tree/main/examples/my-example)

check running in the sandbox, for user msg
"App is running in a sandbox on StackBlitz. Please use the 'Load DEV Media' button."
const isStackBlitz = window.location.hostname.endsWith('stackblitz.io') ||
                     window.location.hostname.endsWith('webcontainer.io');

if (isStackBlitz) {
  console.log('Running in StackBlitz');
  // Display your message here
}
-->

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/~/github.com/44xtc44/AudioDeity) &emsp; prototype-v1

- **Browser add-on TypeScript project**
- **Vite framework (vanilla-ts template)**<br>
- **Playwright E2E**
- **Vite unit tests**

A local media player shows/plays a playlist of Audio/Video files stored in **IndexedDB**.<br>
Included is a 10 band **equalizer** with 3 **frequency shifters** and audio visualization on **canvas**.

**Target audience:** FireFox **mobile** browser add-on users.

## Project Context

The project is the successor of my **[Playlist Booster Repository](https://github.com/44xtc44/PlaylistBooster.git)**.<br>
I filed a **[Bug report for FireFox mobile](https://github.com/44xtc44/Bug-FireFoxAndroid-file-handle)**. Audio context loss on multiple open tabs.<br>

**Playlist Booster** migration from **CommonJS to TypeScript** (AudioDeity).<br>
During migration, we bypass the bug and modernize the UI for mobile displays.

## Tech Stack & Architecture Goals

This project is built using **Vite** and pure **Vanilla TypeScript**. The goal is to show mastering fundamental software engineering design patterns (like the Observer Pattern and Singletons) before the next step; migrating to heavy frameworks like Angular.

### Core Principles

- **Pure DOM Manipulation:** No virtual DOM overhead; direct, performance-optimized element bindings.
- **Class-Based State:** Feature states are isolated inside object-oriented TS classes (Services).
- **Zero Magic:** No external state management libraries. Everything is built from scratch.

## Project documents

- [→ Architecture document](/docu/design/architecture.md)<br>
- [→ Design document](/docu/design/design.md)<br>
- [→ Implementation document](/docu/design/implementation.md)

## Installation & Setup

This repository uses a strict dependency lock to ensure the project builds identically now, at release, and in the future.

### For Future Users / Production Deploys

To install the exact, frozen dependency tree without updating any packages:

```bash
npm ci
```

_Note: Never run `npm install` for a production release. `npm ci` ensures 100% reproducible builds by strictly enforcing the `package-lock.json` file._

### For Active Development (Next 2 Months)

If you need to add new tools, update a package, or fix vulnerabilities before release:

```bash
# Install current locked dependencies
npm ci

# To safely update minor/patch versions or fix security issues:
npm audit fix
# or to add a new package:
npm install <package-name>

# IMPORTANT: Always commit package.json AND package-lock.json together!
git add package.json package-lock.json
git commit -m "chore: update dependencies"
```

## Showcase Version 1

You can enjoy **Playlist Booster FireFox add-on also on mobiles**, search **playlist booster**.<br>
Or [use this link for the PC add-on.](https://addons.mozilla.org/en-US/firefox/addon/playlistbooster/)

## To-do

To end the prototype phase:

- Docs Checker pre-commit
- Grid global overview (grid-system.md) and in respective folders /layout
- Tests for /layout
