'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.09 2.91C10.08 0.9 7.07 0.49 4.65 1.67L8.28 5.3C8.67 5.69 8.67 6.32 8.28 6.71L6.69 8.3C6.3 8.7 5.67 8.7 5.28 8.3L1.65 4.67C0.480003 7.1 0.890003 10.09 2.9 12.1C4.76 13.96 7.48 14.45 9.79 13.58L17.75 21.54C18.78 22.57 20.44 22.57 21.46 21.54C22.49 20.51 22.49 18.85 21.46 17.83L13.54 9.9C14.46 7.56 13.98 4.8 12.09 2.91Z" fill="currentColor"/></svg>';

const RuxIconBuild = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    return index.h("div", { style: style, innerHTML: svgIcon });
  }
};

exports.rux_icon_build = RuxIconBuild;
