/**
 * @component App__header
 * @requires ./app__header.css
 *
 * @layout-notes
 * Implementiert den .app__header-stack. Schichtet das Logo und mehrere Canvas-Ebenen
 * mittels CSS 3D-Stacking (z-index) übereinander.
 *
 * STACKING-REIHENFOLGE (Von hinten nach vorne):
 * 1. .app__logo          [z-index: 1] -> Basis (kann per .is-hidden ausgeblendet werden)
 * 2. #app__canvas-bg         [z-index: 2] -> Statischer Hintergrund / Partikel-Grundrauschen
 * 3. #app__canvas-effects    [z-index: 3] -> Audio-Visualizer Effekte (Wellen, Blitze)
 * 4. .app__header-overlay    [z-index: 4] -> UI-Texte, Filter oder Abdunklungen
 */

import './app__header.css';

/**
 * Header has a container to host stacked logo and overlay canvas.
 * Logo img and text can be resized for mobiles.
 * Canvas is for animation and videos from playlist.
 * We use z-index and position relative/absolute to stack canvas.
 *
 * We could stack more canvas for a mega show.
 * Combined foreground and background animation.
 * @returns {void}
 */
export function appHeader(): void {
  const header = document.getElementById('app__header') as HTMLDivElement;
  if (!header) return;

  const stack = stackContainer(header);
  logoContainer(stack);
  canvasBg(stack);
  canvasEffects(stack);
  headerOverlay(stack);
  toggleHeaderLogo(true); // 'false' hides logo img
}

function stackContainer(appHeader: HTMLDivElement): HTMLDivElement {
  const stack = document.createElement('div') as HTMLDivElement;
  stack.id = 'app__header-stack';
  stack.classList.add('app__header-stack');
  appHeader.appendChild(stack);
  return stack;
}

function logoContainer(parent: HTMLDivElement): HTMLDivElement {
  const logo = document.createElement('div') as HTMLDivElement;
  logo.id = 'app__logo';
  logo.classList.add('app__logo');
  const imgLight = document.createElement('img');
  logo.appendChild(imgLight);
  imgLight.id = 'header-logo'; // light-mode
  imgLight.src = './src/assets/images/logo_audiodeity.svg';
  imgLight.alt = 'AudioDeity Logo for light mode';
  parent.appendChild(logo);
  return logo;
}

function canvasBg(parent: HTMLDivElement): void {
  const canvas = document.createElement('canvas') as HTMLCanvasElement;
  canvas.id = 'app__canvas-bg';
  canvas.classList.add('box-canvas');
  parent.appendChild(canvas);
}

function canvasEffects(parent: HTMLDivElement): void {
  const canvas = document.createElement('canvas') as HTMLCanvasElement;
  canvas.id = 'app__canvas-effects';
  canvas.classList.add('box-canvas');
  parent.appendChild(canvas);
}

function headerOverlay(parent: HTMLDivElement): void {
  const overlay = document.createElement('div') as HTMLDivElement;
  overlay.id = 'app__header-overlay';
  overlay.classList.add('app__header-overlay');
  parent.appendChild(overlay);
}

/**
 * Hide logo for canvas animation.
 */
export function toggleHeaderLogo(visible: boolean): void {
  const logo = document.getElementById('header-logo');
  if (logo) {
    logo.classList.toggle('is-hidden', !visible);
  }
}
