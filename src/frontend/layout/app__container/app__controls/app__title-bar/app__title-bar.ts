/**
 * @component MenuBar
 * @requires ./app__menu-bar.css
 * @requires ./app__menu-bar--icons.css
 * @requires ./app__menu-bar--tooltip.css
 *
 * @summary
 * Implements the menu bar buttons.
 * Interfaces and Types must be casted as 'type' else TypeScript errors.
 *
 * Be aware of cricular imports. All the time.
 *
 * TODO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * Checker install!
 * path @shortener config!!!
 * grid overview in docu
 *
 * Don't whine, fight!
 */

import './app__title-bar.css';

import { buttonToBar } from '../../utils/appControlsButtons.js';
import { buttonXML } from '../../utils/buttonSVGs.js';
import type { BtnDataMap } from '../../types/app__menu-bar_types.js';

const titleBarBtns: BtnDataMap = {
  1: {
    anchorId: 'app__title-bar',
    buttonClass: ['app__btn'], // needs 'icon-button' to get tooltip
    buttonId: 'app__btn--hashtag',
    svgXML: buttonXML.hashTagBtn,
    toolTip: "Häscht'n Täg?",
  },
  2: {
    anchorId: 'app__title-bar',
    buttonClass: ['app__btn'],
    buttonId: 'app__btn--edit',
    svgXML: 'Title',
    toolTip: 'Current Title Display',
  },
  3: {
    anchorId: 'app__title-bar',
    buttonClass: ['app__btn'], // needs 'icon-button' to get tooltip
    buttonId: 'app__btn--edit',
    svgXML: buttonXML.menuBtn,
    toolTip: 'Stop and Edit Current Playlist',
  },
  4: {
    anchorId: 'app__title-bar',
    buttonClass: ['app__btn'],
    buttonId: 'app__btn--shuffle',
    svgXML: buttonXML.shuffleOFFBtn,
    toolTip: 'Turn Shuffle ON',
  },
  5: {
    anchorId: 'app__title-bar',
    buttonClass: ['app__btn'],
    buttonId: 'app__btn--repeat',
    svgXML: buttonXML.repeatOFFBtn,
    toolTip: 'Turn Repeat ON',
  },
  6: {
    anchorId: 'app__title-bar',
    buttonClass: ['app__btn', 'icon-button'],
    buttonId: 'app__btn--density',
    svgXML: buttonXML.listDensityOFFBtn,
    toolTip: 'Toggle List Density',
    /*    runFun: function () {
      menuAddPlaylist('app__btn--add');
    }, */
  },
};

/**
 * Removes not production ready components, buttons.
 */
const blocked: number[] = [3, 4, 5];
const prod = () => {
  for (const idx of blocked) {
    if (blocked.includes(Number(idx))) {
      delete titleBarBtns[Number(idx)];
    }
  }
};
prod();

export function appControlsTitleBtns(mainBar: HTMLDivElement): void {
  buttonToBar(mainBar, titleBarBtns);
}
