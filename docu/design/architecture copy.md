# Project Architecture

[↑ Go back to README.md](../../README.md)

- [→ Architecture](./architecture.md) specifies the system components and how they interact (the "blueprint").
- [→ Design](./design.md) bridges the gap by detailing how specific components are structured internally.
- [→ Implementation](./implementation.md) represents the execution of these designs, where abstract models are translated into functional code.

## Audience

The target audience consists of Firefox **mobile** browser add-on users.

## Product

A local media player that displays a playlist of audio/video files stored in **IndexedDB**.<br>
It includes a 10-band **equalizer** with 3 **frequency shifters** and audio visualization rendered on a **canvas**.

The product focuses primarily on mobile devices and remains highly functional on small screens.

## Language and Framework

A vanilla **TypeScript** project built using the **Vite framework** (`vanilla-ts` template), utilizing **Playwright** for E2E and integration testing.

## Global Standards

- Mobile first
- [PEP 20 – The Zen of Python](https://peps.python.org/pep-0020/)

## Project Standards

- The project's primary language is English.
- Business arguments take precedence in all discussions.
- Proposed project changes must be advocated to the Product Owner (PO) and consider time, cost, and maintainability.
- Design decisions must focus on making any future transition to Angular as seamless as possible.

## Code Writing Standards

- Adhere to functional programming principles. Document the use case if exceptions are necessary.
- Docstrings are mandatory for all modules.
- Update the `README.md` within the module folder whenever major changes are introduced to that module.
- Utilize the "LTeX+" and "Code Spell Checker" VS Code extensions to maintain code and documentation quality.
- Use "sentencechecker.com/" to verify that all written sentences are grammatically valid English.
- Use **camelCase** syntax for JavaScript variables and **BEM (Block Element Modifier)** naming conventions for DOM elements.
- Add elements dynamically to the DOM using the `document.createElement('div')` approach.
- The project utilizes **pre-commit hooks** for linting and formatting.
- No performance optimization may be implemented without prior discussion.

## Directory and Layout

The `/src/` directory mirrors the component **layout tree**.<br>
The `/tests/src/` directory mirrors the `/src/` directory.<br>

The **layout tree** and **key directories** are depicted in the [→ design document](./design.md).

## Documentation

A `README.md` file must be present in each subdirectory (component) if a major change is made.<br>
Use Markdown and organize content into small, concise informational blocks.<br>

## Security

- Inspect the project folders in `./src` for external internet URLs and report the calling component.<br>
- External URLs are strictly limited to **[SVG icons](www.w3.org/2000/svg)**.<br>
- Test suites are strictly prohibited from calling external internet URLs.<br>
- Network calls outside of **localhost** are forbidden.<br>
- Sanitize `div.innerHTML` whenever dynamic rendering is required.<br>

## Architectural Design Decisions

The predecessor project suffered from structural complexity. CommonJS relies on a single global namespace, meaning changes to core component code frequently forced multiple updates across the UI layer.

To resolve this, we utilize ESM modules and break the project down into manageable tasks using a Work Breakdown Structure (WBS).

### UI Layout Development

- **Mandatory:** Header Display, Button Bar, Playlist View.
- The UI layout is available as a **vector graphic** in the [→ Inkscape vector graphic](./docu_ui_layout_02.svg).

### Prototype

- **The prototype is non-functional** and utilizes layout mocks.
- **"Responsive Design Mode"** must seamlessly fit all supported device screens.
- **"Rotate viewport"** (landscape mode) collapses the header on small displays, showing only the button bar and the playlist.
- The UI must dynamically adapt to system-level light/dark mode changes.

### MVP - Minimum Viable Product

- **Decoupled Architecture:** View layers (BEM elements) do not directly mutate data or trigger sibling logic. They exclusively emit intent payloads to the centralized `AppStore`.
- **Async Boundary Layer:** All asynchronous actions targeting IndexedDB are completely abstracted via `IPlaylistService` interfaces to guarantee pure code testability without infrastructure footprints.
- **Future-Proofing for Angular:** The application implements a centralized single-source-of-truth runtime cache mechanism that creates an exact functional parallel to an Angular RxJS stream topology.

### Alpha Release

- **Initial User Feedback:** Deploy the application to the Firefox test section as an add-on.
- **Negative Feedback:** Critical feedback must be prioritized, analyzed, and answered quickly and politely.
- **Product Improvement:** Refine the product iteratively based on user feedback.

### Stable Release

- All core functionalities of the "Playlist Booster" project are fully implemented.
- The 10-band equalizer features simplified preset buttons, as 10 individual sliders do not fit comfortably on mobile screens.

### Second Release

- Integrate the "butterchurn" visualizer (a Winamp MilkDrop clone) via its NPM package.
- Introduce a 5-band equalizer UI menu optimized for mobile users, including at least one custom preset save option.

### Database

- A single database (`AudioDeityDB`) containing multiple Object Stores, which function similarly to tables in relational databases.

## Git Tag History

- Git tags are utilized to mark major development milestones.
