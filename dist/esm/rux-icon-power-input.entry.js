import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 11C3.45 11 3 10.55 3 10C3 9.45 3.45 9 4 9H21C21.55 9 22 9.45 22 10C22 10.55 21.55 11 21 11H4ZM7 15H4C3.45 15 3 14.55 3 14C3 13.45 3.45 13 4 13H7C7.55 13 8 13.45 8 14C8 14.55 7.55 15 7 15ZM11 15H14C14.55 15 15 14.55 15 14C15 13.45 14.55 13 14 13H11C10.45 13 10 13.45 10 14C10 14.55 10.45 15 11 15ZM21 15H18C17.45 15 17 14.55 17 14C17 13.45 17.45 13 18 13H21C21.55 13 22 13.45 22 14C22 14.55 21.55 15 21 15Z" fill="currentColor"/></svg>';

const RuxIconPowerInput = class {
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

export { RuxIconPowerInput as rux_icon_power_input };
