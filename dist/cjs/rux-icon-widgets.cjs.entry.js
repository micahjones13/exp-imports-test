'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.7 6.63992L15.95 2.39992C16.34 2.00992 16.98 2.00992 17.37 2.39992L21.61 6.63992C22 7.02992 22 7.65992 21.61 8.04992L17.36 12.2999C16.97 12.6899 16.34 12.6899 15.95 12.2999L11.7 8.04992C11.31 7.65992 11.31 7.02992 11.7 6.63992ZM3 3.99992V9.99992C3 10.5499 3.45 10.9999 4 10.9999H10C10.55 10.9999 11 10.5499 11 9.99992V3.99992C11 3.44992 10.55 2.99992 10 2.99992H4C3.45 2.99992 3 3.44992 3 3.99992ZM10 20.9999H4C3.45 20.9999 3 20.5499 3 19.9999V13.9999C3 13.4499 3.45 12.9999 4 12.9999H10C10.55 12.9999 11 13.4499 11 13.9999V19.9999C11 20.5499 10.55 20.9999 10 20.9999ZM13 19.9999V13.9999C13 13.4499 13.45 12.9999 14 12.9999H20C20.55 12.9999 21 13.4499 21 13.9999V19.9999C21 20.5499 20.55 20.9999 20 20.9999H14C13.45 20.9999 13 20.5499 13 19.9999Z" fill="currentColor"/></svg>';

const RuxIconWidgets = class {
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

exports.rux_icon_widgets = RuxIconWidgets;
