import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 11V16L19.29 17.29C19.92 17.92 19.47 19 18.58 19H5.40999C4.51999 19 4.07999 17.92 4.70999 17.29L5.99999 16V11C5.99999 7.92 7.62999 5.36 10.5 4.68V4C10.5 3.17 11.17 2.5 12 2.5C12.83 2.5 13.5 3.17 13.5 4V4.68C16.36 5.36 18 7.93 18 11ZM14 20C14 21.1 13.1 22 12 22C10.89 22 9.99999 21.1 9.99999 20H14Z" fill="currentColor"/></svg>';

const RuxIconNotifications = class {
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

export { RuxIconNotifications as rux_icon_notifications };
