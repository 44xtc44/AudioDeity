import './drawButton.css';
import { buttonXML } from '../buttonSVGs';

interface btnConf {
  buttonClass: Array<string>;
  parentDivId: string;
  buttonId: string;
  svgXML: string;
  toolTip: string;
}
/**
 * On button change (on/off icon) is no need to
 * remove something. We write to '.innerHtml'.
 */

export function initButtonBarBtns(): void {
  playButton();
  // pauseButton()
  skipButton();
  // toTopButton()
  addButton();
  menuButton();
  audioButton();
  infoButton();
}

function drawButton(btn: btnConf): void {
  const parent = document.getElementById(btn.parentDivId) as HTMLDivElement;
  if (parent) {
    const clicker = document.createElement('div');
    clicker.id = btn.buttonId;
    for (const className of btn.buttonClass) {
      clicker.classList.add(className);
    }
    clicker.setAttribute('data-tooltip', btn.toolTip);
    parent.appendChild(clicker);

    clicker.innerHTML = btn.svgXML;
  }
}

/**
 * Play, pause will use the same div.
 * Cange: element.remove(), then playButton() or pauseButton()
 * parentDivId: 'PlayButton', buttonClass: 'icon-button-large',
 */
export function playButton(): void {
  drawButton({
    buttonClass: ['icon-button-large'],
    parentDivId: 'PlayButton',
    buttonId: 'PlayButton-icon',
    svgXML: buttonXML.playBtn,
    toolTip: 'Play',
  });
}

/**
 * Play, pause will use the same div.
 * Cange: element.remove(), then playButton() or pauseButton()
 * parentDivId: 'PlayButton', buttonClass: 'icon-button-large',
 */
export function pauseButton(): void {
  drawButton({
    buttonClass: ['icon-button-large'],
    parentDivId: 'PlayButton',
    buttonId: 'PauseButton-icon',
    svgXML: buttonXML.pauseBtn,
    toolTip: 'Pause',
  });
}

function skipButton(): void {
  drawButton({
    buttonClass: ['icon-button'],
    parentDivId: 'SkipForwardButton',
    buttonId: 'SkipForwardButton-icon',
    svgXML: buttonXML.testBtn,
    toolTip: 'Skip Next',
  });
}

/*
function toTopButton(): void {
  drawButton({
    buttonClass: ['icon-button'],
    parentDivId: 'ToTopButton',
    buttonId: 'ToTopButton-icon',
    svgXML: buttonXML.toTopBtn,
    toolTip: 'Jump to playlist top',
  });
}
*/

function addButton(): void {
  drawButton({
    buttonClass: ['icon-button'],
    parentDivId: 'AddButton',
    buttonId: 'AddButton-icon',
    svgXML: buttonXML.addBtn,
    toolTip: 'New Playlist',
  });
}

function menuButton(): void {
  drawButton({
    buttonClass: ['icon-button'],
    parentDivId: 'MenuButton',
    buttonId: 'MenuButton-icon',
    svgXML: buttonXML.menuBtn,
    toolTip: 'Playlists',
  });
}

function audioButton(): void {
  drawButton({
    buttonClass: ['icon-button'],
    parentDivId: 'AudioButton',
    buttonId: 'AudioButton-icon',
    svgXML: buttonXML.audioBtn,
    toolTip: 'Audio Menu',
  });
}

function infoButton(): void {
  drawButton({
    buttonClass: ['icon-button'],
    parentDivId: 'InfoButton',
    buttonId: 'InfoButton-icon',
    svgXML: buttonXML.infoBtn,
    toolTip: 'App Info',
  });
}
