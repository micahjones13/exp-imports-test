import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19 1H9C7.9 1 7 1.9 7 3V5C7 5.55 7.45 6 8 6C8.55 6 9 5.55 9 5V4H19V20H9V19C9 18.45 8.55 18 8 18C7.45 18 7 18.45 7 19V21C7 22.1 7.9 23 9 23H19C20.1 23 21 22.1 21 21V3C21 1.9 20.1 1 19 1ZM10.8 11V9.5C10.8 8.1 9.4 7 8 7C6.6 7 5.2 8.1 5.2 9.5V11C4.6 11 4 11.6 4 12.2V15.7C4 16.4 4.6 17 5.2 17H10.7C11.4 17 12 16.4 12 15.8V12.3C12 11.6 11.4 11 10.8 11ZM6.5 11H9.5V9.5C9.5 8.7 8.8 8.2 8 8.2C7.2 8.2 6.5 8.7 6.5 9.5V11Z" fill="currentColor"/></svg>';

const RuxIconPhonelinkLock = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    return h("div", { style: style, innerHTML: svgIcon });
  }
};

export { RuxIconPhonelinkLock as rux_icon_phonelink_lock };