/**
 * @component App__bottomSheet
 * @requires ./app__bottomSheet.css
 *
 * Bottom sheet overlay to expose submenu container.
 * This hull may host different menu container.
 * Attach your container to 'sheets-anchor'.
 */
import './app__bottomSheet.css';

/**
 * @example
 * <!-- Dev tools view -->
 *  <!-- Bottom Sheet Container -->
 *  <div id="app__bottom-sheet" class="app__bottom-sheet">
 *    <div class="sheet-overlay" onclick="toggleBottomSheets()"></div>
 *    <div class="sheet-content">
 *      <div class="sheet-handle"></div> <!-- Cosmetic touch bar -->
 *
 *      <div id="sheets-anchor" class="sheets-anchor">
 *        <!-- MENU DISPOSABLE CONTAINER EXAMPLE-->
 *        <div class="mobile-options">
 *          <h3>Mobile Options</h3>
 *          <ul>
 *            <li><a href="#">Share Link</a></li>
 *            <li><a href="#">Edit Profile</a></li>
 *            <li><a href="#">Log Out</a></li>
 *          </ul>
 *        </div>
 *      </div>
 *    </div>
 *  </div>
 */
export function bottomSheet(): void {
  const app = document.getElementById('app__container') as HTMLDivElement;
  if (app) {
    const bottomSheet = document.createElement('div');
    app.appendChild(bottomSheet);
    bottomSheet.id = 'app__bottom-sheet';
    bottomSheet.classList.add('app__bottom-sheet');

    const overlay = document.createElement('div') as HTMLDivElement;
    bottomSheet.appendChild(overlay);
    overlay.id = 'sheet-overlay';
    overlay.classList.add('sheet-overlay');
    overlay.addEventListener('click', () => {
      toggleBottomSheets();
    });

    const content = document.createElement('div') as HTMLDivElement;
    bottomSheet.appendChild(content);
    content.id = 'sheet-content';
    content.classList.add('sheet-content');

    const fakeHandle = document.createElement('div') as HTMLDivElement;
    content.appendChild(fakeHandle);
    fakeHandle.id = 'sheet-handle';
    fakeHandle.classList.add('sheet-handle');

    const sheetsAnchor = document.createElement('div') as HTMLDivElement;
    content.appendChild(sheetsAnchor);
    sheetsAnchor.id = 'sheets-anchor';
    sheetsAnchor.classList.add('sheets-anchor');
  }
}

export function toggleBottomSheets() {
  const sheet = document.getElementById('app__bottom-sheet');
  if (sheet) {
    sheet.classList.toggle('is-active');
    // Cleanup if we close.
    const hasClass = sheet.classList.contains('is-active');
    if (!hasClass) {
      setTimeout(() => {
        clearAnchor()
      }, 300);
    }
  }
}

/**
 * Overwrite innerHtml of the bottom-sheets anchor element.
 * Attached container will be destroyed and garbage collected.
 */
export function clearAnchor() {
  const anchor = document.getElementById('sheets-anchor') as HTMLDivElement;
  if (anchor) {
    anchor.innerHTML = ''
  }
}




