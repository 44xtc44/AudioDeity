import { toggleBottomSheets } from '@bottomSheet/app__bottomSheet';

export function menuPlaylist(btnId: string): void {
  const addBtn = document.getElementById(btnId) as HTMLDivElement;
  if (addBtn) {
    addBtn.addEventListener('click', () => {
      showPlaylist();
      toggleBottomSheets();
    });
  }
}

function showPlaylist(): void {
  const anchor = document.getElementById('sheets-anchor');
  console.log('-> menuPlaylistShow', anchor);
  if (anchor) {
    const container = document.createElement('div');
    const heading = document.createElement('h4');
    heading.innerText = 'Playlists';
    container.appendChild(heading);

    anchor.appendChild(container);
  }
}
