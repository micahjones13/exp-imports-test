import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.89 7.7L12 14.59L6.41 9H10C10.55 9 11 8.55 11 8C11 7.45 10.55 7 10 7H4C3.45 7 3 7.45 3 8V14C3 14.55 3.45 15 4 15C4.55 15 5 14.55 5 14V10.41L11.29 16.7C11.68 17.09 12.31 17.09 12.7 16.7L20.29 9.11C20.68 8.72 20.68 8.09 20.29 7.7C19.91 7.32 19.27 7.32 18.89 7.7Z" fill="currentColor"/></svg>';

const RuxIconCallMissed = class {
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

export { RuxIconCallMissed as rux_icon_call_missed };
