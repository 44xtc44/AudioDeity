import './menuAudio.css';
import { toggleBottomSheets } from '../../../app__bottom-sheet/app__bottomSheet';

export function menuAudio(): void {
  const addBtn = document.getElementById('AudioButton') as HTMLDivElement;
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
    heading.innerText = 'Audio';
    container.appendChild(heading);

    anchor.appendChild(container);
  }
}
