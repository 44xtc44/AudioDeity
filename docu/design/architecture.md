---
version: alpha
name: Modern SaaS Dashboard
description: A clean, high-density design system for data-intensive applications
colors:
  primary: '#2563EB'
  primary-hover: '#1D4ED8'
  secondary: '#64748B'
  tertiary: '#10B981'
  neutral-50: '#F8FAFC'
  neutral-100: '#F1F5F9'
  neutral-900: '#0F172A'
  success: '#22C55E'
  error: '#EF4444'
  warning: '#F59E0B'
typography:
  display:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -0.02em
  h1:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.01em
  h2:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.3
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.4
    textTransform: uppercase
    letterSpacing: 0.05em
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
rounded:
  sm: 4px
  md: 8px
  lg: 12px
  full: 9999px
components:
  button-primary:
    backgroundColor: '{colors.primary}'
    textColor: '#FFFFFF'
    borderRadius: '{rounded.md}'
    padding: '{spacing.sm} {spacing.md}'
    typography: '{typography.label-sm}'
  button-secondary:
    backgroundColor: 'transparent'
    textColor: '{colors.secondary}'
    borderRadius: '{rounded.md}'
    border: '1px solid {colors.secondary}'
    padding: '{spacing.sm} {spacing.md}'
    typography: '{typography.label-sm}'
  card:
    backgroundColor: '{colors.neutral-50}'
    borderRadius: '{rounded.lg}'
    padding: '{spacing.lg}'
    shadow: '0 1px 3px rgba(0,0,0,0.1)'
---

# Project architecture

[↑ Go back to README.md](../../README.md)

- [→ Architecture](./architecture.md) specifies what the system is composed of and how parts interact (the "blueprint").
- [→ Design](./design.md) bridges the gap, detailing how specific components are structured internally.
- [→ Implementation](./implementation.md) is the execution of these designs, where the abstract models are translated into functional code.

## Audience

The primary audience will be FireFox **mobile** browser add-on users.

## Product

A local media player shows a playlist of Audio/Video files stored in **IndexedDB**.<br>
Included is a 10 band **equalizer** with 3 **frequency shifters** and audio visualization on **canvas**.

Product focus is on mobile devices. The product is useful also on small screens.

## Language and framework

Vanilla **TypeScript** project using **Vite framework** (vanilla-ts template) with **Playwright** for E2E and integration testing.

## Global Standards

- Mobile first
- [PEP 20 – The Zen of Python](https://peps.python.org/pep-0020/)

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

## Architecture Overview Diagram

```mermaid
graph TD
    %% Styling Definitions
    classDef ui fill:#e1f5fe,stroke:#039be5,stroke-width:2px,color:#000;
    classDef core fill:#e8f5e9,stroke:#43a047,stroke-width:2px,color:#000;
    classDef logic fill:#fff3e0,stroke:#fb8c00,stroke-width:2px,color:#000;
    classDef infra fill:#f3e5f5,stroke:#8e24aa,stroke-width:2px,color:#000;
    classDef secure fill:#ffebee,stroke:#e53935,stroke-width:2px,stroke-dasharray: 5 5,color:#000;

    subgraph Security_Sandbox ["Localhost Sandbox Boundary"]

        subgraph UI_Layer ["Presentation Layer"]
            UI_Header["Header Display"]:::ui
            UI_Buttons["Button Bar"]:::ui
            UI_Playlist["Playlist View"]:::ui
        end

        subgraph State_Layer ["State Management Layer"]
            Store["AppStore"]:::core
        end

        subgraph Processing_Layer ["Audio Processing & Logic"]
            EQ["Equalizer Engine"]:::logic
            Shifters["Frequency Shifters"]:::logic
            CanvasVis["Canvas Visualizer"]:::logic
        end

        subgraph Async_Boundary ["Async Boundary Layer"]
            ServiceIF["IPlaylistService"]:::infra
        end

        subgraph Storage_Layer ["Infrastructure Layer"]
            DB[("IndexedDB")]:::infra
            Stores["Object Stores"]:::infra
        end

        SVG_Allowed["Allowed: www.w3.org/2000/svg"]:::secure
    end

    UI_Header --> Store
    UI_Buttons --> Store
    UI_Playlist --> Store

    Store -.-> UI_Playlist
    Store -.-> UI_Header
    Store -.-> UI_Buttons

    Store <--> EQ
    Store <--> Shifters
    EQ --> CanvasVis

    Store <--> ServiceIF

    ServiceIF <--> DB
    DB --> Stores

    UI_Layer --> SVG_Allowed

    style Security_Sandbox fill:#fafafa,stroke:#333,stroke-width:2px;

```

## Directory and layout

Core and service module are located under `/src/frontend/`.<br>
The `/src/frontend/layout/` directory is a mirror of the **component layout tree**.

The `/tests/src/frontend/` mirrors `/src/frontend/`.

**Layout tree** and **key directories** are depicted in the [→ design document](./design.md).

## Documentation

A README.md must be present in each of the subdirectories (components) if a major change was made.<br>
Use Markdown language and organize it in small informational blocks.

## Security

- Check the project folders in `/src/` for internet URLs and report the caller.
- Only allowed in **[SVG icons](www.w3.org/2000/svg)**.
- No test ever may call an internet URL.
- No network calls outside **localhost**.
- Sanitize div.innerHtml when needed.

## Architectural Design Decisions

The predecessor project was a bit messy. CommonJS has only a single global namespace.<br>
Changes to the core component code led also to multiple updates of UI code.

We use ESM modules and break down the project into smaller tasks using a Work Breakdown Structure (WBS).

### UI Layout development

- **Mandatory:** Header Display, Button Bar, Playlist View.
- The UI is available as **vector graphic** [→ Inkscape vector graphic](./docu_ui_layout_02.svg).

### Prototype

- **Prototype is non-functional** with layout mocks.
- **"Responsive Design Mode"** perfect fits all available devices
- **"Rotate viewport"** (landscape) leads to the collapse of the header on small displays, showing only button bar and playlist
- **System Hardware** light/dark-mode change leads to UI response

### MVP - Minimum Viable Product

- **Decoupled Architecture:** View layers (BEM elements) do not directly mutate data or trigger sibling logic. They exclusively emit intent payloads to the centralized `AppStore`.
- **Async Boundary Layer:** All asynchronous actions targeting IndexedDB are completely separated via `IPlaylistService` interfaces to guarantee pure code testability without infrastructure footprints.
- **Future-Proofing for Angular:** The application implements a centralized single-source-of-truth runtime cache mechanism that creates an exact functional parallel to an Angular RxJS stream topology.

### Alpha release

- **First User feedback:** Upload as FireFox test section add-on.
- **Negative feedback:** We like the most and must be answered quick and polite.
- **Improve the product:** Use feedback.

### Stable release

- All core functionality of the "Playlist Booster" project is implemented
- The 10 band Equalizer has only simple preset buttons (10 sliders don't fit on mobiles)

### Second release

- Visualizer "butterchurn" (Winamp milkdrop clone) NPM package is implemented
- A Five band equalizer UI menu for mobile user is added, with at least one custom preset save option

### Database

- Single Database (AudioDeityDB) containing multiple Object Stores (which act like tables in relational databases).

## Git tag history

- Git tags are used to mark major development milestones.
