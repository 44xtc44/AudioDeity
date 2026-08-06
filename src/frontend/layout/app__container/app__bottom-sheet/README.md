# 🟩 Bottom-Sheet / Interaktions-Overlay

Das Bottom-Sheet dient der Anzeige von Kontextmenüs (z.B. Audio-Einstellungen, Playlist-Optionen).

## Architektur & Positionierung

- **Container-Kopplung**: Das Element `.app__bottom-sheet` ist ein direktes Kind von `.app__container`. Es nutzt `position: absolute`.
- **Breiten-Einschränkung**: Durch die Platzierung im App-Container erbt es automatisch dessen `max-width: 40rem`. Dadurch wird verhindert, dass das Menü auf Desktop-Monitoren unschön über den gesamten Bildschirm gestreckt wird.
- **Sicherheit (Z-Index)**: Mit einem `z-index: 10` überlagert es alle Grid-Childs (einschließlich des Canvas-Stacks im Header).
- **Interaktions-Schutz**: Sobald das Bottom-Sheet geöffnet ist (`.app__bottom-sheet--open`), sollte dem darunterliegenden `.app__playlist-list` temporär `overflow: hidden` gegeben werden, um "Scroll-Chaining" (versehentliches Scrollen der Playlist im Hintergrund) zu unterbinden.

### ⚠️ Wichtige Positionierungs-Regel

- Das `.app__bottom-sheet` verlässt sich darauf, dass der `.app__container` als **Positionierungs-Anker (Bounding Box)** dient.
- Daher MUSS der `.app__container` zwingend die Eigenschaft `position: relative;` besitzen.
- Ohne diesen Anker bricht das Bottom-Sheet aus dem Grid-Layout aus und orientiert sich fälschlicherweise am Viewport (`<body>`), was zu einer linksbündigen Fehlplatzierung auf Desktop-Monitoren führt.

# 🟩 Bottom-Sheet / Interaktions-Overlay

Diese Komponente stellt die strukturelle Hülle für dynamische Submenüs (z.B. Profileinstellungen oder Track-Optionen) bereit.

## DOM-Architektur & Speicherverwaltung

- **Zuständigkeit**: Erstellt via `document.createElement('div')` die Knotenpunkte für Overlay, Content-Box und den Einlese-Anker (`#sheets-anchor`).
- **Lifecycle**: Wenn die Klasse `.is-active` entfernt wird, läuft ein CSS-Übergang von `300ms` (`transition: transform`). Nach Ablauf der Animation wird `clearAnchor()` aufgerufen. Das zerstört das injizierte Menü-HTML restlos und gibt den Speicher für die Garbage Collection frei.

## 📐 Layout-Kopplung (Eingesperrtes Overlay)

- **Koordinaten-Nullpunkt**: `.app__bottom-sheet` nutzt `position: absolute;`. Damit es nicht links am Monitor kleben bleibt, muss der `.app__container` zwingend `position: relative;` besitzen.
- **Breiten-Garantie**: `.sheet-content` ist mit `width: 100%` und `box-sizing: border-box` definiert. Das stellt sicher, dass das weiße Menü-Panel exakt die Breite des zentrierten `40rem` App-Shell-Layouts annimmt, ohne über den rechten Rand hinauszuschießen oder Spalten zu bilden.
