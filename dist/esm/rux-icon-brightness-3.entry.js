import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.87 10.37C18.12 5.61 13.87 2.02 9.05002 2C8.56002 2 8.08003 2.03 7.61003 2.1C7.11003 2.17 7.01002 2.83 7.47003 3.06C10.75 4.69 13 8.08 13 12C13 15.92 10.75 19.31 7.47003 20.95C7.02003 21.18 7.11003 21.84 7.61003 21.91C8.08003 21.97 8.56002 22 9.05002 22C13.87 21.98 18.12 18.39 18.87 13.63C18.96 13.08 18.98 12.54 18.98 12C18.98 11.46 18.96 10.92 18.87 10.37Z" fill="currentColor"/></svg>';

const RuxIconBrightness3 = class {
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

export { RuxIconBrightness3 as rux_icon_brightness_3 };
