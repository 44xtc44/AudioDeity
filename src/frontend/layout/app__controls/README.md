# 🎛️ App-Buttons Layout-Dokumentation

Dieses Verzeichnis steuert die Interaktionsleisten der App. Es ist optimiert für die feste Breite von `40rem`.

## Grid-Strategien

### 1. Symmetrisches Grid (`.app__menu-bar`)

- **Konzept:** Alle Steuerungstasten haben exakt dieselbe visuelle Gewichtung.
- **CSS-Regel:** `repeat(X, 1fr)` teilt den Platz mathematisch exakt auf.
- **V2-Erweiterung:** Durch Aktivierung des `app__menu-bar--v2` Modifiers schaltet das Grid nahtlos von 5 auf 6 Spalten um. Die Tasten schrumpfen proportional, ohne das Layout zu brechen.

### 2. Asymmetrisches Grid (`.app__title-bar`)

- **Konzept:** Der Songtitel benötigt maximalen Platz für lange Dateinamen. Icons für Metadaten (`#`) und Controls (`Shuffle`, `Repeat`) sollen so kompakt wie möglich sein.
- **CSS-Regel:** `grid-template-columns: auto 1fr auto auto auto auto;`
- **Verhalten bei Textüberlauf:** Der Button `.title-display` sollte im Komponenten-CSS mit `overflow: hidden` und `text-overflow: ellipsis` versehen werden, damit extrem lange Titel das Grid nicht sprengen.

### Dynamische DOM-Generierung (`menuBar.ts`)

- Das `<nav>`-Element wird rein imperativ über `document.createElement('nav')` erzeugt.
- **Layout-Kopplung**: Die Anzahl der gerenderten Kind-Elemente (`<button>`) steuert direkt die Spaltenverteilung des CSS-Grids.
- Wenn `isV2 = true`, wird der Klasse `.app__menu-bar` die Klasse `.app__menu-bar--v2` hinzugefügt, wodurch das Grid im CSS von `repeat(5, 1fr)` auf `repeat(6, 1fr)` umschaltet und Platz für den `ToTopButton` schafft.
