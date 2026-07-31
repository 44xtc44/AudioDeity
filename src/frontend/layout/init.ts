import { appContainer } from './gridLayout';
import { appHeader } from './app__header/appHeader';
import { appPlaylist } from './app__playlist/appPlaylist';
import { appButtons } from './app__controls/appButtons';
import { bottomSheet } from './app__bottom-sheet/app__bottomSheet';

export async function initApp(): Promise<void> {
  const isReady: boolean = await appContainer();
  if (!isReady) {
    throw new Error('initApp failed.');
  }

  appHeader();
  appPlaylist();
  appButtons();
  bottomSheet();
}
