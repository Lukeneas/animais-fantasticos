import outsideClick from './outsideclick.js';

export default class DropdownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    if (events === undefined) this.events = ['touchstart', 'click'];
    else this.events = events;

    this.activeClass = 'active';
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  addDropdownEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => menu.addEventListener(userEvent, this.handleClick));
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownEvent();
    }
    return this;
  }
}
