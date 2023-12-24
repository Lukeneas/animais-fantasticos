import outsideClick from './outsideclick.js';

export default class MenuMobile {
  constructor(menuButton, menuList, events) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    if (events === undefined) this.events = ['touchstart', 'click'];
    else this.events = events;
    this.openMenuClass = 'active';
    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.menuList.classList.add(this.openMenuClass);
    this.menuButton.classList.add(this.openMenuClass);
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.openMenuClass);
      this.menuButton.classList.remove(this.openMenuClass);
    });
  }

  addMenuMobileEvents() {
    this.events.forEach((userEvent) => this.menuButton.addEventListener(userEvent, this.openMenu));
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}
