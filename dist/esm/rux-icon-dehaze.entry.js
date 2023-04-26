import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 8C2.45 8 2 7.55 2 7C2 6.45 2.45 6 3 6H21C21.55 6 22 6.45 22 7C22 7.55 21.55 8 21 8H3ZM2 12C2 12.55 2.45 13 3 13H21C21.55 13 22 12.55 22 12C22 11.45 21.55 11 21 11H3C2.45 11 2 11.45 2 12ZM2 17C2 17.55 2.45 18 3 18H21C21.55 18 22 17.55 22 17C22 16.45 21.55 16 21 16H3C2.45 16 2 16.45 2 17Z" fill="currentColor"/></svg>';

const RuxIconDehaze = class {
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

export { RuxIconDehaze as rux_icon_dehaze };
