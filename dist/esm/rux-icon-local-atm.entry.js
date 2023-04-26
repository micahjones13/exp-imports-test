import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 4H4C2.89 4 2.01 4.89 2.01 6L2 18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4ZM20 17C20 17.55 19.55 18 19 18H5C4.45 18 4 17.55 4 17V7C4 6.45 4.45 6 5 6H19C19.55 6 20 6.45 20 7V17ZM15 9C15 9.55 14.55 10 14 10H11V11H14C14.55 11 15 11.45 15 12V15C15 15.55 14.55 16 14 16H13C13 16.55 12.55 17 12 17C11.45 17 11 16.55 11 16H10C9.45 16 9 15.55 9 15C9 14.45 9.45 14 10 14H13V13H10C9.45 13 9 12.55 9 12V9C9 8.45 9.45 8 10 8H11V7.99C11 7.44 11.45 6.99 12 6.99C12.55 6.99 13 7.44 13 7.99V8H14C14.55 8 15 8.45 15 9Z" fill="currentColor"/></svg>';

const RuxIconLocalAtm = class {
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

export { RuxIconLocalAtm as rux_icon_local_atm };
