import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 3H3C1.9 3 1 3.9 1 5V17C1 18.1 1.9 19 3 19H8V20C8 20.55 8.45 21 9 21H15C15.55 21 16 20.55 16 20V19H21C22.1 19 23 18.1 23 17V5C23 3.89 22.1 3 21 3ZM20 17H4C3.45 17 3 16.55 3 16V6C3 5.45 3.45 5 4 5H20C20.55 5 21 5.45 21 6V16C21 16.55 20.55 17 20 17ZM15 12C15.55 12 16 11.55 16 11C16 10.45 15.55 10 15 10H9C8.45 10 8 10.45 8 11C8 11.55 8.45 12 9 12H15Z" fill="currentColor"/></svg>';

const RuxIconRemoveFromQueue = class {
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

export { RuxIconRemoveFromQueue as rux_icon_remove_from_queue };
