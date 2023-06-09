import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 3C13 2.45 12.55 2 12 2C11.45 2 11 2.45 11 3V4C11 4.55 11.45 5 12 5C12.55 5 13 4.55 13 4V3ZM8.99998 17L6.28998 14.29C6.10998 14.11 5.99998 13.85 5.99998 13.59V10C5.99998 9.45 6.44998 9 6.99998 9H17C17.55 9 18 9.45 18 10V13.58C18 13.85 17.9 14.1 17.71 14.29L15 17V21C15 21.55 14.55 22 14 22H9.99998C9.44998 22 8.99998 21.55 8.99998 21V17ZM4.20998 5.17C4.59998 4.78 5.22998 4.78 5.62998 5.17L6.33998 5.88C6.72998 6.27 6.72998 6.9 6.33998 7.29C5.94998 7.68 5.31998 7.68 4.92998 7.29L4.20998 6.58C3.81998 6.19 3.81998 5.56 4.20998 5.17ZM18.38 5.17L17.67 5.88C17.28 6.27 17.28 6.9 17.67 7.29C18.06 7.68 18.69 7.68 19.08 7.29L19.79 6.58C20.18 6.19 20.18 5.56 19.79 5.17C19.4 4.78 18.77 4.78 18.38 5.17Z" fill="currentColor"/></svg>';

const RuxIconHighlight = class {
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

export { RuxIconHighlight as rux_icon_highlight };
