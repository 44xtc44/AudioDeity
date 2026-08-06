import { toggleBottomSheets } from '@bottomSheet/app__bottomSheet';

const gridMember = ['RepoBtn', 'FooterBtn', 'LicenseBtn'];

export function appFooter(): void {
  footerGrid();
  footerLinks();
}

export function menuInfo(btnId: string): void {
  const btn = document.getElementById(btnId) as HTMLDivElement;
  if (btn) {
    btn.addEventListener('click', () => {
      showMenu();
      footerGrid();
      footerLinks();
      toggleBottomSheets();
    });
  }
}

function showMenu(): void {
  const anchor = document.getElementById('sheets-anchor');
  if (anchor) {
    const container = document.createElement('div') as HTMLDivElement;
    container.id = 'menu-app-info';
    container.classList.add('menu-app-info');

    const heading = document.createElement('h4');
    heading.innerText = 'App Info';
    container.appendChild(heading);

    anchor.appendChild(container);
  }
}

function footerGrid(): void {
  const box = document.getElementById('menu-app-info') as HTMLDivElement;
  if (box) {
    const gridParent = document.createElement('div');
    gridParent.id = 'Footer';
    box.appendChild(gridParent);

    for (const btnName of gridMember) {
      const btn = document.createElement('div') as HTMLDivElement;
      btn.id = btnName;
      gridParent.appendChild(btn);
    }
  }
}

function footerLinks(): void {
  const repo = document.getElementById('RepoBtn') as HTMLDivElement;
  const repoLlink = document.createElement('a');
  repo.appendChild(repoLlink);
  repoLlink.id = 'RepoLink';
  repoLlink.setAttribute('data-tooltip', 'RepoLink');
  repoLlink.classList.add('button-link-icon');
  repoLlink.classList.add('icon-button');
  repoLlink.type = 'text/javascript';
  repoLlink.innerText = 'GitHub Repository';
  repoLlink.addEventListener('click', () => {
    /* LINK TO GITHUB REPO */
  });

  const lic = document.getElementById('LicenseBtn') as HTMLDivElement;
  const licTxt = document.createElement('p');
  licTxt.innerText = 'Apache 2.0 license';
  lic.appendChild(licTxt);
}
