'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 2C17.1046 2 18 2.89543 18 4V20C18 21.1046 17.1046 22 16 22H9C7.89543 22 7 21.1046 7 20V4C7 2.89543 7.89543 2 9 2H16ZM13.8115 5.69961C13.8115 5.00797 12.9835 4.75858 12.631 5.27555L12.5794 5.36359L9.0799 12.364C8.8597 12.8083 9.11904 13.3258 9.55954 13.3928L9.6566 13.4001H11.1901V18.3004C11.1901 18.992 12.0181 19.2414 12.3706 18.7245L12.4222 18.6364L15.9217 11.636C16.1419 11.1917 15.8711 10.6742 15.4398 10.6072L15.345 10.5999H13.8115V5.69961Z" fill="currentColor"/></svg>';

const RuxIconPropulsionPower = class {
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

exports.rux_icon_propulsion_power = RuxIconPropulsionPower;
