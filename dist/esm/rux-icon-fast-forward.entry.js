import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.35 12.82L5.58 16.89C4.91 17.35 4 16.88 4 16.07V7.93002C4 7.12002 4.91 6.65002 5.58 7.11002L11.35 11.19C11.91 11.58 11.91 12.42 11.35 12.82ZM13 16.07V7.93002C13 7.12002 13.91 6.65002 14.58 7.12002L20.35 11.19C20.91 11.58 20.91 12.42 20.35 12.82L14.58 16.89C13.91 17.35 13 16.88 13 16.07Z" fill="currentColor"/></svg>';

const RuxIconFastForward = class {
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

export { RuxIconFastForward as rux_icon_fast_forward };
