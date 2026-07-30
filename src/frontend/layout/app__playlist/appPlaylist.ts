import './appPlaylist.css';

interface ListItem {
  id: number;
  title: string;
  body: string;
}

const fakeData = [
  { id: 0, title: 'null', body: 'null is not one' },
  { id: 1, title: 'one', body: 'null is not one' },
  { id: 2, title: 'two', body: 'null is not one' },
  { id: 3, title: 'three', body: 'null is not one' },
  { id: 4, title: 'four', body: 'null is not one' },
  { id: 5, title: 'five', body: 'null is not one' },
  { id: 6, title: 'six', body: 'null is not one' },
  { id: 7, title: 'seven', body: 'null is not one' },
  { id: 8, title: 'eight', body: 'null is not one' },
  { id: 9, title: 'nine', body: 'null is not one' },
  { id: 10, title: 'ten', body: 'null is not one' },
  { id: 11, title: 'eleven', body: 'null is not one' },
  { id: 12, title: 'dummy', body: 'filler' },
  { id: 13, title: 'dummy', body: 'filler' },
];

export function appPlaylist(): void {
  dynamicListLayout();
}

function dynamicListLayout(): void {
  const appPlaylist = document.getElementById('app__playlist');
  if (!appPlaylist) {
    throw new Error('app__playlist not found');
  }

  const gridCard = document.createElement('div') as HTMLDivElement;
  gridCard.id = 'app__playlist-card';
  gridCard.classList.add('app__playlist-card');
  appPlaylist.appendChild(gridCard);

  const listContainer = document.createElement('div') as HTMLDivElement;
  listContainer.id = 'app__playlist-list';
  listContainer.classList.add('app__playlist-list');
  gridCard.appendChild(listContainer);

  for (const item of fakeData) {
    // wrapper
    const wrapper = document.createElement('div') as HTMLDivElement;
    wrapper.classList.add('app__playlist-item-wrapper');
    wrapper.classList.add('font-small');
    listContainer.appendChild(wrapper);
    // hidden del button
    const swipeAction = document.createElement('div') as HTMLDivElement;
    swipeAction.classList.add('app__playlist-item__swipe-action');
    wrapper.appendChild(swipeAction);

    const listElement = createItemDOM(item);
    listElement.classList.add('app__playlist-item');
    wrapper.appendChild(listElement);
  }

  const listFooter = document.createElement('div') as HTMLDivElement;
  listFooter.id = 'app__playlist-footer';
  listFooter.classList.add('list-footer');
  listFooter.innerText = 'End of Playlist.';
  listContainer.appendChild(listFooter);
}

function createItemDOM(item: ListItem): HTMLDivElement {
  const div = document.createElement('div');
  div.className = 'app__playlist-item';
  div.innerHTML = `
    <h4>${item.id}. ${item.title}</h3>
    <span>${item.body.substring(0, 100)}...</span> 
  `;
  return div;
}
