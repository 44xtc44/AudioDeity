const gridMember = ['app__header', 'app__controls', 'app__playlist'];

/**
 * app tag has class "gridparent" styled in styleGrid.css.
 * Grid member get there style also there.
 * @returns {Promise<boolean>}
 */
export async function appContainer(): Promise<boolean> {
  const app = document.getElementById('app') as HTMLDivElement;
  if (!app) return false;

  const appBox = document.createElement('div') as HTMLDivElement;
  appBox.id = 'app__container';
  appBox.classList.add('app__container');
  app.appendChild(appBox);

  for await (const name of gridMember) {
    const div = document.createElement('div') as HTMLDivElement;
    div.id = name;
    div.classList.add(name);
    appBox.appendChild(div);
  }
  return true;
}
