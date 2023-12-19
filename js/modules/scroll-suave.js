export default class ScrollSuave {
  constructor(links, options) {
    this.linksInternos = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = { behavior: 'smooth', block: 'start' };
    } else {
      this.options = options;
    }
    this.scrollToSection = this.scrollToSection.bind;
  }

  scrollToSection(event) {
    console.log(this.options);
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView(this.options);
  }

  addLinkEvent() {
    this.linksInternos.forEach((link) => link.addEventListener('click', (Event) => {
      this.scrollToSection(Event);
    }));
  }

  init() {
    if (this.links) {
      this.addLinkEvent();
    }
    return this;
  }
}
