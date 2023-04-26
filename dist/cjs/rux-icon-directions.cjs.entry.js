'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.71 2.29006L21.71 11.2901C22.1 11.6901 22.1 12.3201 21.71 12.7001L12.71 21.7001C12.32 22.0901 11.69 22.0901 11.3 21.7001L2.30001 12.7001C1.91001 12.3101 1.91001 11.6801 2.30001 11.2901L11.3 2.29006C11.69 1.90006 12.32 1.90006 12.71 2.29006ZM14 12.0001V14.5001L17.15 11.3601C17.35 11.1601 17.35 10.8501 17.15 10.6501L14 7.50006V10.0001H9.00001C8.45001 10.0001 8.00001 10.4501 8.00001 11.0001V14.0001C8.00001 14.5501 8.45001 15.0001 9.00001 15.0001C9.55001 15.0001 10 14.5501 10 14.0001V12.0001H14Z" fill="currentColor"/></svg>';

const RuxIconDirections = class {
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

exports.rux_icon_directions = RuxIconDirections;
