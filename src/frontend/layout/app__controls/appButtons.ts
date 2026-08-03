import './appButtons.css';
import './menuButton/buttonMainTooltip.css';
import './menuButton/buttonMainTooltip.css';

import { menuBar } from './menuButton/menuBar.js';
import { titleBar } from './titleButton/titleBar.js';

/**
 * Nested grids.
 * 'app__controls' is parent of
 * 'app__menu-panel' and 'app__title-panel'.
 * All buttons are inline SVGs downloaded from google.
 * @returns {void}
 */
export function appButtons(): void {
  const parent = document.getElementById('app__controls') as HTMLDivElement;
  if (!parent) return;

  // Grid that holds two rows for menu and title buttons.
  const [mainBar, titleHeaderBar] = buttonRows(parent);

  menuBar(mainBar);
  titleBar(titleHeaderBar);
}

/**
 * Grid construction for menu and title button bars.
 * 'app__control' is grid-parent for
 * 'app__menu-panel' and 'app__title-panel'.
 * @param {HTMLDivElement} parent div
 * @returns {Array<HTMLDivElement>} div array
 */
function buttonRows(parent: HTMLDivElement): Array<HTMLDivElement> {
  const mainBtn = document.createElement('div') as HTMLDivElement;
  mainBtn.id = 'app__menu-panel';
  mainBtn.classList.add('app__menu-panel');
  parent.appendChild(mainBtn);

  const titleBtn = document.createElement('div') as HTMLDivElement;
  titleBtn.id = 'app__title-panel';
  titleBtn.classList.add('app__title-panel');
  parent.appendChild(titleBtn);

  return [mainBtn, titleBtn];
}
