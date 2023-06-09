import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 22C13 22.55 12.55 23 12 23C11.45 23 11 22.55 11 22V2C11 1.45 11.45 1 12 1C12.55 1 13 1.45 13 2V22ZM3 19V5C3 3.9 3.9 3 5 3H8C8.55 3 9 3.45 9 4C9 4.55 8.55 5 8 5H6C5.45 5 5 5.45 5 6V18C5 18.55 5.45 19 6 19H8C8.55 19 9 19.45 9 20C9 20.55 8.55 21 8 21H5C3.9 21 3 20.1 3 19ZM19 9H21V7H19V9ZM15 21H17V19H15V21ZM19 3V5H21C21 3.9 20.1 3 19 3ZM19 17H21V15H19V17ZM17 5H15V3H17V5ZM19 13H21V11H19V13ZM21 19C21 20.1 20.1 21 19 21V19H21Z" fill="currentColor"/></svg>';

const RuxIconFlip = class {
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

export { RuxIconFlip as rux_icon_flip };
