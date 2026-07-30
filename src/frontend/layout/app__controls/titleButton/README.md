# 🏷️ Title-Bar Layout-Dokumentation

Die Title-Bar dient der Anzeige des aktuell abgespielten Tracks sowie der sekundären Steuerung.

## Layout-Sicherung gegen Überlauf (Robustness)

Audio-Dateien besitzen oft extrem lange Namen. Ohne Absicherung würde ein langer Titel die restlichen Buttons aus dem sichtbaren Bereich des `40rem` Containers schieben.

### Technische Absicherung:
1. **Grid-Zuweisung**: Durch den Spaltenwert `1fr` in `.app__title-bar` wird dem Element `.title-display` dynamisch exakt der Platz zugewiesen, der nach Abzug der Icons übrig bleibt.
2. **Text-Kollaps**: Im CSS wird über `white-space: nowrap` und `text-overflow: ellipsis` garantiert, dass der Text einzeilig bleibt und bei Platzmangel elegant mit `...` abgekürzt wird.
3. **Barrierefreiheit**: Die TS-Funktion `updateCurrentTitle()` spiegelt den vollen Namen zusätzlich in das HTML-Attribut `title="..."`, damit Nutzer den vollständigen Titel via Mouse-Hover einsehen können.
