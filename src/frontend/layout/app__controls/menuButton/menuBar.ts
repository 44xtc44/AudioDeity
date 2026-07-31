import './menuBar.css';
import './buttonMainIcons.css';
import './buttonMainTooltip.css';

import { menuPlaylistShow } from './menuPlaylistShow/menuPlaylistShow.js';
import { menuPlaylistAdd } from './menuPlaylistAdd/menuPlaylistAdd.js';
import { menuAudio } from './menuAudio/menuAudio.js';
import { menuAppInfo } from './menuAppInfo/menuAppInfo.js';
import { initButtonBarBtns } from './drawButton.js';

const gridMember = [
  'PlayButton' /* app__btn--play" */,
  'SkipForwardButton',
  'ToTopButton',
  'AddButton',
  'MenuButton',
  'AudioButton',
  'InfoButton',
];
/* 
  "app__btn--play",
  "app__btn--skip",
  "app__btn--top",
  "app__btn--add",
  "app__btn--menu",
  "app__btn--audio",
*/

export function menuBar(mainBar: HTMLDivElement): void {
  gridContainer(mainBar);
  menuAudio();
  menuAppInfo();
  menuPlaylistShow();
  menuPlaylistAdd();

  initButtonBarBtns(); // uses hardcoded Names of 'gridMember'
}

function gridContainer(parent: HTMLDivElement): void {
  const menuBar = document.createElement('div') as HTMLDivElement;
  menuBar.id = 'app__menu-bar';
  menuBar.classList.add('app__menu-bar');
  parent.appendChild(menuBar);

  for (const btnName of gridMember) {
    const btn = document.createElement('div') as HTMLDivElement;
    btn.id = btnName;
    menuBar.appendChild(btn);
  }
}
