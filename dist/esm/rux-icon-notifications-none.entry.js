import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.29 17.29L18 16V11C18 7.93 16.36 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.62999 5.36 5.99999 7.92 5.99999 11V16L4.70999 17.29C4.07999 17.92 4.51999 19 5.40999 19H18.58C19.48 19 19.92 17.92 19.29 17.29ZM7.99999 17V11C7.99999 8.52 9.50999 6.5 12 6.5C14.49 6.5 16 8.52 16 11V17H7.99999ZM14 20C14 21.1 13.1 22 12 22C10.89 22 9.99999 21.1 9.99999 20H14Z" fill="currentColor"/></svg>';

const RuxIconNotificationsNone = class {
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

export { RuxIconNotificationsNone as rux_icon_notifications_none };
