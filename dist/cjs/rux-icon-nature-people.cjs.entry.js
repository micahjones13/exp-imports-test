'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 16.1198C19.47 15.7098 22.17 12.7598 22.17 9.16979C22.17 5.25979 18.98 2.10979 15.06 2.16979C11.23 2.22979 8.07 5.53979 8.18 9.35979C8.27 12.7398 10.76 15.5198 14.01 16.0598V19.9998H6V16.9998H6.5C6.78 16.9998 7 16.7798 7 16.4998V12.9998C7 12.4498 6.55 11.9998 6 11.9998H3C2.45 11.9998 2 12.4498 2 12.9998V16.4998C2 16.7798 2.22 16.9998 2.5 16.9998H3V20.9998C3 21.5498 3.45 21.9998 4 21.9998H18C18.55 21.9998 19 21.5498 19 20.9998C19 20.4498 18.55 19.9998 18 19.9998H16V16.1198ZM3 9.49979C3 10.3282 3.67157 10.9998 4.5 10.9998C5.32843 10.9998 6 10.3282 6 9.49979C6 8.67136 5.32843 7.99979 4.5 7.99979C3.67157 7.99979 3 8.67136 3 9.49979Z" fill="currentColor"/></svg>';

const RuxIconNaturePeople = class {
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

exports.rux_icon_nature_people = RuxIconNaturePeople;
