/**
 *
 * @example
 * const playButton: ButtonStyleConfig = {
 *   anchorId: "nav-bar",
 *   buttonId: "btn-play",
 *   buttonClass: ["btn", "btn-primary"],
 *   svgXML: "<svg>...</svg>",
 *   toolTip: "Play Animation",
 *   // Classic function definition
 *   runFun: function() {
 *     attachListener();
 *     stageCircling.update();
 *   }
 * };
 *
 * // Safe execution check before calling it
 * if (playButton.runFun) {
 *   playButton.runFun();
 * }
 */
export interface ButtonStyleConfig {
  /* parent div.id, can be menu or bottom-sheet */
  anchorId: string;
  /* Option: btn.id to attach to subMenuId instead of anchorId. */
  subMenuId?: string;
  /* class memberships */
  buttonClass: string[]; // Shorthand array syntax is preferred
  /* div.id */
  buttonId: string;
  /* SVG icon string HTML inject */
  svgXML: string;
  /* Button hover info */
  toolTip: string;
  /* Set event listener, ... */
  runFun?: () => void;
}

/**
 * Key: number, is to remove buttons during developement.
 *
 * JSON style dictionary for a button object using an
 * 'ButtonStyleConfig' interface.
 * @example
 * const buttons: BtnDataMap = {
 *  1: {
 *    anchorId: 'app__menu-bar',
 *    subMenuId: 'app__menu-play',
 *    buttonClass: ['app__btn', 'icon-button-large'],
 *    buttonId: 'app__btn--play',
 *    svgXML: buttonXML.playBtn,
 *    toolTip: 'Play',
 *  }
 *  2: {.....},
 *  3: {.....}
 * }
 * for (const btn of Object.values(buttons)) {
 *   console.log("-> btn id", btn.buttonId) // app__btn--play
 * }
 *
 */
export type BtnDataMap = Record<number, ButtonStyleConfig>;

/**
 * Attach a button to either menu or submenu.
 * The initial button object must have at least the id
 * of the menu bar. menu bars are created if not existing.
 * @example
 * const rawBtn: RawButton = {
 *   hasAnchor: false,
 *   menuBar: null,
 *   subMenuBars: {},
 * };
 * rawBtn.subMenuBars[subMenuName] = { div: subMenuBar };
 */
export interface RawButton {
  /* test if name of parent div */
  hasAnchor: boolean;
  /* reference to parent div */
  menuBar: HTMLDivElement | null;
  /* subMenuBars JSON style - {nameOfMenuDiv : { div: reference to div } } */
  subMenuBars: Record<string, { div: HTMLDivElement }>;
}
