import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.310017 2.00002C-0.0799829 2.39002 -0.0799829 3.02002 0.310017 3.41002L1.00002 4.09002V16C1.00002 17.1 1.90002 18 3.00002 18H10V20H9.00002C8.45002 20 8.00002 20.45 8.00002 21C8.00002 21.55 8.45002 22 9.00002 22H15C15.55 22 16 21.55 16 21C16 20.45 15.55 20 15 20H14V18H14.9L20.19 23.29C20.58 23.68 21.21 23.68 21.6 23.29C21.99 22.9 21.99 22.27 21.6 21.88L1.72002 2.00002C1.33002 1.61002 0.700017 1.61002 0.310017 2.00002ZM2.99002 15V6.09002L12.9 16H3.99002C3.44002 16 2.99002 15.55 2.99002 15ZM6.55002 4.00002L4.55002 2.00002H20.99C22.09 2.00002 22.99 2.90002 22.99 4.00002V16C22.99 17.1 22.09 18 20.99 18H20.55L18.55 16H20C20.55 16 21 15.55 21 15V5.00002C21 4.45002 20.55 4.00002 20 4.00002H6.55002Z" fill="currentColor"/></svg>';

const RuxIconDesktopAccessDisabled = class {
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

export { RuxIconDesktopAccessDisabled as rux_icon_desktop_access_disabled };
