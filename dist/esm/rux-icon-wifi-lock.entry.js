import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.31 9.58L24 6C20.66 3.49 16.5 2 12 2C7.5 2 3.34 3.49 0 6L10.4 19.87C11.2 20.94 12.8 20.94 13.6 19.87L15.5 17.34V14.5C15.5 11.74 17.74 9.5 20.5 9.5C20.78 9.5 21.05 9.54 21.31 9.58ZM23 16V14.5C23 13.12 21.88 12 20.5 12C19.12 12 18 13.12 18 14.5V16C17.45 16 17 16.45 17 17V21C17 21.55 17.45 22 18 22H23C23.55 22 24 21.55 24 21V17C24 16.45 23.55 16 23 16ZM19 16H22V14.5C22 13.67 21.33 13 20.5 13C19.67 13 19 13.67 19 14.5V16Z" fill="currentColor"/></svg>';

const RuxIconWifiLock = class {
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

export { RuxIconWifiLock as rux_icon_wifi_lock };
