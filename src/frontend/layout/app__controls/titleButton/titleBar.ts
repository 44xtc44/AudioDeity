import './titleBar.css';

import { initTitleBarBtns } from './drawTitleButton';

const gridMember = [
  'HashTagBtn',
  'CurrentTitleBtn',
  'EditPlaylistBtn',
  'ShuffleBtn',
  'RepeatBtn',
  'ListDensityBtn',
];

/**
 * 'app__title-bar' is the grid-parent for grid columns of buttons.
 * 'titleBox' itself is a grid member. It should be no grid-parent.
 * Else, blowing up the layout s*cks as always.
 * @param titleBox
 */
export function titleBar(titleBox: HTMLDivElement): void {
  gridContainer(titleBox);
  initTitleBarBtns(); // uses hardcoded Names of 'gridMember'
}

function gridContainer(parent: HTMLDivElement): HTMLDivElement {
  const titleBar = document.createElement('div');
  titleBar.id = 'app__title-bar';
  titleBar.classList.add('app__title-bar');
  parent.appendChild(titleBar);

  for (const btnName of gridMember) {
    const btn = document.createElement('div') as HTMLDivElement;
    btn.id = btnName;
    titleBar.appendChild(btn);
  }

  // The only text in the title bar.
  const title = document.getElementById('CurrentTitleBtn') as HTMLDivElement;
  title.innerText = 'Title';
  return titleBar;
}
