import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.96 5.73C18.81 7.19 20 9.46 20 12C20 14.54 18.81 16.81 16.96 18.27L16.28 22.33C16.12 23.29 15.29 24 14.31 24H9.7C8.72 24 7.88 23.29 7.72 22.33L7.05 18.27C5.19 16.81 4 14.55 4 12C4 9.45 5.19 7.19 7.05 5.73L7.72 1.67C7.88 0.71 8.72 0 9.7 0H14.31C15.28 0 16.12 0.71 16.28 1.67L16.96 5.73ZM12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6Z" fill="currentColor"/></svg>';

const RuxIconWatch = class {
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

export { RuxIconWatch as rux_icon_watch };
