import { toggleBottomSheets } from '@bottomSheet/app__bottomSheet';

export function menuAudio(btnId: string): void {
  const addBtn = document.getElementById(btnId) as HTMLDivElement;
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
    const container = document.createElement('div');
    const heading = document.createElement('h4');
    heading.innerText = 'Audio';
    container.appendChild(heading);

    anchor.appendChild(container);
  }
}
