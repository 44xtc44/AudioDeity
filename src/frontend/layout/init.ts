import { appContainer } from './app__container/app__container';
import { appHeader } from './app__container/app__header/app__header';
import { appPlaylist } from './app__container/app__playlist/app__playlist';
import { appButtons } from './app__container/app__controls/app__controls';
import { bottomSheet } from './app__container/app__bottom-sheet/app__bottomSheet';

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
