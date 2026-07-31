import './menuPlaylistAdd.css';
import { toggleBottomSheets } from '../../../app__bottom-sheet/app__bottomSheet';

export function menuPlaylistAdd(): void {
  const addBtn = document.getElementById('AddButton') as HTMLDivElement;
  if (addBtn) {
    addBtn.addEventListener('click', () => {
      showMenu();
      toggleBottomSheets();
    });
  }
}

function showMenu(): void {
  const anchor = document.getElementById('sheets-anchor');
  if (anchor) {
    const container = document.createElement('div') as HTMLDivElement;
    const heading = document.createElement('h4');
    heading.innerText = 'New';
    container.appendChild(heading);

    anchor.appendChild(container);
  }
}
