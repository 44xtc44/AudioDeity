/**
 * @component App__container
 * @requires ./app__container.css
 *
 * @layout
 * Implements the app shell with grid layout.
 * We use dynamic DOM updates. .innerHtml sparingly.
 */

import './app__container.css';

const gridMember = ['app__header', 'app__controls', 'app__playlist'];

/**

 * @returns success or failure breaks the app
 */
export async function appContainer(): Promise<boolean> {
  const app = document.getElementById('app') as HTMLDivElement;
  if (!app) return false;

  const appBox = document.createElement('div');
  appBox.id = 'app__container';
  appBox.classList.add('app__container');
  app.appendChild(appBox);

  for (const name of gridMember) {
    const div = document.createElement('div');
    div.id = name;
    div.classList.add(name);
    appBox.appendChild(div);
  }
  return true;
}
