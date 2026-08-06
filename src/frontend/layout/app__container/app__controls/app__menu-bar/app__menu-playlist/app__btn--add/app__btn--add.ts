import { toggleBottomSheets } from '@bottomSheet/app__bottomSheet';

export function menuAddPlaylist(btnId: string): void {
  const addBtn = document.getElementById(btnId) as HTMLDivElement;
  if (addBtn) {
    addBtn.addEventListener('click', () => {
      maintainPlaylist();
      toggleBottomSheets();
    });
  }
}

function maintainPlaylist(): void {
  const anchor = document.getElementById('sheets-anchor');
  if (anchor) {
    const container = document.createElement('div');
    const heading = document.createElement('h4');
    heading.innerText = 'New';
    container.appendChild(heading);

    anchor.appendChild(container);
  }
}
