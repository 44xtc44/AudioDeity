/**
 * @component MenuBar
 * @requires ./app__menu-bar.css
 *                            @requires ./app__menu-bar--icons.css
 *                            @requires ./app__menu-bar--tooltip.css
 *
 * @summary
 * Implements the menu bar buttons.
 * Interfaces and Types must be casted as 'type' else TypeScript errors.
 * Don't whine, fight!
 */

import './app__menu-bar.css';

import { menuPlaylist } from './app__menu-playlist/app__btn--menu/app__btn--menu.js';
import { menuAddPlaylist } from './app__menu-playlist/app__btn--add/app__btn--add.js';
import { menuAudio } from './app__menu-service/app__btn--audio/app__btn--audio.js';
import { menuInfo } from './app__menu-service/app__btn--info/app__btn--info.js';
import { buttonToBar } from '@utils/appControlsButtons.js';

import { buttonXML } from '@utils/buttonSVGs.js';
import type { BtnDataMap } from '@tsTypes/app__menu-bar_types.js';

const menuBarBtns: BtnDataMap = {
  1: {
    anchorId: 'app__menu-bar',
    subMenuId: 'app__menu-play',
    buttonClass: ['app__btn', 'icon-button-large'], // no tooltip
    buttonId: 'app__btn--play',
    svgXML: buttonXML.playBtn,
    toolTip: 'Play',
  },
  2: {
    anchorId: 'app__menu-bar',
    subMenuId: 'app__menu-play',
    buttonClass: ['app__btn', 'icon-button'], // 'icon-button' has tooltip
    buttonId: 'app__btn--skip',
    svgXML: buttonXML.skipBtn,
    toolTip: 'Skip Forward',
  },
  3: {
    anchorId: 'app__menu-bar',
    subMenuId: 'app__menu-playlist',
    buttonClass: ['app__btn', 'icon-button'],
    buttonId: 'app__btn--add',
    svgXML: buttonXML.addBtn,
    toolTip: 'New Playlist',
    runFun: function () {
      menuAddPlaylist('app__btn--add');
    },
  },
  4: {
    anchorId: 'app__menu-bar',
    subMenuId: 'app__menu-playlist',
    buttonClass: ['app__btn', 'icon-button'],
    buttonId: 'app__btn--menu',
    svgXML: buttonXML.menuBtn,
    toolTip: 'Playlists',
    runFun: function () {
      menuPlaylist('app__btn--menu');
    },
  },
  5: {
    anchorId: 'app__menu-bar',
    subMenuId: 'app__menu-service',
    buttonClass: ['app__btn', 'icon-button'],
    buttonId: 'app__btn--audio',
    svgXML: buttonXML.audioBtn,
    toolTip: 'Audio Menu',
    runFun: function () {
      menuAudio('app__btn--audio');
    },
  },
  6: {
    anchorId: 'app__menu-bar',
    subMenuId: 'app__menu-service',
    buttonClass: ['app__btn', 'icon-button'],
    buttonId: 'app__btn--info',
    svgXML: buttonXML.infoBtn,
    toolTip: 'Info Menu',
    runFun: function () {
      menuInfo('app__btn--info');
    },
  },
};

export function appControlsMenuBtns(mainBar: HTMLDivElement): void {
  buttonToBar(mainBar, menuBarBtns);
}
