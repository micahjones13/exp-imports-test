import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.99997 9.00002V7.41002C9.99997 6.52002 8.91997 6.07002 8.28997 6.70002L3.69997 11.29C3.30997 11.68 3.30997 12.31 3.69997 12.7L8.28997 17.29C8.91997 17.92 9.99997 17.48 9.99997 16.59V14.9C15 14.9 18.5 16.5 21 20C20 15 17 10 9.99997 9.00002Z" fill="currentColor"/></svg>';

const RuxIconReply = class {
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

export { RuxIconReply as rux_icon_reply };
