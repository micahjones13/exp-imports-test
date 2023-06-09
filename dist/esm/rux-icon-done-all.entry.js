import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.54 6.28998L11.66 16.17L8.18001 12.7C7.79001 12.31 7.16001 12.31 6.77001 12.7C6.38001 13.09 6.38001 13.72 6.77001 14.11L10.95 18.29C11.34 18.68 11.97 18.68 12.36 18.29L22.95 7.70998C23.34 7.31998 23.34 6.68998 22.95 6.29998H22.94C22.56 5.89998 21.93 5.89998 21.54 6.28998ZM17.3 6.29998C16.91 5.90998 16.28 5.90998 15.89 6.29998L10.25 11.94L11.66 13.35L17.3 7.69998C17.68 7.31998 17.68 6.67998 17.3 6.29998ZM5.30001 18.3L1.12001 14.12C0.730015 13.73 0.730015 13.09 1.12001 12.7C1.51001 12.31 2.14001 12.31 2.53001 12.7L7.41001 17.6L6.71001 18.3C6.32001 18.69 5.69001 18.69 5.30001 18.3Z" fill="currentColor"/></svg>';

const RuxIconDoneAll = class {
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

export { RuxIconDoneAll as rux_icon_done_all };
