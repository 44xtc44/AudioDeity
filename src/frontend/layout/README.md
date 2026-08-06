# 📐 App Layout-Architektur (Grid & Flexbox)

Dieses Dokument beschreibt die strukturellen CSS-Beziehungen und Zuständigkeiten der Komponenten im `src/frontend/layout/`-Verzeichnis.

## 1. Globaler App-Shell-Plan

Das Hauptlayout wird über ein 3-stufiges CSS-Grid gesteuert. Das `app__bottom-sheet` agiert unabhängig als Overlay.

```text
+-------------------------------------------------------+
|                                                       |
| 📱 app__container (Grid Parent)                       |
|  +-------------------------------------------------+  |
|  | [1] app__header (Grid Child)                    |  |
|  +-------------------------------------------------+  |
|  | [2] app__controls (Grid Child)                  |  |
|  +-------------------------------------------------+  |
|  | [3] app__playlist (Grid Child)                  |  |
|  +-------------------------------------------------+  |
+-------------------------------------------------------+

| 🟢 app__bottom-sheet (Fixed Overlay / z-index)        |
+-------------------------------------------------------+
```

---

## 2. Detaillierte Layout-Matrix & Zuständigkeiten

| HTML Element Class    | CSS Typ              | Datei-Pfad                                                     | Layout-Zweck / Verhalten                                                                            |
| :-------------------- | :------------------- | :------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------- |
| `.app__container`     | **Grid**             | `src/frontend/layout/app__header/appHeader.css` (bzw. zentral) | Teilt die App vertikal auf: `header` (auto), `buttons` (auto), `playlist` (`1fr` füllt den Rest).   |
| `.app__header-stack`  | **Relative/Z-Index** | `src/frontend/layout/app__header/appHeader.css`                | Stapelt Logo, Canvas und Overlay übereinander.                                                      |
| `.app__controls-grid` | **Grid**             | `src/frontend/layout/app__controls/appButtons.css`             | Teilt den Raum horizontal/vertikal zwischen `.app__menu-panel` und `.title-container`.              |
| `.app__menu-bar`      | **Grid**             | `src/frontend/layout/app__controls/menuButton/menuBar.css`     | Richtet die Steuerungstasten (`Play`, `Skip`, `Add`, etc.) in einer gleichmäßigen Raster-Reihe aus. |
| `.app__title-bar`     | **Grid**             | `src/frontend/layout/app__controls/titleButton/titleBar.css`   | Richtet die Track-Metadaten und Ansichts-Optionen aus.                                              |
| `.app__playlist-list` | **Flexbox**          | `src/frontend/layout/app__playlist/appPlaylist.css`            | `flex-direction: column`. Stapelt Playlist-Einträge vertikal.                                       |
| `.app__bottom-sheet`  | **Fixed**            | `src/frontend/layout/app__bottom-sheet/bottomSheet.css`        | Nutzt `position: fixed` und `bottom: 0`, um sich über das Haupt-Grid zu legen.                      |

---

## 3. Layout-Regeln & Invarianten

1. **Playlist-Scrolling**: Der `.app__container` darf _niemals_ scrollen (`overflow: hidden`). Nur der `.app__playlist-list` innerhalb der Playlist erhält `overflow-y: auto`.
2. **Button-Konsistenz**: Alle Kind-Elemente von `.app__menu-bar` und `.app__title-bar` sind als `.grid-child` definiert. Breitenänderungen müssen über das Spaltenraster des Parents geregelt werden, nicht am Button selbst.
3. **Dichte (Density)**: Die Datei `playlistBarDensity.css` steuert die Flex-Abstände (`gap` / `padding`) der Listenelemente dynamisch per TS-Klasse.

### Layout-Validierung (Responsive Test)

- Da die Canvas-Elemente dynamisch per TypeScript befüllt werden, besitzen sie im rohen HTML keine Dimensionen.
- Zum Testen des `max-width: 40rem` Limits im Responsive-Modus sind temporäre `::after`-Dummies und Hintergrundfarben im CSS aktiv.
- **Erwartetes Verhalten:** Bei Bildschirmbreiten unter 640px müssen alle farbigen Schichten synchron schrumpfen. Es darf kein horizontaler Scrollbalken entstehen.
