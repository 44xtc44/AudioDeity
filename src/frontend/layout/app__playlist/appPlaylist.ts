import './appPlaylist.css';
/* import './playlistBarDensity.css' */
interface ListItem {
  id: number;
  title: string;
  body: string;
}

const fakeData = [
  { id: 0, title: 'null', body: 'null is not one' },
  {
    id: 1,
    title: 'one',
    body: 'Talk to the hand, "cause the face ain\'t listening."',
  },
  {
    id: 2,
    title: 'two',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ### should not show "hidden" ###### HIDDEN ######.',
  },
  {
    id: 3,
    title: 'three',
    body: 'I threw a boomerang a few years ago. I now live in constant fear.',
  },
  {
    id: 4,
    title: 'four',
    body: "Cats don't meow at each other. They only meow at humans to test if their voice-command software is still working. Should be readable on small mobile.",
  },
  {
    id: 5,
    title: 'five',
    body: 'Wer im Steinhaus sitzt, sollte nicht mit Gläsern werfen.',
  },
  {
    id: 6,
    title: 'six',
    body: 'The early bird gets the worm, but the second mouse gets the cheese.',
  },
  {
    id: 7,
    title: 'seven',
    body: 'Kräht der Hahn auf dem Mist, ändert sich das Wetter oder es bleibt, wie es ist.',
  },
  {
    id: 8,
    title: 'eight',
    body: 'Regnet es am ersten Mai, ist der April vorbei.',
  },
  {
    id: 9,
    title: 'nine',
    body: "A gscheiter Kaffee muaß schwarz wia die Seel vom Teufel und süß wia d'Sünd sein – oder einfach a Bier.",
  },
  {
    id: 10,
    title: 'ten',
    body: 'My grandfather has the heart of a lion... and a lifetime ban from the local zoo.',
  },
  {
    id: 11,
    title: 'eleven',
    body: 'I love to stand in crowded elevators and say, "I suppose you\'re all wondering why I\'ve gathered you here today"',
  },
  {
    id: 12,
    title: 'twelve',
    body: 'I told my doctor that I broke my arm in two places. He told me to stop going to those places.',
  },
  {
    id: 13,
    title: 'thirteen',
    body: 'Star: &#9733; (★) or &#10033; (★) Check: &#10003; (✓) or &#10004; (✓) Arrow: &#8594; (→) or &#8592; (←) String/Link: &#10134; (⟪) or &#10135; (⟫)',
  },
];

export function appPlaylist(): void {
  dynamicListLayout();
}

function dynamicListLayout(): void {
  const appPlaylist = document.getElementById('app__playlist');
  if (!appPlaylist) {
    throw new Error('app__playlist not found');
  }

  const gridCard = document.createElement('div');
  gridCard.id = 'app__playlist-card';
  gridCard.classList.add('app__playlist-card');
  appPlaylist.appendChild(gridCard);

  const listContainer = document.createElement('div');
  listContainer.id = 'app__playlist-list';
  listContainer.classList.add('app__playlist-list');
  gridCard.appendChild(listContainer);

  for (const item of fakeData) {
    // wrapper
    const wrapper = document.createElement('div');
    wrapper.classList.add('app__playlist-item-wrapper');
    wrapper.classList.add('font-small');
    listContainer.appendChild(wrapper);
    // hidden del button
    const swipeAction = document.createElement('div');
    swipeAction.classList.add('app__playlist-item__swipe-action');
    wrapper.appendChild(swipeAction);

    const listElement = createItemDOM(item);
    listElement.classList.add('app__playlist-item');
    swipeAction.appendChild(listElement);
  }

  const listFooter = document.createElement('div');
  listFooter.id = 'app__playlist-footer';
  listFooter.classList.add('list-footer');
  listFooter.innerText = 'End of the tracklist, folks.';
  listContainer.appendChild(listFooter);
}

function createItemDOM(item: ListItem): HTMLDivElement {
  const div = document.createElement('div');
  div.className = 'app__playlist-item';
  div.innerHTML = `
    <h4>${item.id}. ${item.title}</h3>
    <span>${item.body.substring(0, 150)}</span> 
  `;
  return div;
}
