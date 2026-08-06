/**
 * @component App__controls
 * @requires ./app__controls.css
 * @requires ./app__controls--icons.css
 * @requires ./app__controls--tooltip.css
 *
 * @notes
 * Nested grids.
 * Grid that holds two rows for menu and title buttons.
 * All buttons are inline SVGs downloaded from google fonts web site.
 */

import './app__controls.css';
import './app__controls--icons.css';
import './app__controls--tooltip.css';

import { appControlsMenuBtns } from './app__menu-bar/app__menu-bar.js';
import { appControlsTitleBtns } from './app__title-bar/app__title-bar.js';

/**
 * Call controls drawer from child components.
 * Child components implement also event listener and action.
 * @returns
 */
export function appButtons(): void {
  const parent = document.getElementById('app__controls') as HTMLDivElement;
  if (!parent) return;
  appControlsMenuBtns(parent);
  appControlsTitleBtns(parent);
}
