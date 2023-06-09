import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.04999 12.0299C2.47999 7.39995 6.20999 3.58995 10.83 3.06995C16.87 2.37995 22 7.08995 22 12.9999C22 16.2999 20.4 19.2199 17.93 21.0399C17.45 21.3899 16.77 21.2499 16.47 20.7299C16.22 20.2899 16.33 19.7399 16.73 19.4399C18.71 17.9799 20 15.6499 20 12.9999C20 8.27995 15.91 4.50995 11.09 5.05995C7.56999 5.44995 4.64999 8.23995 4.10999 11.7399C3.61999 14.8899 4.98999 17.7499 7.26999 19.4399C7.66999 19.7399 7.77999 20.2999 7.52999 20.7299C7.22999 21.2399 6.54999 21.3899 6.06999 21.0399C3.36999 19.0499 1.69999 15.7299 2.04999 12.0299ZM18 12.9999C18 9.43995 14.89 6.59995 11.25 7.04995C8.62999 7.36995 6.46999 9.45995 6.06999 12.0699C5.73999 14.2199 6.55999 16.1799 7.99999 17.4699C8.47999 17.8999 9.22999 17.7999 9.55999 17.2399L9.56999 17.2299C9.80999 16.8099 9.70999 16.2999 9.34999 15.9699C8.31999 15.0399 7.75999 13.5999 8.12999 12.0299C8.45999 10.6099 9.60999 9.45995 11.03 9.11995C13.65 8.48995 16 10.4699 16 12.9999C16 14.1799 15.48 15.2299 14.67 15.9599C14.31 16.2799 14.2 16.7999 14.44 17.2199L14.45 17.2299C14.76 17.7599 15.48 17.9199 15.95 17.5099C17.2 16.4099 18 14.7999 18 12.9999ZM12 10.9999C10.9 10.9999 9.99999 11.8999 9.99999 12.9999C9.99999 14.0999 10.9 14.9999 12 14.9999C13.1 14.9999 14 14.0999 14 12.9999C14 11.8999 13.1 10.9999 12 10.9999Z" fill="currentColor"/></svg>';

const RuxIconWifiTethering = class {
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

export { RuxIconWifiTethering as rux_icon_wifi_tethering };
