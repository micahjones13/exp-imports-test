import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 7.93002V16.07C11 16.88 10.09 17.35 9.41998 16.88L3.64998 12.81C3.08998 12.42 3.08998 11.58 3.64998 11.18L9.41998 7.11002C10.09 6.65002 11 7.12002 11 7.93002ZM18.43 16.89L12.66 12.82C12.09 12.42 12.09 11.58 12.66 11.18L18.43 7.11002C19.1 6.65002 20.01 7.12002 20.01 7.93002V16.07C20.01 16.88 19.09 17.36 18.43 16.89Z" fill="currentColor"/></svg>';

const RuxIconFastRewind = class {
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

export { RuxIconFastRewind as rux_icon_fast_rewind };
