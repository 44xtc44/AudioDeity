import './drawTitleButton.css';
import { buttonXML } from '../buttonSVGs';

interface btnConf {
  buttonClass: string;
  parentDivId: string;
  buttonId: string;
  svgXML: string;
}

/**
 * On button change (on/off icon) is no need to
 * remove something. We write to '.innerHtml'.
 */

export function initTitleBarBtns(): void {
  hashTagButton();
  // editPlaylistButton();
  // shuffleOFFButton();
  // repeatOFFButton();
  listDensityOFFButton();
}

function drawButton(btn: btnConf): void {
  const parent = document.getElementById(btn.parentDivId) as HTMLDivElement;
  if (parent) {
    const clicker = document.createElement('div');
    clicker.id = btn.buttonId;
    clicker.classList.add(btn.buttonClass);
    parent.appendChild(clicker);

    clicker.innerHTML = btn.svgXML;
  }
}

export function hashTagButton(): void {
  drawButton({
    buttonClass: 'no-class-yet', // no hover event
    parentDivId: 'HashTagBtn',
    buttonId: 'HashTagBtn-icon',
    svgXML: buttonXML.hashTagBtn,
  });
}

export function editPlaylistButton(): void {
  drawButton({
    buttonClass: 'icon-button',
    parentDivId: 'EditPlaylistBtn',
    buttonId: 'EditPlaylistBtn-icon',
    svgXML: buttonXML.editPlaylistBtn,
  });
}

export function shuffleOFFButton(): void {
  drawButton({
    buttonClass: 'icon-button',
    parentDivId: 'ShuffleBtn',
    buttonId: 'ShuffleBtn-icon',
    svgXML: buttonXML.shuffleOFFBtn,
  });
}

export function shuffleONButton(): void {
  drawButton({
    buttonClass: 'icon-button',
    parentDivId: 'ShuffleBtn',
    buttonId: 'ShuffleBtn-icon',
    svgXML: buttonXML.shuffleONBtn,
  });
}
export function repeatOFFButton(): void {
  drawButton({
    buttonClass: 'icon-button',
    parentDivId: 'RepeatBtn',
    buttonId: 'RepeatBtn-icon',
    svgXML: buttonXML.repeatOFFBtn,
  });
}

export function repeatONButton(): void {
  drawButton({
    buttonClass: 'icon-button',
    parentDivId: 'RepeatBtn',
    buttonId: 'RepeatBtn-icon',
    svgXML: buttonXML.repeatONBtn,
  });
}

export function listDensityOFFButton(): void {
  drawButton({
    buttonClass: 'icon-button',
    parentDivId: 'ListDensityBtn',
    buttonId: 'ListDensityBtn-icon',
    svgXML: buttonXML.listDensityOFFBtn,
  });
}

export function listDensityONButton(): void {
  drawButton({
    buttonClass: 'icon-button',
    parentDivId: 'ListDensityBtn',
    buttonId: 'ListDensityBtn-icon',
    svgXML: buttonXML.listDensityONBtn,
  });
}
