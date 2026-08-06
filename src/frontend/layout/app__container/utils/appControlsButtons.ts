/**
 * @component AppControlsButtons
 *
 * @summary
 * Implements the menu bar buttons.
 * Interfaces and Types must be casted as 'type' else TypeScript errors.
 *
 * Be aware of cricular imports. All the time.
 * Don't whine, fight!
 */

import type { BtnDataMap, RawButton } from '../types/app__menu-bar_types.js';

/**
 * Helper to set id and class to the same name.
 * @param parentDiv HTMLDivElement
 * @param  childId div.id
 * @returns child div connected to partent
 */
function appendChild(
  parentDiv: HTMLDivElement,
  childId: string,
): HTMLDivElement | null {
  if (!childId) return null;

  const child = document.createElement('div');
  child.id = childId;
  child.classList.add(childId);
  parentDiv.appendChild(child);
  return child;
}

/**
 * Store a bunch of div references as value and div.id as key.
 * Some buttons need additional style grids (submenus) to group them by function.
 * @param rawBtn
 * @param subMenuName
 */
function addSubMenu(rawBtn: RawButton, subMenuName: string) {
  if (subMenuName) {
    const hasSubMenu: boolean = Object.keys(rawBtn.subMenuBars).includes(
      subMenuName,
    );
    if (!hasSubMenu) {
      const subMenuBar = document.createElement('div');
      subMenuBar.id = subMenuName;
      subMenuBar.classList.add(subMenuName);
      if (rawBtn.menuBar) {
        rawBtn.menuBar.appendChild(subMenuBar);
        rawBtn.subMenuBars[subMenuName] = { div: subMenuBar };
      }
    }
  }
}

/**
 * Create button container HTML components without attached function.
 * Can create submenus for grouping buttons, if btnJSON{foo:{subMenuId: 'app__menu-foo'}} is set.
 * @param mainBar - div
 * @param btnJSON - JSON dict with buttons and button props
 * @returns
 */
export function buttonToBar(
  mainBar: HTMLDivElement,
  btnJSON: BtnDataMap,
): void {
  if (!mainBar) return;
  const rawBtn: RawButton = {
    hasAnchor: false,
    menuBar: null,
    subMenuBars: {},
  };

  for (const btn of Object.values(btnJSON)) {
    // Runs one time. Attach our anchorId to Controls.
    if (!rawBtn.hasAnchor) {
      rawBtn.hasAnchor = true;
      const menuBar = appendChild(mainBar, btn.anchorId);
      if (menuBar) {
        rawBtn.menuBar = menuBar;
      }
    }
    if (btn.subMenuId) {
      addSubMenu(rawBtn, btn.subMenuId); // Create subMenuId under a menu bar.
    }

    // The div for the clicker.
    const button = document.createElement('div');
    button.id = btn.buttonId;
    for (const className of btn.buttonClass) {
      button.classList.add(className);
    }
    button.setAttribute('data-tooltip', btn.toolTip);
    button.innerHTML = btn.svgXML;

    if (btn.subMenuId) {
      if (Object.keys(rawBtn.subMenuBars).includes(btn.subMenuId)) {
        rawBtn.subMenuBars[btn.subMenuId].div.appendChild(button);
      }
    }
    // No sub menu.
    if (!btn.subMenuId && rawBtn.menuBar) {
      rawBtn.menuBar.appendChild(button);
    }
    // Run addEventListener, ....
    if (btn.runFun) {
      btn.runFun();
    }
  }
}
