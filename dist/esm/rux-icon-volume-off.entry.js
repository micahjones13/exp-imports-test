import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.63 5.04002C3.24 4.65002 3.24 4.02002 3.63 3.63002C4.03 3.24002 4.66 3.24002 5.05 3.63002L20.36 18.95C20.75 19.34 20.75 19.97 20.36 20.36C19.97 20.75 19.34 20.75 18.95 20.36L17.61 19.02C16.94 19.56 16.19 20 15.39 20.33C14.73 20.6 14 20.14 14 19.42C14 19.03 14.22 18.65 14.58 18.5C15.16 18.27 15.69 17.96 16.18 17.59L12 13.41V17.58C12 18.47 10.92 18.92 10.29 18.29L7 15H4C3.45 15 3 14.55 3 14V10C3 9.45002 3.45 9.00002 4 9.00002H7L7.29 8.70002L3.63 5.04002ZM18.59 14.34C18.85 13.61 19 12.82 19 12C19 9.06002 17.18 6.54002 14.61 5.50002C14.25 5.36002 14 5.03002 14 4.65002V4.46002C14 3.83002 14.63 3.37002 15.22 3.60002C18.6 4.89002 21 8.17002 21 12C21 13.39 20.68 14.7 20.12 15.87L18.59 14.34ZM10.29 5.71002L10.12 5.88002L12 7.76002V6.41002C12 5.52002 10.92 5.08002 10.29 5.71002ZM14 7.97002C15.48 8.71002 16.5 10.23 16.5 12C16.5 12.08 16.49 12.16 16.48 12.24L14 9.76002V7.97002Z" fill="currentColor"/></svg>';

const RuxIconVolumeOff = class {
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

export { RuxIconVolumeOff as rux_icon_volume_off };
