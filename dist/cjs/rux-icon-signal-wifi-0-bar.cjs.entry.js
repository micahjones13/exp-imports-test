'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.1675 4.8725C18.1525 3.915 15.355 3 12 3C8.63999 3 5.84249 3.915 3.82874 4.8725L3.37804 5.09382L2.95577 5.31426L2.56253 5.53145C2.49945 5.56725 2.4376 5.60281 2.37699 5.63808L2.02844 5.84592L1.71044 6.04454L1.42358 6.23156L1.16847 6.40461L0.846676 6.63275L0.359985 7L10.44 19.56L10.5483 19.6848C11.3708 20.5581 12.7948 20.5165 13.56 19.56L23.64 7L23.1527 6.63275L22.7067 6.31998L22.4353 6.13965L21.9694 5.84592L21.4347 5.53145L21.0411 5.31426L20.6185 5.09382L20.1675 4.8725ZM3.984 5.90868C6.39553 4.71396 9.08326 4 12 4C14.9122 4 17.5993 4.714 20.0127 5.90881L20.4672 6.14145C21.0608 6.45537 21.6046 6.78355 22.101 7.1176L22.206 7.189L12.7801 18.9341L12.6954 19.0276C12.2799 19.4327 11.5939 19.4016 11.2209 18.9353L1.79299 7.189L1.89819 7.11725L2.27887 6.86797C2.79839 6.53742 3.36593 6.21489 3.984 5.90868Z" fill="currentColor"/></svg>';

const RuxIconSignalWifi0Bar = class {
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

exports.rux_icon_signal_wifi_0_bar = RuxIconSignalWifi0Bar;
