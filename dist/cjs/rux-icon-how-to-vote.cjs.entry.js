'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.34 15.02C11.73 15.41 12.36 15.41 12.75 15.02L19.11 8.66004C19.5 8.27004 19.5 7.64004 19.11 7.25004L14.16 2.30004C13.78 1.90004 13.15 1.90004 12.76 2.29004L6.39 8.66004C6 9.05004 6 9.68004 6.39 10.07L11.34 15.02ZM13.46 4.41004L17 7.95004L12.05 12.9L8.51 9.36004L13.46 4.41004ZM18.29 13.29L20.41 15.41C20.79 15.79 21 16.3 21 16.83V20C21 21.11 20.1 22 19 22H5C3.9 22 3 21.1 3 20V16.83C3 16.3 3.21 15.79 3.58 15.41L5.7 13.29C5.89 13.11 6.14 13 6.41 13H6.83L8.83 15H6.78L5 17H19L17.23 15H15.32L17.32 13H17.59C17.85 13 18.11 13.11 18.29 13.29Z" fill="currentColor"/></svg>';

const RuxIconHowToVote = class {
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

exports.rux_icon_how_to_vote = RuxIconHowToVote;
