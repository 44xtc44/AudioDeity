# Project: AudioDeity

Vanilla **TypeScript** project using **Vite framework** (vanilla-ts template) with **Playwright** for E2E and integration testing.<br>
The primary target audience will be FireFox **mobile** browser add-on users.<br>

## Project Context

The project is version 2 of my **[Playlist Booster Repository](https://github.com/44xtc44/PlaylistBooster.git)**.
I filed a **[Bug report for FireFox mobile](https://github.com/44xtc44/Bug-FireFoxAndroid-file-handle)**.<br>

Version 1 will be migrated from **CommonJS to TypeScript** by using a framework and the **latest test engine**.<br>
You can enjoy version 1 **FireFox** add-on, **also on mobiles**, by searching for "**playlist booster**".<br>
The project will be migrated to Angular in version 3.<br>

## Global Standards

- Mobile first
- the zen of python

## Project Standards

- The project uses the English language.
- Business arguments are on top of any discussion.
- Advocate project changes to the Product Owner (PO), me. Consider time, cost and a clean project.
- Design decisions focus is on making the future transition to Angular as painless as possible.

## Code writing Standards

- Functional programming. Break the standard if needed and explain the use case.
- Doc-strings are mandatory for all modules
- Update README.md in the module folder if major changes where made to a module.
- "LTeX+" and "Code Spell Checker" "vscode" add-ons, so we can enjoy our work.
- Use "sentencechecker.com/" to be sure your sentence is valid English at all.
- **camelCase** syntax for JS variable names and **BEM (Block Element Modifier)** for DOM names.
- Add elements dynamic to DOM. Means document.createelement('div') approach
- The project uses **pre-commit hooks** for linting and formatting.
- No optimization without discussion

## Directory info

The `/src/` directory is a mirror of the component layout 'Layout tree'<br>
The `/tests/src/` directory is a mirror of the c`/src/` directory.<br>
Next code block is the project structure. Do not modify it, just analyze it.<br>

```bash
Layout tree:
app (global main component) directory mirror /src
└── app__container                      
    ├── app__header                     
    │   └── app__header-stack      
    │       ├── app__logo               
    │       ├── app__canvas-bg     
    │       ├── app__canvas-effects
    │       └── app__header-overlay
    │
    ├── app__controls                   
    │   └── app__controls-grid                 
    │       ├── app__menu-panel         
    │       │   └── app__menu-bar  
    │       │       ├── app__btn app__btn--play (with task/state-modifier)
    │       │       ├── app__btn app__btn--skip
    │       │       ├── app__btn app__btn--top
    │       │       ├── app__btn app__btn--add
    │       │       ├── app__btn app__btn--menu
    │       │       └── app__btn app__btn--audio
    │       │
    │       └── app__title-panel         
    │           └── app__title-bar  
    │               ├── app__btn app__btn--hashtag
    │               ├── app__btn app__btn--current
    │               ├── app__btn app__btn--edit
    │               ├── app__btn app__btn--shuffle
    │               ├── app__btn app__btn--repeat
    │               └── app__btn app__btn--density
    │
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

## Key Directories

- `./src/backend/` server loads the app if NPM package is on 'npmjs.com'

- `./src/frontend/layout/` root of the component layout tree
- `./src/frontend/layout/app__header/` layer (z-index); image(1), two canvas(2)(3), overlay(4)
- `./src/frontend/layout/app__controls/` buttons arranged in two grids
- `./src/frontend/layout/app__playlist/` grid, flex container with hundreds of titles to scroll

- `./src/frontend/assets/styles/` critical app start styles

- `./src/frontend/core/` core logic (services) like IndexedDB, crud functions, equalizer. Video to canvas, ...
- `./src/frontend/state/` App state. DB Store selected, Equalizer settings.
- `./<project name>/tests/src/frontend/layout/` quick fail layout
- `./<project name>/tests/src/frontend/core/` quick fail for Dependency Injections (DI)
- `./<project name>/tests/e2e/` long-running UI tests

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

## Common Commands

## Security

Check the project folders in `./src` for internet URLs and report the caller.<br>
Only allowed in **[SVG icons](www.w3.org/2000/svg)**.<br>
No test ever may call an internet URL.<br>
No network calls outside **localhost**.<br>
Sanitize div.innerHtml when needed.<br>
