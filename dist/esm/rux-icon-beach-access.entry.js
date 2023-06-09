import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.69 7.56024L17.42 8.83024C14.29 5.70024 9.90999 4.65024 5.97999 5.95024C9.34999 2.59024 14.49 2.10024 18.38 4.48024C19.46 5.13024 19.58 6.67024 18.69 7.56024ZM14.56 13.1302L13.13 14.5602L18.86 20.2902C19.26 20.6802 19.9 20.6802 20.29 20.2902C20.68 19.8902 20.68 19.2502 20.29 18.8602L14.56 13.1302ZM5.94999 5.98024C2.58999 9.35024 2.09999 14.4902 4.46999 18.3802C5.12999 19.4602 6.65999 19.5902 7.54999 18.6902L8.81999 17.4202C5.69999 14.2902 4.64999 9.91024 5.94999 5.98024ZM5.95999 5.97024L5.96999 5.96024C8.97999 5.58024 12.86 7.13024 15.99 10.2602L10.26 15.9902C7.12999 12.8502 5.57999 8.98024 5.95999 5.97024Z" fill="currentColor"/></svg>';

const RuxIconBeachAccess = class {
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

export { RuxIconBeachAccess as rux_icon_beach_access };
