'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.17001 3.9899L4.10001 6.5499C3.68001 6.8999 3.05001 6.8499 2.70001 6.4199C2.34001 5.9999 2.40001 5.3699 2.82001 5.0099L5.90001 2.4499C6.32001 2.0999 6.95001 2.1499 7.30001 2.5799C7.66001 2.9999 7.60001 3.6299 7.17001 3.9899ZM21.18 5.0099L18.1 2.4499C17.68 2.0999 17.05 2.1499 16.69 2.5799C16.34 2.9999 16.4 3.6299 16.82 3.9899L19.89 6.5499C20.31 6.8999 20.94 6.8499 21.3 6.4199C21.66 5.9999 21.6 5.3699 21.18 5.0099ZM15 11.9999H13V9.9999C13 9.4499 12.55 8.9999 12 8.9999C11.45 8.9999 11 9.4499 11 9.9999V11.9999H9.00001C8.45001 11.9999 8.00001 12.4499 8.00001 12.9999C8.00001 13.5499 8.45001 13.9999 9.00001 13.9999H11V15.9999C11 16.5499 11.45 16.9999 12 16.9999C12.55 16.9999 13 16.5499 13 15.9999V13.9999H15C15.55 13.9999 16 13.5499 16 12.9999C16 12.4499 15.55 11.9999 15 11.9999ZM12 3.9999C7.03001 3.9999 3.00001 8.0299 3.00001 12.9999C3.00001 17.9699 7.03001 21.9999 12 21.9999C16.97 21.9999 21 17.9699 21 12.9999C21 8.0299 16.97 3.9999 12 3.9999ZM5.00001 12.9999C5.00001 16.8599 8.14001 19.9999 12 19.9999C15.86 19.9999 19 16.8599 19 12.9999C19 9.1399 15.86 5.9999 12 5.9999C8.14001 5.9999 5.00001 9.1399 5.00001 12.9999Z" fill="currentColor"/></svg>';

const RuxIconAddAlarm = class {
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

exports.rux_icon_add_alarm = RuxIconAddAlarm;
