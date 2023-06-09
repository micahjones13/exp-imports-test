import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 4H10V5.6L8.04 3.64C8.2 2.7 9.01 2 10 2H14C15.11 2 16 2.89 16 4V6H20C21.11 6 22 6.89 22 8V17.6L10.4 6H14V4ZM2.7 2.54C3.09 2.15 3.72 2.15 4.11 2.54L22.44 20.88C22.83 21.27 22.83 21.9 22.44 22.29C22.05 22.68 21.42 22.68 21.03 22.29L19.74 21H4C2.89 21 2 20.11 2 19L2.01 8C2.01 6.89 2.89 6 4 6H4.74L2.7 3.95C2.31 3.56 2.31 2.93 2.7 2.54Z" fill="currentColor"/></svg>';

const RuxIconWorkOff = class {
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

export { RuxIconWorkOff as rux_icon_work_off };
