import './menuPlaylistShow.css';
import { toggleBottomSheets } from '../../../app__bottom-sheet/app__bottomSheet';

export function menuPlaylistShow(): void {
  const addBtn = document.getElementById('MenuButton') as HTMLDivElement;
  if (addBtn) {
    addBtn.addEventListener('click', () => {
      showMenu();
      toggleBottomSheets();
    });
  }
}

function showMenu(): void {
  const anchor = document.getElementById('sheets-anchor');
  console.log('-> menuPlaylistShow', anchor);
  if (anchor) {
    const container = document.createElement('div') as HTMLDivElement;
    const heading = document.createElement('h4');
    heading.innerText = 'Playlists';
    container.appendChild(heading);

    anchor.appendChild(container);
  }
}
