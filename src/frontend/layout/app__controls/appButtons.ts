import './appButtons.css';
import './menuButton/buttonMainTooltip.css';
import './menuButton/buttonMainTooltip.css';

import { menuBar } from './menuButton/menuBar.js';
import { titleBar } from './titleButton/titleBar.js';

/**
 * Nested grids.
 * 'app__controls' is anchor div for 'app__controls-grid' the parent-grid.
 * 'app__menu-panel' and 'title-container' are children.
 * Both children have also anchor divs to not set the children also grid-parent.
 * Means each children anchor holds a grid-parent for the button columns.
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
 * 'app__controls-grid' is grid-parent for
 * 'app__menu-panel' and 'app__title-panel'.
 * @param {HTMLDivElement} anchorDiv div
 * @returns {Array<HTMLDivElement>} div array
 */
function buttonRows(anchorDiv: HTMLDivElement): Array<HTMLDivElement> {
  const gridParent = document.createElement('div') as HTMLDivElement;
  gridParent.id = 'app__controls-grid';
  gridParent.classList.add('app__controls-grid');
  anchorDiv.appendChild(gridParent);

  const mainBtn = document.createElement('div') as HTMLDivElement;
  mainBtn.id = 'app__menu-panel';
  mainBtn.classList.add('app__menu-panel');
  gridParent.appendChild(mainBtn);

  const titleBtn = document.createElement('div') as HTMLDivElement;
  titleBtn.id = 'app__title-panel';
  titleBtn.classList.add('app__title-panel');
  gridParent.appendChild(titleBtn);

  return [mainBtn, titleBtn];
}
