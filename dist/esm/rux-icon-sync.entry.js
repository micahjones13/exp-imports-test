import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.52 2.21003V4.00003C15.7632 4.00003 19.2 7.58003 19.2 12C19.2 13.04 19.008 14.04 18.6528 14.95C18.3936 15.62 17.568 15.8 17.0784 15.29C16.8192 15.02 16.7136 14.61 16.8576 14.25C17.136 13.56 17.28 12.79 17.28 12C17.28 8.69003 14.6976 6.00003 11.52 6.00003V7.79003C11.52 8.24003 11.0016 8.46003 10.6944 8.15003L8.01603 5.36003C7.82403 5.16003 7.82403 4.85003 8.01603 4.65003L10.704 1.86003C11.0016 1.54003 11.52 1.76003 11.52 2.21003ZM5.76003 12C5.76003 15.31 8.34243 18 11.52 18V16.21C11.52 15.76 12.0384 15.54 12.336 15.85L15.0144 18.64C15.2064 18.84 15.2064 19.15 15.0144 19.35L12.336 22.14C12.0384 22.46 11.52 22.24 11.52 21.79V20C7.27683 20 3.84003 16.42 3.84003 12C3.84003 10.96 4.03203 9.96003 4.38723 9.05003C4.64643 8.38003 5.47203 8.20003 5.96163 8.71003C6.22083 8.98003 6.32643 9.39003 6.18243 9.75003C5.90403 10.44 5.76003 11.21 5.76003 12Z" fill="currentColor"/></svg>';

const RuxIconSync = class {
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

export { RuxIconSync as rux_icon_sync };
