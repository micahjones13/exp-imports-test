import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 4H3C1.9 4 1 4.9 1 6V19C1 20.1 1.9 21 3 21H21C22.1 21 23 20.1 23 19V6C23 4.9 22.1 4 21 4ZM21 18C21 18.55 20.55 19 20 19H12V6H20C20.55 6 21 6.45 21 7V18ZM13.75 9.5H19.25C19.66 9.5 20 9.84 20 10.25C20 10.66 19.66 11 19.25 11H13.75C13.34 11 13 10.66 13 10.25C13 9.84 13.34 9.5 13.75 9.5ZM19.25 12H13.75C13.34 12 13 12.34 13 12.75C13 13.16 13.34 13.5 13.75 13.5H19.25C19.66 13.5 20 13.16 20 12.75C20 12.34 19.66 12 19.25 12ZM13.75 14.5H19.25C19.66 14.5 20 14.84 20 15.25C20 15.66 19.66 16 19.25 16H13.75C13.34 16 13 15.66 13 15.25C13 14.84 13.34 14.5 13.75 14.5Z" fill="currentColor"/></svg>';

const RuxIconChromeReaderMode = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em')
     */
    this.size = 'auto';
  }
  get iconSize() {
    const sizes = {
      'extra-small': '1rem',
      small: '2rem',
      normal: '3rem',
      large: '4rem',
    };
    if (sizes[this.size]) {
      return sizes[this.size];
    }
    else {
      return this.size;
    }
  }
  render() {
    const style = {
      height: this.iconSize,
      width: this.iconSize,
    };
    return h("div", { style: style, innerHTML: svgIcon });
  }
};

export { RuxIconChromeReaderMode as rux_icon_chrome_reader_mode };
