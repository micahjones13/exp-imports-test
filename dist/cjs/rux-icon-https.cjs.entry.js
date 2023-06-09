'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.6343 7.048H11.8033V5.32C11.8033 2.93536 9.94183 1 7.6482 1C5.35457 1 3.49307 2.93536 3.49307 5.32V7.048H2.66205C1.74792 7.048 1 7.8256 1 8.776V17.416C1 18.3664 1.74792 19.144 2.66205 19.144H12.6343C13.5485 19.144 14.2964 18.3664 14.2964 17.416V8.776C14.2964 7.8256 13.5485 7.048 12.6343 7.048ZM7.6482 14.824C6.73407 14.824 5.98614 14.0464 5.98614 13.096C5.98614 12.1456 6.73407 11.368 7.6482 11.368C8.56232 11.368 9.31025 12.1456 9.31025 13.096C9.31025 14.0464 8.56232 14.824 7.6482 14.824ZM5.15517 5.32V7.048H10.1413V5.32C10.1413 3.88576 9.02774 2.728 7.64824 2.728C6.26874 2.728 5.15517 3.88576 5.15517 5.32Z" fill="currentColor"/></svg>';

const RuxIconHttps = class {
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

exports.rux_icon_https = RuxIconHttps;
