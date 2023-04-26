import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 6C3 6.55 3.45 7 4 7H10C10.55 7 11 6.55 11 6C11 5.45 10.55 5 10 5H4C3.45 5 3 5.45 3 6ZM10 11H4C3.45 11 3 10.55 3 10C3 9.45 3.45 9 4 9H10C10.55 9 11 9.45 11 10C11 10.55 10.55 11 10 11ZM4 15H10C10.55 15 11 14.55 11 14C11 13.45 10.55 13 10 13H4C3.45 13 3 13.45 3 14C3 14.55 3.45 15 4 15ZM4 19H10C10.55 19 11 18.55 11 18C11 17.45 10.55 17 10 17H4C3.45 17 3 17.45 3 18C3 18.55 3.45 19 4 19ZM20 5H14C13.45 5 13 5.45 13 6V18C13 18.55 13.45 19 14 19H20C20.55 19 21 18.55 21 18V6C21 5.45 20.55 5 20 5Z" fill="currentColor"/></svg>';

const RuxIconVerticalSplit = class {
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

export { RuxIconVerticalSplit as rux_icon_vertical_split };
