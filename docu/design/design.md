# Design

[↑ Go back to README.md](../../README.md)

- [→ Architecture](./architecture.md) specifies what the system is composed of and how parts interact (the "blueprint").
- [→ Design](./design.md) bridges the gap, detailing how specific components are structured internally.
- [→ Implementation](./implementation.md) is the execution of these designs, where the abstract models are translated into functional code.

## Implementation order to MVP

Prototype is non-functional without optimizations and sophisticated algorithms.<br>
It gets event listeners to the layout to mock some functionality and scroll behaviour.<br>

MVP Minimum Viable Product. Some essential UI features will not be considered. Examples are "edit playlist" and "equalizer presets".

```Sketch
[Prototype: Mocked Events]
           │
           ▼
[Step 1: Core State Service] ──► Establish Pub/Sub store & IndexedDB abstraction layer
           │
           ▼
[Step 2: Component Wiring]   ──► Replace layout mocks with state-driven event subscribers
           │
           ▼
[Step 3: Playwright Check]   ──► Write E2E test verifying the complete state loop
           │
           ▼
[MVP: Essential features]
```

## Database Context

In my [Station-Recorder](https://github.com/44xtc44/station-recorder.git) project, I used **multiple IndexedDB** to store app settings, blacklists and blobs.<br>
**Station-Recorder** is the data grabber for this project.<br>

Calls to different DBs introduce heavy connection overhead and<br>
are not memory efficient on mobile devices with limited hardware.<br>
Especially inside a browser context.

Multiple DB schema version requests and upgrades where also necessary (onupgradeneeded).

### Database info

Each browser comes with an **IndexedDB** Database.<br>
We can use it to back up app state, and store File data (blobs) as well as File metadata.

Approach is to use one single Database (AudioDeityDB) containing multiple Object Stores (which act like tables in relational databases).

```Sketch
📦 AudioDeityDB (Single Connection Instance)
 ┣ 📂 app_settings      --> Key-Value store for volume, equalizer presets, etc.
 ┣ 📂 playlists         --> Stores complete playlist metadata and structure for super search.
 ┗ 📂 tracks            --> Stores the actual File Blobs, decoupled from playlists.
```

### This Single Database design advantage

- Memory efficiency
- IndexedDB Indexes for high-performance data querying
- IndexedDB schema stays at version 1, as long we have no additional object store to add.
- Clean Encapsulation. All schema definitions (onupgradeneeded) are hidden inside a singular manager class.

### Use of UUID in IndexedDB

ID with UUID is used as "primary" key to distinguish dynamic created Key: Value pairs.<br>
Never the user input.<br>
Prevent language symbol and icon symbol issues. Some users are highly creative.

We use UUID NPM package to distinguish between playlists.<br>
This allows the user to alter the playlist name later { id:UUID, name: foo }.<br>
The browser will accept any name, also a "destroyed" string.

## Directory and layout

Core and service module are located under `/src/frontend/`.<br>
The `/src/frontend/layout/` directory is a mirror of the **component layout tree**.

- `/tests/e2e/` holds end-to-end tests.
- `/tests/unit/src/frontend/` mirrors `/src/frontend/`.<br>

Next code block is the project component structure. Do not modify it, just analyze it.<br>

```bash
Layout tree:
app (global main component) directory mirror /src/frontend/layout/
└── app__container
    ├── app__header
    │   └── app__header-stack
    │       ├── app__logo
    │       ├── app__canvas-bg
    │       ├── app__canvas-effects
    │       └── app__header-overlay
    │
    ├── app__controls
    │   ├── app__menu-panel
    │   │   └── app__menu-bar
    │   │       ├── app__btn app__btn--play (with task/state-modifier)
    │   │       ├── app__btn app__btn--skip
    │   │       ├── app__btn app__btn--top
    │   │       ├── app__btn app__btn--add
    │   │       ├── app__btn app__btn--menu
    │   │       └── app__btn app__btn--audio
    │   │
    │   └── app__title-panel
    │       └── app__title-bar
    │           ├── app__btn app__btn--hashtag
    │           ├── app__btn app__btn--current
    │           ├── app__btn app__btn--edit
    │           ├── app__btn app__btn--shuffle
    │           ├── app__btn app__btn--repeat
    │           └── app__btn app__btn--density
    |
    ├── app__playlist
    │   └── app__playlist-card
    │       └── app__playlist-list
    │           ├── app__playlist-item-wrapper
    │           │    └── app__playlist-item
    │           └── app__playlist-item-wrapper
    │                └── app__playlist-item
    │
    └── app__bottom-sheet (with state-modifier, i.e. app__bottom-sheet--open)
```

### Key Directories

- `./src/backend/` server loads the app if NPM package is on 'npmjs.com'

- `./src/frontend/layout/` root of the component layout tree
- `./src/frontend/layout/app__header/` layer (z-index); image(1), two canvas(2)(3), overlay(4)
- `./src/frontend/layout/app__controls/` buttons arranged in two grids
- `./src/frontend/layout/app__playlist/` grid, flex container with hundreds of titles to scroll

- `./src/frontend/assets/styles/` critical app start styles

- `./src/frontend/core/` core logic (services) like IndexedDB, crud functions, equalizer. Video to canvas, ...
- `./src/frontend/state/` App state. DB Store selected, Equalizer settings.

- `./tests/unit/` quick fail tests
- `./tests/e2e/` long-running UI tests

## Documentation

A README.md must be present in each of the subdirectories (components) if a major change was made.<br>
Use Markdown language and organize it in small informational blocks.<br>
A Doc-strings example for code comment is shown below<br>

```JavaScript
/**
 * @component App__header
 * @requires ./app__header.css
 *
 * @layout-notes
 * Implements the .app__header-stack.
 * Stack logo and multiple canvas elements via CSS 3D-Stacking (z-index).
 *
 * STACKING-ORDER (from back to front):
 * 1. .app__logo           [z-index: 1] -> Base (hide via .is-hidden)
 * 2. #app__canvas-bg      [z-index: 2] -> Static background / particles-basic-noise
 * 3. #app__canvas-effects [z-index: 3] -> Audio-Visualizer Effect (waves, lightnings)
 * 4. .app__header-overlay [z-index: 4] -> UI-Text, Filter or Dimmings
 */
```

## Tagging Strategy

We use a descriptive naming convention to differentiate from formal software releases.
Consider tags like:

- prototype-v1
- alpha-MVP-snapshot
- MVP-final

```Bash
git add .
git commit -m "update docu"
git tag -a prototype-v1 -m "prototype has only mocks"
git push -u origin dev --tags # without --tags push disposes the tag
```

> [!NOTE]
> Check tag is applied to GitHub repo ("Tags" button beside "Branches" button).

- Considering Murphy’s Law, this allows for a rollback to the last milestone.

## Common mistakes strategy

### Git add/commit

To remedy common mistakes, here some commands to roll back local and mistakes.

- git add

```Bash
git add .
git reset # removes files from staging
```

- git commit

```Bash
git add .
git commit -m "foo bar" # fire
git reset --soft HEAD~1 # reset to one commit before AND unstages files; no files deleted
```
