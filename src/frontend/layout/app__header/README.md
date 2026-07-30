### Wichtige Layout-Regel für den Header-Stack
* Alle direkten Kinder von `.app__header-stack` **müssen** `position: absolute` mit `top: 0` und `left: 0` besitzen.
* Es dürfen keine statischen Kind-Elemente ohne absolute Positionierung eingefügt werden, da dies das Schicht-System (Stacking) bricht und Elemente horizontal/vertikal verschiebt.
* Für Interaktionen auf dem Overlay stellt `.app__header-overlay` die oberste Ebene (`z-index: 4`) dar.

### 📱 Verhalten im mobilen Querformat (Landscape Collapse)

Aufgrund des stark begrenzten vertikalen Raums auf Smartphones im Querformat wird der `.app__header` über eine Media Query automatisch kollabiert:

* **Bedingung**: `orientation: landscape` UND `max-height: 450px` (schützt Desktop-Monitore).
* **Technischer Ablauf**: 
  1. Die Höhe wird via CSS auf `0px` gesetzt.
  2. `opacity: 0` und `visibility: hidden` sorgen für ein sauberes Ausblenden.
  3. Das globale App-Grid (`grid-template-rows: auto auto 1fr`) reicht den freigewordenen Platz ohne TypeScript-Intervention direkt an die Playlist weiter.
