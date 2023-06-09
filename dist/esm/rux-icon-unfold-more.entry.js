import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.46 8.29022L12 5.83021L9.53001 8.29022C9.14001 8.68021 8.51001 8.68021 8.12001 8.29022C7.73001 7.90022 7.73001 7.27022 8.12001 6.88021L11.29 3.70021C11.68 3.31021 12.31 3.31021 12.7 3.70021L15.87 6.88021C16.26 7.27022 16.26 7.90022 15.87 8.29022C15.48 8.68021 14.85 8.68021 14.46 8.29022ZM9.54001 15.7102L12 18.1702L14.47 15.7202C14.86 15.3302 15.49 15.3302 15.88 15.7202C16.27 16.1102 16.27 16.7402 15.88 17.1302L12.71 20.3002C12.32 20.6902 11.69 20.6902 11.3 20.3002L8.13001 17.1202C7.74001 16.7302 7.74001 16.1002 8.13001 15.7102C8.52001 15.3202 9.15001 15.3202 9.54001 15.7102Z" fill="currentColor"/></svg>';

const RuxIconUnfoldMore = class {
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

export { RuxIconUnfoldMore as rux_icon_unfold_more };
