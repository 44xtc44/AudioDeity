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

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/~/github.com/44xtc44/AudioDeity)

Browser add-on **TypeScript** project using **Vite framework (vanilla-ts template)** with<br>
**Playwright** for E2E and integration testing.

A local media player shows a playlist of Audio/Video files stored in **IndexedDB**.<br>
Included is a 10 band **equalizer** with 3 **frequency shifters** and audio visualization on **canvas**.

The primary target audience will be FireFox **mobile** browser add-on users.

## Project Context

The project is the successor of my **[Playlist Booster Repository](https://github.com/44xtc44/PlaylistBooster.git)**.<br>
I filed a **[Bug report for FireFox mobile](https://github.com/44xtc44/Bug-FireFoxAndroid-file-handle)**. Audio context loss on multiple open tabs.<br>

**Playlist Booster** (project v1) migration from **CommonJS to TypeScript** (project v2).<br>
This will also allow bypassing the bug and solving cosmetic flaws on mobile displays.

You can enjoy **Playlist Booster FireFox add-on also on mobiles**, search **playlist booster**.<br>
Version 2 will be migrated to Angular in version 3.

## Project documents

- [→ Architecture document](/docu/design/architecture.md)<br>
- [→ Design document](/docu/design/design.md)<br>
- [→ Implementation document](/docu/design/implementation.md)
