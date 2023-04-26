'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17 4V11C17 12.1 16.1 13 15 13H6L2 17V4C2 2.9 2.9 2 4 2H15C16.1 2 17 2.9 17 4ZM19 6H20C21.1 6 22 6.9 22 8V22L18 18H8C6.9 18 6 17.1 6 16V15H18C18.55 15 19 14.55 19 14V6Z" fill="currentColor"/></svg>';

const RuxIconQuestionAnswer = class {
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

exports.rux_icon_question_answer = RuxIconQuestionAnswer;
