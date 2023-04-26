'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.0456 4.76902V12.4353H19.0456V4.76902H17.0456ZM13.8367 12.4353V6.4356L15.8367 6.4356V12.4353L13.8367 12.4353ZM10.6277 8.10219V12.4353H12.6277V8.10219H10.6277ZM7.41872 12.4353V9.60212H9.41872V12.4353H7.41872ZM4.20974 12.4243L4.20974 11.4243H6.20974V12.4243H4.20974ZM10.6104 17.868C11.4387 17.868 12.1102 17.1964 12.1102 16.3681C12.1102 15.5397 11.4387 14.8682 10.6104 14.8682C9.78199 14.8682 9.11047 15.5397 9.11047 16.3681C9.11047 17.1964 9.78199 17.868 10.6104 17.868ZM12.9824 17.1595C12.6513 18.1523 11.7144 18.868 10.6104 18.868C9.5063 18.868 8.56942 18.1523 8.23834 17.1595H3.26465V15.6595H8.21232C8.51783 14.624 9.47583 13.8682 10.6104 13.8682C11.7449 13.8682 12.7029 14.624 13.0084 15.6595H20.9458V17.1595H12.9824ZM10.6104 17.0347C10.9785 17.0347 11.277 16.7362 11.277 16.3681C11.277 15.9999 10.9785 15.7014 10.6104 15.7014C10.2422 15.7014 9.94373 15.9999 9.94373 16.3681C9.94373 16.7362 10.2422 17.0347 10.6104 17.0347Z" fill="currentColor"/></svg>';

const RuxIconSetPower = class {
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

exports.rux_icon_set_power = RuxIconSetPower;
