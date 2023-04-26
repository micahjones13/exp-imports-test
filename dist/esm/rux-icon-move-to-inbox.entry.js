import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19 3H4.99C3.88 3 3 3.9 3 5V19C3 20.1 3.88 21 4.99 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 15H15.87C15.4 15 15.02 15.34 14.89 15.8C14.54 17.07 13.37 18 12 18C10.63 18 9.46 17.07 9.11 15.8C8.98 15.34 8.6 15 8.13 15H4.99V6C4.99 5.45 5.44 5 5.99 5H18C18.55 5 19 5.45 19 6V15ZM14 10H16L12.36 13.65C12.16 13.85 11.85 13.85 11.65 13.65L8 10H10V7H14V10Z" fill="currentColor"/></svg>';

const RuxIconMoveToInbox = class {
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

export { RuxIconMoveToInbox as rux_icon_move_to_inbox };
