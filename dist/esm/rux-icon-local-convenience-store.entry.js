import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 7H19V5C19 4.45 18.55 4 18 4H6C5.45 4 5 4.45 5 5V7H3C2.45 7 2 7.45 2 8V19C2 19.55 2.45 20 3 20H9C9.55 20 10 19.55 10 19V16H14V19C14 19.55 14.45 20 15 20H21C21.55 20 22 19.55 22 19V8C22 7.45 21.55 7 21 7ZM11 9C11 9.55 10.55 10 10 10H9V11H10.5C10.78 11 11 11.22 11 11.5C11 11.78 10.78 12 10.5 12H9C8.45 12 8 11.55 8 11V10C8 9.45 8.45 9 9 9H10V8H8.5C8.22 8 8 7.78 8 7.5C8 7.22 8.22 7 8.5 7H10C10.55 7 11 7.45 11 8V9ZM15.5 12C15.78 12 16 11.78 16 11.5V7.5C16 7.22 15.78 7 15.5 7C15.22 7 15 7.22 15 7.5V9H14V7.5C14 7.22 13.78 7 13.5 7C13.22 7 13 7.22 13 7.5V9C13 9.55 13.45 10 14 10H15V11.5C15 11.78 15.22 12 15.5 12Z" fill="currentColor"/></svg>';

const RuxIconLocalConvenienceStore = class {
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

export { RuxIconLocalConvenienceStore as rux_icon_local_convenience_store };
