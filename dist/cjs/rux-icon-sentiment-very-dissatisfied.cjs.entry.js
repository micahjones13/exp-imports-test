'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47 6.47 2 11.99 2C17.52 2 22 6.47 22 12C22 17.53 17.51 22 11.99 22C6.47 22 2 17.53 2 12ZM8.35 11.47L8.88 10.94L9.41 11.47C9.7 11.76 10.18 11.76 10.47 11.47C10.76 11.18 10.76 10.7 10.47 10.41L9.94 9.88L10.47 9.35C10.76 9.06 10.76 8.58 10.47 8.29C10.18 8 9.7 8 9.41 8.29L8.88 8.82L8.35 8.29C8.06 8 7.58 8 7.29 8.29C7 8.58 7 9.06 7.29 9.35L7.82 9.88L7.29 10.41C7 10.7 7 11.18 7.29 11.47C7.58 11.76 8.06 11.76 8.35 11.47ZM12 13.5C9.97 13.5 8.2 14.61 7.25 16.25C7.06 16.58 7.31 17 7.69 17H16.31C16.69 17 16.94 16.58 16.75 16.25C15.8 14.61 14.03 13.5 12 13.5ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM15.12 8.82L15.65 8.29C15.94 8 16.42 8 16.71 8.29C17 8.58 17 9.06 16.71 9.35L16.18 9.88L16.71 10.41C17 10.7 17 11.18 16.71 11.47C16.42 11.76 15.94 11.76 15.65 11.47L15.12 10.94L14.59 11.47C14.3 11.76 13.82 11.76 13.53 11.47C13.24 11.18 13.24 10.7 13.53 10.41L14.06 9.88L13.53 9.35C13.24 9.06 13.24 8.58 13.53 8.29C13.82 8 14.3 8 14.59 8.29L15.12 8.82Z" fill="currentColor"/></svg>';

const RuxIconSentimentVeryDissatisfied = class {
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

exports.rux_icon_sentiment_very_dissatisfied = RuxIconSentimentVeryDissatisfied;
