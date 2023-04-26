import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M22 18C21.45 18 21 17.55 21 17V7C21 6.45 21.45 6 22 6C22.55 6 23 6.45 23 7V17C23 17.55 22.55 18 22 18ZM16.17 11L13.29 8.12C12.9 7.73 12.91 7.09 13.29 6.7C13.68 6.31 14.31 6.31 14.7 6.7L19.29 11.29C19.68 11.68 19.68 12.31 19.29 12.7L14.7 17.29C14.31 17.68 13.68 17.68 13.29 17.29C12.9 16.9 12.9 16.27 13.29 15.88L16.17 13H3C2.45 13 2 12.55 2 12C2 11.45 2.45 11 3 11H16.17Z" fill="currentColor"/></svg>';

const RuxIconKeyboardTab = class {
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

export { RuxIconKeyboardTab as rux_icon_keyboard_tab };
