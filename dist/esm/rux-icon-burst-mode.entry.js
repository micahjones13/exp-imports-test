import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 6C3 5.45 2.55 5 2 5C1.45 5 1 5.45 1 6V18C1 18.55 1.45 19 2 19C2.55 19 3 18.55 3 18V6ZM7 6C7 5.45 6.55 5 6 5C5.45 5 5 5.45 5 6V18C5 18.55 5.45 19 6 19C6.55 19 7 18.55 7 18V6ZM22 5H10C9.45 5 9 5.45 9 6V18C9 18.55 9.45 19 10 19H22C22.55 19 23 18.55 23 18V6C23 5.45 22.55 5 22 5ZM13.11 14.33L11.64 16.19C11.38 16.52 11.62 17 12.03 16.99H19.99C20.41 16.99 20.64 16.52 20.39 16.19L18.18 13.29C17.98 13.03 17.59 13.03 17.39 13.29L15.29 16L13.89 14.32C13.68 14.08 13.31 14.08 13.11 14.33Z" fill="currentColor"/></svg>';

const RuxIconBurstMode = class {
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

export { RuxIconBurstMode as rux_icon_burst_mode };
