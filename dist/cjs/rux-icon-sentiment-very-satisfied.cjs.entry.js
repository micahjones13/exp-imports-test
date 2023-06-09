'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.99 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 11.99 22C17.51 22 22 17.53 22 12C22 6.47 17.52 2 11.99 2ZM8.88 9.94L9.41 10.47C9.7 10.76 10.18 10.76 10.47 10.47C10.76 10.18 10.76 9.7 10.47 9.41L9.59 8.53C9.2 8.14 8.57 8.14 8.18 8.53L7.29 9.41C7 9.7 7 10.18 7.29 10.47C7.58 10.76 8.06 10.76 8.35 10.47L8.88 9.94ZM12 17.5C14.03 17.5 15.8 16.39 16.75 14.75C16.94 14.42 16.7 14 16.31 14H7.69C7.31 14 7.06 14.42 7.25 14.75C8.2 16.39 9.97 17.5 12 17.5ZM14.59 10.47C14.3 10.76 13.82 10.76 13.53 10.47C13.24 10.18 13.24 9.7 13.54 9.41L14.42 8.53C14.81 8.14 15.44 8.14 15.83 8.53L16.71 9.41C17 9.7 17 10.18 16.71 10.47C16.42 10.76 15.94 10.76 15.65 10.47L15.12 9.94L14.59 10.47ZM4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12Z" fill="currentColor"/></svg>';

const RuxIconSentimentVerySatisfied = class {
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

exports.rux_icon_sentiment_very_satisfied = RuxIconSentimentVerySatisfied;
